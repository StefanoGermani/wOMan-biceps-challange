const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    port: process.env.PORT || 3000,
    username: 'admin',
    password: 'admin',
    db: 'mongodb://localhost/delta-development'
  },

  test: {
    root: rootPath,
    port: process.env.PORT || 3000,
    username: 'admin',
    password: 'admin',
    db: 'mongodb://localhost/delta-test'
  },

  production: {
    root: rootPath,
    port: process.env.PORT || 3000,
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    db: process.env.MONGODB_URI
  }
};

module.exports = config[env];
