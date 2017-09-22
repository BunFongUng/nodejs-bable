require('dotenv').config();

const defaultConfig = {
  PORT: process.env.PORT,
};

const config = {
  development: {
    DB_URL: 'mongodb://localhost/setupbase-dev',
  },
  production: {
    DB_URL: 'mongodb://localhost/setupbase-pro',
  },
};

function getEnv(env) {
  return config[env];
}

export default {
  ...defaultConfig,
  ...getEnv(process.env.NODE_ENV),
};
