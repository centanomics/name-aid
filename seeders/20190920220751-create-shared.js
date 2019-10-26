'use strict';

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
      'Shares',
      [
        {
          id: '38abcba4-45c2-413b-bf70-45aeb8d65b0a',
          collectionId: '7043fc48-9383-4e6f-b6b9-684d95283d90',
          userId: '1d92f659-9c3f-4111-bff8-c0b0ced7f108',
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
    return queryInterface.bulkDelete('Shares', null, {});
  }
};
