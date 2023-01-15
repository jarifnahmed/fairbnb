const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;


module.exports = {
  development: {
    // username,
    // password,
    // database,
    // host,
    // DATABASE_URL: "postgresql://jarif:jdiY4nc8P0vzoMjTwU6J8g@fairbndb-8109.7tt.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full",
    // dialect: 'postgres',
    // seederStorage: 'sequelize',

    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
