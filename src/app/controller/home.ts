/*
 * @Author: huajian
 * @LastEditors: huajian
 */

import { Router } from '../../framework/router';
import { BaseContrller } from '../../framework/baseController';


@Router
export default class HomeController extends BaseContrller {
  public indexGet():void {
    this.ctx.body = 'sdf';
  }
}

