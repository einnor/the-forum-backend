import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
require('dotenv').config();

import { get } from '../../config';
import CategoryModel from './category';
import UserModel from './user';
import PostModel from './post';
import CommentModel from './comment';

const environment = get('NODE_ENV') || 'development';
const config = require('../config')[environment];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db['Category'] = CategoryModel(sequelize, DataTypes);
db['User'] = UserModel(sequelize, DataTypes);
db['Post'] = PostModel(sequelize, DataTypes);
db['Comment'] = CommentModel(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
