const express = require('express')
const bodyParser = require('body-parser')
const app  = express()
const port = 8080
const db = require('./queries')


// SERVER
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('/', (request, response) => {
  response.json({ trash: `This could be anything` })
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})


// API
// Pull in the database with a new file db, export to connect with server
app.get('/users', db.getUsers)