
exports.up = function(knex) {
  return knex.schema
    .createTable('songs', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.string('artist');
      table.string('album_cover');

      table.timestamps(true, true);
    })

    .createTable('genres', function (table) {
      table.integer('song_id').unsigned();
      table.foreign('song_id').references('songs.id');
      table.boolean('Electronica');
      table.boolean('Alternative');
      table.boolean('Pop');
      table.boolean('Dance');
      table.boolean('Hip Hop');
      table.boolean('Rap');
      table.boolean('R&B');
      table.boolean('Country');
      table.boolean('Rock');
      table.boolean('Metal');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('genres')
    .dropTable('songs')
};
