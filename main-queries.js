const Pool = require('pg').Pool
const pool = new Pool ({
  user: 'marika',
  host: 'localhost',
  database: 'carryokay',
  password: 'password',
  port: 5432
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM songs ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}