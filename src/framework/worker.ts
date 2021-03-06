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
RequireAll({
  dirname: path.resolve(__dirname, '../app/model'),
  filter: /.ts$/,
  recursive: false
});
RequireAll({
  dirname: path.resolve(__dirname, '../middleware'),
  filter: /.ts$/,
  recursive: false
});
import { routers } from './router';
import { models } from './model';
import { mids } from './middleware';


const router = new KoaRouter();
const app = new Koa();

routers.forEach((item) => {
  router[item.method](item!.path, async (ctx) => {
    item.target.ctx = ctx;
    item.target.model = models;
    await item.action();
  });
});


mids.forEach((mid) => {
  app.use(mid);
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

