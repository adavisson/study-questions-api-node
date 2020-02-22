'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    subject_id: DataTypes.INTEGER
  }, {
    tableName: 'questions_table'
  });

  Question.associate = function(models) {
    // define associations here
  };

  return Question;
}