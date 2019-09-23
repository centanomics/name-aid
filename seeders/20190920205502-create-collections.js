'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Collections',
      [
        {
          id: '2e889544-2837-4fdd-b00c-42bf500acf6e',
          name: 'Sports Team A',
          userId: '1d92f659-9c3f-4111-bff8-c0b0ced7f108',
          favorite: 'false',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          name: 'Science fair vocab',
          userId: '1d92f659-9c3f-4111-bff8-c0b0ced7f108',
          favorite: 'true',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '7043fc48-9383-4e6f-b6b9-684d95283d90',
          name: '1st Period Students',
          userId: '3bd0dd25-abad-416b-acbc-0bef76d3b4cd',
          favorite: 'false',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          name: '3rd Period Students',
          userId: '3bd0dd25-abad-416b-acbc-0bef76d3b4cd',
          favorite: 'false',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          name: '5th Period Students',
          userId: '3bd0dd25-abad-416b-acbc-0bef76d3b4cd',
          favorite: 'false',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Collections', null, {});
  }
};
