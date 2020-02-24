'use strict';
const obj = require('../seedData/testData');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', obj.questions);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Questions', null, {});
  }
};
