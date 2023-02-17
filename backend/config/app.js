const express = require('express')
const todoRouter = require('../routes/todos')
const noteRouter = require('../routes/notes')
// const cors = ('cors')
const path = require('path')
const app = express()
require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '..', '..', '/frontend/build')))
  // Handle React routing, return all requests to React app
  /* app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '/client/build', 'index.html'));
  }); */
}

// NOTE - use headers in Express API
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header(
    'Access-Control-Allow-Origin',
    'http://clientscrud.herokuapp.com'
  )
  next()
})

// app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use('/todos/', todoRouter)
app.use('/notes/', noteRouter)

module.exports = app
