const obj = require('./testData');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.bulkInsert('Subjects', obj.subjects),
      queryInterface.bulkInsert('Questions', obj.questions)
    ];
  },
  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.dropTable('Subjects'),
      queryInterface.dropTable('Questions')
    ];
  } 
}