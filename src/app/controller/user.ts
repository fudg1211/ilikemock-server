/*
 * @Author: huajian
 * @LastEditors: huajian
 */

import { Router } from '../../framework/router';
import { BaseContrller } from '../../framework/baseController';

@Router
export default class UserController extends BaseContrller {
  public async indexGet() {
    this.ctx.body = await this.model.User.findAll();
  }

  public async regGet() {
    const { ctx } = this;
    ctx.body = ctx.query.tel;
  }

  public async loginPost() {
    this.ctx.body = 'sdf';
  }
}

