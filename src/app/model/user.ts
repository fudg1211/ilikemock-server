/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import { DataTypes } from 'sequelize';
import { SetModel, sequelize } from '../../framework/model';


export const User = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  tel: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING(128)
  },
  nick: {
    allowNull: false,
    type: DataTypes.STRING(64)
  },
  avatar: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'https://img.alicdn.com/tps/TB1ld1GNFXXXXXLapXXXXXXXXXX-200-200.png'
  },
  token: {
    type: DataTypes.STRING(64)
  },
  isLocked: {
    allowNull: false,
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  isDel: {
    allowNull: false,
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  freezeTableName: true,
  underscored: false,
  charset: 'utf8',
});


SetModel('User', User);