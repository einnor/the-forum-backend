const fs = require('fs');
import { get } from '../config';
require('dotenv').config();

/**
 * If ssl is true, we need to add a CA certificate to the dialect options
 * This should be retrieved from the environment variable DB_CA_CERT
 * DB_CA_CERT should point to a file
 * @param config
 */
function configureDbSSL(config) {
  if (config.ssl === 'true') {
    const filepath = get('DB_CA_CERT');
    // Deliberately left out try...catch to allow the function below to fail first
    // before starting the app
    config.dialectOptions = {
      ssl: {
        ca: fs.readFileSync(filepath).toString(),
      },
    };
  }

  return config;
}

const dbConfigurations = {
  username: get('DB_USERNAME'),
  password: get('DB_PASSWORD'),
  database: get('DB_NAME'),
  host: get('DB_HOST'),
  port: get('DB_PORT'),
  dialect: get('DB_DIALECT'),
  operatorsAliases: get('DB_OPERATOR_ALIASES'),
  ssl: get('DB_SSL'),
};

configureDbSSL(dbConfigurations);

export const development = {
  ...dbConfigurations,
};

export const test = {
  ...dbConfigurations,
};

export const production = {
  ...dbConfigurations,
};
