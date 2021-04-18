module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/carryokay_api',
    useNullAsDefault: true,
    migrations: {
     directory: './db/migrations'
   },
   seeds: {
      directory: './db/seeds/dev'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};

// require('dotenv').config()

// const { Pool } = require('pg')
// const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = 
// `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//   connectionString: isProduction ? "postgres://mfygnbkglmaebt:dd60e75414fbf6aef52e3a06d1465a6b229bdaed07c67abd44d1236c92a0ce1a@ec2-107-22-245-82.compute-1.amazonaws.com:5432/dequrh9vofh5kl" : connectionString, ssl: {rejectUnauthorized: false}, 
// })

// module.exports = {pool}

// const Pool = require('pg').Pool
// const pool = new Pool ({
//   user: 'mfygnbkglmaebt',
//   host: 'ec2-107-22-245-82.compute-1.amazonaws.com',
//   database: 'dequrh9vofh5kl',
//   password: 'dd60e75414fbf6aef52e3a06d1465a6b229bdaed07c67abd44d1236c92a0ce1a',
//   port: 5432
// })