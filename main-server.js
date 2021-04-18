const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { request } = require('http');
const { response } = require('express');
const { error } = require('console');
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

app.get('/songs/:id', async (request, response) => {
  try {
    const songs = await database('songs').where('id', request.params.id).select();
    if(songs.length) {
      response.status(200).json(songs);
  } else {
      response.status(404).json({ 
        error: `Could not find song with id ${request.params.id}`
      });
    }
  } catch (error) {
    response.status(500).json({error});
  }
});

app.get('/:id/genres', async (request, response) => {
  const { id } = request.params;
  try {
    const genres = await database('genres').where({song_id: id})
      response.status(200).json(genres);
  } catch (error) {
    response.status(500).json({error});
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
