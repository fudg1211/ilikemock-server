/*
 * @Author: huajian
 * @LastEditors: huajian
 */
'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tel: {
        type: DataTypes.STRING(32),
        allowNull:false
      },
      password: {
        allowNull:false,
        type: DataTypes.STRING(128)
      },
      nick: {
        allowNull:false,
        type: DataTypes.STRING(64)
      },
      avatar: {
        allowNull:false,
        type: DataTypes.STRING,
        defaultValue: 'https://img.alicdn.com/tps/TB1ld1GNFXXXXXLapXXXXXXXXXX-200-200.png'
      },
      token: {
        type: DataTypes.STRING(64)
      },
      isLocked: {
        allowNull:false,
        type: DataTypes.TINYINT,
        defaultValue: 0
      },
      isDel: {
        allowNull:false,
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
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('user');
  }
};