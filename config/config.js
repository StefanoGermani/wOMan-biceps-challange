const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'delta'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/delta-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'delta'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/delta-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'delta'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/delta-production'
  }
};

module.exports = config[env];
