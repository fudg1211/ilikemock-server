/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import { configure, getLogger, Logger } from 'log4js';
import * as path from 'path';

configure({
  appenders: {
    everything: { type: 'dateFile', filename: path.resolve(__dirname, '../logs/all-logs.log'), pattern: '.yyyy-MM-dd', compress: false }
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug' }
  }
});


interface Iaa extends Logger {
	[key: string]: any;
}

const logger: Iaa = getLogger('access') as Iaa;


process.on('message', (log: { type: string, msg: string }) => {
  logger[log.type](log.msg);
});


