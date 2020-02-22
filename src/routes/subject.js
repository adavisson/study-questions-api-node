const express = require('express');
const obj = require('../services/testData');

var router = express.Router();

router.get('/', (req, res) => {
  res.send(obj.subjects);
});

router.get('/:id/questions', (req, res) => {
  const questions = obj.questions.filter(question => {
    return question.subject_id.toString() === req.params.id;
  });

  res.send(questions);
})

module.exports = router;