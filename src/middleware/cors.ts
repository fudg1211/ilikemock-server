/*
 * @Author: huajian
 * @LastEditors: huajian
 */

import { SetMid } from '../framework/middleware';

const mid = async (ctx, next) => {
  ctx.response.set('ddd', 'dddd');
  await next();
};

SetMid(mid);

