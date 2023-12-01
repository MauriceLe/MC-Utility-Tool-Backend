require('dotenv').config({
    path: __dirname + '/../.env'
})

module.exports = {
    api_port: process.env.API_PORT || 5000,
    host: process.env.HOST || '',
    port: process.env.PORT || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || '',
}