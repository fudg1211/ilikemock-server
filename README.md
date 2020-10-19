<!--
 * @Author: huajian
 * @LastEditors: huajian
-->
npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate