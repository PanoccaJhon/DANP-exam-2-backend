const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'alimentos',
  password: 'mypassword',
  port: 5432,
});

module.exports = pool;
