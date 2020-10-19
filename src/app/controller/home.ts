/*
 * @Author: huajian
 * @LastEditors: huajian
 */

import { Router } from '../../framework/router';
import { BaseContrller } from '../../framework/baseController';

@Router
export default class HomeController extends BaseContrller {
  public async indexGet():Promise<void> {
    this.ctx.body = await this.model.Aaa.findAll();
    console.log(22211122);
  }
}

