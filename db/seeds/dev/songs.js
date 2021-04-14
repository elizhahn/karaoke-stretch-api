exports.seed = async function (knex) {
  try {
    await knex('genres').del() // delete all genres first
    await knex('songs').del() // delete all songs

    // Now that we have a clean slate, we can re-insert our songs data
    // Insert a single song, return the song ID, insert 2 genres
    const songId = await knex('songs').insert({
      title: 'Body', artist: 'Megan Thee Stallion', album_cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Megan_Thee_Stallion_-_Good_News.png'
    }, 'id')
    return knex('genres').insert([
      { Rap: true, Pop: true, song_id: songId[0] }
    ])
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
}
