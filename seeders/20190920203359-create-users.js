'use strict';
const bcrypt = require('bcrypt');

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
      'Users',
      [
        {
          id: '1d92f659-9c3f-4111-bff8-c0b0ced7f108',
          email: 'shannonemyers189@gmail.com',
          name: 'Shannon Myers',
          password: bcrypt.hashSync('123456', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3bd0dd25-abad-416b-acbc-0bef76d3b4cd',
          email: 'datguycomputers@gmail.com',
          name: 'Kevin Myers',
          password: bcrypt.hashSync('1234567', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { individualHooks: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
