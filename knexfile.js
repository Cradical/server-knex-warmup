// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', //changed from sqlite3
    connection: {
      database: 'g95db',
      user: 'postgres',
      password: 'Galv20!8'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};

// connection: {
//   database: 'postgres://data-api-dev',
//   user:     '',
//   password: ''
// },