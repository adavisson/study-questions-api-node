// Question Model

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    subjectId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.Subject);
  };
  return Question;
};