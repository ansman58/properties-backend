import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      ...(env.get('DB_VERSION') ? { version: env.get('DB_VERSION') } : {}),
      connection: {
        ...(env.get('DB_CONNECTION_STRING')
          ? { connectionString: env.get('DB_CONNECTION_STRING') }
          : {}),
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      migrations: {
        naturalSort: true,
        disableRollbacksInProduction: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
