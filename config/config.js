const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/delta-development'
  },

  test: {
    root: rootPath,
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/delta-test'
  },

  production: {
    root: rootPath,
    port: 80,
    db: process.env.MONGODB_URI
  }
};

module.exports = config[env];
