/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import Application = require('koa');
import { Sequelize } from 'sequelize';
import model from '../../types/model';
import config from '../config';


export class BaseContrller {
  public config:typeof config = config;
  public ctx:Application.Context;
  public model:Sequelize['models'] &  model
}