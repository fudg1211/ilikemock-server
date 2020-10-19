/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import * as http from 'http';
import * as path from 'path';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as RequireAll from 'require-all';
RequireAll({
  dirname: path.resolve(__dirname, '../app/controller'),
  filter: /.ts$/,
  recursive: false
});
import { routers } from './router';


const router = new KoaRouter();
const app = new Koa();

router.get(routers[0]!.path, (ctx) => {
  routers[0].target.ctx = ctx;
  routers[0].action();
});
app.use(router.routes())
  .use(router.allowedMethods());
const server =  app.listen();


let worker: http.Server;
process.on('message', (name, tcp: http.Server) => {
  worker = tcp;
  if (name === 'server') {
    console.log('start');
    tcp.on('connection', (socket: any) => {
      server.emit('connection', socket);
    });
  }
});

process.on('uncaughtException', () => {
  // 停止接收新的连接
  worker.close(() => {
    console.log('close');
    // 所有已有的连接断开后，退出进程
    process.exit(1);
  });
});

