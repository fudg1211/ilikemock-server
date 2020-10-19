/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import { DataTypes } from 'sequelize';
import { SetModel, sequelize } from '../../framework/model';


export const User = sequelize.define('user', {
  lastName: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  underscored: false,
  charset: 'utf8',
});


SetModel('User', User);