const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const contentsController = require('./controllers/animesController.js')

contentsController.rotas(app)

module.exports = app