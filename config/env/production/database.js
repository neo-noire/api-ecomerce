module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'app-31861ba3-6356-4d8e-97ac-6f0afe958025-do-user-13686326-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'db'),
      user: env('DATABASE_USERNAME', 'db'),
      password: env('DATABASE_PASSWORD', 'AVNS_b0VOe8sEv6nXOsXQzjv'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
        ca: env("CA_CERT"),
      },
    },
    debug: false,
  },
})