import developmentConfig from './development';

const configs = {
  development: developmentConfig,
};
const env = process.env.NODE_ENV || 'development';

export default () => configs[env];
