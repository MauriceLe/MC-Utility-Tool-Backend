const express = require('express')
const cors = require('cors')

const config = require('./config')
const models = require('./models')
const routes = require('./routes')

const app = express()

app.set('sequelize', models.sequelize)
 
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.use(routes)

app.get('sequelize').sync().then(async () => {
  console.log("Database " + config.db_url + " connected")
  
  app.listen(config.api_port, async() => {
    console.log('Backend listening on: http://localhost:' + config.api_port)
  }) 
})

// npm install cors sequelize dotenv tedious