
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/item-tracker.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test-items.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};