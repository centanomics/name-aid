'use strict';
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPassword = '123456';

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
      'User',
      [
        {
          id: uuidv4(),
          email: 'shannonemyers189@gmail.com',
          name: 'Shannon Myers',
          password: bcrypt.hashSync(myPassword, saltRounds),
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
    return quueryInterface.bulkDelete('User', nill, {});
  }
};
