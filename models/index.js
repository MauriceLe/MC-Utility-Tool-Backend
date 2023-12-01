const { Sequelize } = require('sequelize')
const config = require('../config')

console.log(config.user);

const sequelize = new Sequelize(
    config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql'
});

const User = require('./user.model')(sequelize)

module.exports = {
  sequelize: sequelize
}