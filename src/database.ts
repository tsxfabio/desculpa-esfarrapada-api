import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

export const knexConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: '../database/database.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './database/migrations',
    extension: 'ts',
  },
}

export const knex = setupKnex(knexConfig)
