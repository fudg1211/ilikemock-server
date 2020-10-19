/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import { DataTypes } from 'sequelize';
import { SetModel, sequelize } from '../../framework/model';


export const Aaa = sequelize.define('aaa', {
  lastName: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  underscored: false,
  charset: 'utf8',
});


SetModel('Aaa', Aaa);