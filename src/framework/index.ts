/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import * as http from 'http';
import * as CP from 'child_process';
import * as OS from 'os';
import config from '../config';

const cpuLength = OS.cpus().length;
const server: http.Server = http.createServer();
server.listen(config.sys.port);

const workers = {};
const maxRestartNum = 100;
let logWorker: CP.ChildProcess;

interface message{
  type: 'log',
  msg: any
}


function createWorker(exitNum = 0) {
  const worker = CP.fork(__dirname + '/worker.ts');
  worker.on('exit', () => {
    exitNum = workers[worker.pid].exitNum;
    delete workers[worker.pid];
    if (exitNum < maxRestartNum) {
      createWorker(++exitNum);
    }
  });
  worker.on('message', (message:message) => {
    if (message.type === 'log') {
      if (!logWorker) {
        createLogWorker();
      }
      logWorker.send(message.msg);
    }
  });
  workers[worker.pid] = {
    exitNum,
    worker,
  };
  worker.send('server', server);
}

function createLogWorker(exitNum = 0) {
  logWorker = CP.fork(__dirname + '/logger.ts');
  workers[logWorker.pid] = {
    exitNum,
    worker: logWorker,
  };
  logWorker.on('exit', () => {
    exitNum = workers[logWorker.pid].exitNum;
    delete workers[logWorker.pid];
    if (exitNum < maxRestartNum) {
      createLogWorker(++exitNum);
    }
  });
}


for (let i = 0; i < cpuLength; i++) {
  createWorker();
}


process.on('exit', () => {
  Object.keys(workers).forEach(key => {
    workers[key].worker.kill();
    delete workers[key];
  });
});

console.log(1111);
