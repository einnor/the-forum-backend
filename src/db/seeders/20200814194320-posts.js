import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

export default {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      `SELECT id from "Users";`,
    );
    const categories = await queryInterface.sequelize.query(
      `SELECT id from "Categories";`,
    );
    const userRows = users[0];
    const categoryRows = categories[0];
    return queryInterface.bulkInsert(
      'Posts',
      [
        {
          id: uuidv4(),
          userId: userRows[0].id,
          categoryId: categoryRows[0].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[0].id,
          categoryId: categoryRows[1].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[0].id,
          categoryId: categoryRows[2].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[1].id,
          categoryId: categoryRows[0].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[1].id,
          categoryId: categoryRows[2].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[1].id,
          categoryId: categoryRows[3].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[2].id,
          categoryId: categoryRows[1].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[2].id,
          categoryId: categoryRows[2].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[2].id,
          categoryId: categoryRows[2].id,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
