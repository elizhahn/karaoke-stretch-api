
exports.up = function(knex) {
  return knex.schema.table('genres', function(table) {
    table.increments('id').primary();
  })
};

exports.down = function(knex) {
  return knex.schema.table('genres', function(table) {
    table.dropColumn('id')
  })
};
