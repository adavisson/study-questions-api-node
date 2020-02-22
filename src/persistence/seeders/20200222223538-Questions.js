'use strict';
const obj = require('../seedData/testData');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', obj.questions);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    queryInterface.bulkDelete('Questions', null, {});
  }
};
