const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool} = require('./config')
const app  = express();
const port = process.env.PORT || 8080;
// const db = require('./main-queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors())


const getSongs = (request, response) => {
  pool.query('SELECT * FROM songs', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app.get('/', (request, response) => {
  response.json({ test: `Home GET request is functioning properly` })
});

app.get('/songs', getSongs)

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
