/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import { Model, ModelCtor, Sequelize } from 'sequelize';
import config from '../config';
export const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: 'mysql'
});

type typemodel = ModelCtor<Model<any, any>>;
export interface Models{
  [key:string]:typemodel
}

export const models:Models = {};
export function SetModel(name:string, model:typemodel):any {
  models[name] = model;
}
