/*
 * @Author: huajian
 * @LastEditors: huajian
 */

import { Model, ModelCtor } from 'sequelize';
type typemodel = ModelCtor<Model<any, any>>;

interface model{
    User:typemodel
}

declare let model: model;
export default model;
