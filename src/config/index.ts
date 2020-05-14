import developmentConfig from './development';
import production from './production';

const configs = {
  development: developmentConfig,
  production: production,
};
const env = process.env.NODE_ENV || 'development';

export default () => configs[env];
