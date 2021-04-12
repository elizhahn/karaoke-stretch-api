// const Pool = require('pg').Pool
// const pool = new Pool ({
//   user: 'mfygnbkglmaebt',
//   host: 'ec2-107-22-245-82.compute-1.amazonaws.com',
//   database: 'dequrh9vofh5kl',
//   password: 'dd60e75414fbf6aef52e3a06d1465a6b229bdaed07c67abd44d1236c92a0ce1a',
//   port: 5432
// })

// const getSongs = (request, response) => {
//   pool.query('SELECT * FROM songs ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// module.exports = {
//   getSongs
// }