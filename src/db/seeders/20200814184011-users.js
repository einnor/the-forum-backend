import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

import { SALT_ROUNDS } from '../../config';

export default {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuidv4(),
          firstName: 'Carol',
          lastName: 'Danvers',
          email: 'carol.danvers@example.com',
          password: await bcrypt.hash('carolDANVERS123!!', SALT_ROUNDS),
          avatar:
            'https://paulsexcavations.com.au/wp-content/uploads/2017/11/dummy-image-5.jpg',
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Bucky',
          lastName: 'Barnes',
          email: 'bucky.barnes@example.com',
          password: await bcrypt.hash('buckyBARNES123!!', SALT_ROUNDS),
          avatar:
            'https://secureservercdn.net/198.71.233.141/21d.041.myftpupload.com/wp-content/uploads/2018/12/placeholder-profile-male-500x500.png',
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Natasha',
          lastName: 'Romanov',
          email: 'natasha.romanov@example.com',
          password: await bcrypt.hash('natashaROMANOV123!!', SALT_ROUNDS),
          avatar:
            'https://paulsexcavations.com.au/wp-content/uploads/2017/11/dummy-image-5.jpg',
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
