import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

export default {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      `SELECT id from "Users";`,
    );
    const posts = await queryInterface.sequelize.query(
      `SELECT id from "Posts";`,
    );
    const userRows = users[0];
    const postRows = posts[0];
    return queryInterface.bulkInsert(
      'Comments',
      [
        {
          id: uuidv4(),
          postId: postRows[0].id,
          userId: userRows[0].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[0].id,
          userId: userRows[1].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[0].id,
          userId: userRows[2].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[1].id,
          userId: userRows[0].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[1].id,
          userId: userRows[1].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[1].id,
          userId: userRows[2].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[2].id,
          userId: userRows[0].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[2].id,
          userId: userRows[1].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[2].id,
          userId: userRows[2].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[3].id,
          userId: userRows[0].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[3].id,
          userId: userRows[1].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          postId: postRows[3].id,
          userId: userRows[2].id,
          content: faker.lorem.paragraphs(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
