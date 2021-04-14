/* eslint-disable linebreak-style */
const aliases = require('./alias-config');

module.exports = {
  webpack(config) {
    const { alias } = config.resolve;
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...alias,
      ...aliases,
    };
    return config;
  },
};
