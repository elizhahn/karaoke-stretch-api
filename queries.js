const Pool = require('pg').Pool
const pool = new Pool({
  user: 'api_user', 
  host: 'localhost', 
  database: 'songs', 
  password: 'password', 
  port: 5432
})

// Get all songs query

const getSongs = (request, response) => {
  pool.query('SELECT * FROM songs', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = getSongs;
