// Update with your config settings.
require("dotenv").config("./env")
module.exports = {



  staging: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },



};
