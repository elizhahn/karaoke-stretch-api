const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { request } = require('http');
// const { response } = require('express');
// const { error } = require('console');
const app  = express();
const port = process.env.PORT || 8080;
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors())

app.get('/songs', async (request, response) => {
  try {
    const songs = await database('songs').select();
    response.status(200).json(songs);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/genres', async (request, response) => {
  try {
    const genres = await database('genres').select();
    response.status(200).json(genres);
  } catch(error) {
    response.status(500).json({ error })
  }
})

app.get('/', (request, response) => {
  response.json({ test: `Home GET request is functioning properly` })
});


app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
