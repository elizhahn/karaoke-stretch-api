const songData = require('../../../seeding-data');

const createSong = async (knex, song) => {
  const songId = await knex('songs').insert({
  "title": song.title,
  "artist": song.artist,
  "album_cover": song.album_cover
  }, 'id')

  let genreEntry = song.genres.reduce((acc, genre) => {
    acc[genre] = true;
    return acc
  }, {
    "song_id": songId[0],
    'Electronica': false,
    'Alternative': false,
    'Pop': false,
    'Dance': false,
    'Hip Hop': false,
    'Rap': false,
    'R&B': false,
    'Country': false,
    'Rock': false,
    'Metal': false
  })

  return Promise.resolve(sendGenrePromise(knex, genreEntry))
}

const sendGenrePromise = (knex, genres) => {
  return knex('genres').insert(genres)
}

exports.seed = async function (knex) {
  try {
    await knex('genres').del() // delete all genres first
    await knex('songs').del() // delete all songs

    let songEntries = songData.map(song => {
      return createSong(knex, song)
    });

    return Promise.all(songEntries);
    // Now that we have a clean slate, we can re-insert our songs data
    // Insert a single song, return the song ID, insert 2 genres
    // const songId = await knex('songs').insert({
    //   title: 'Body', artist: 'Megan Thee Stallion', album_cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Megan_Thee_Stallion_-_Good_News.png'
    // }, 'id')
    // return knex('genres').insert([
    //   { Rap: true, Pop: true, song_id: songId[0] }
    // ])
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
