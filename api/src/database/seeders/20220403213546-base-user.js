'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'garciasaaib@gmail.com',
        password: 'garciasaaib',
      }
    ]);
  },

  async down(queryInterface,Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

