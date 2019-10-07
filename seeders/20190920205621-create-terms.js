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
      'Terms',
      [
        {
          id: 'cabca651-2a0c-4044-b0ba-0b0fd445e167',
          name: 'Shannon',
          origin: 'Irish',
          collectionId: '2e889544-2837-4fdd-b00c-42bf500acf6e',
          ipa: 'ˈʃænən',
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
    return queryInterface.bulkDelete('Terms', null, {});
  }
};
