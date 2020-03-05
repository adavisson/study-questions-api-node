const express = require('express');
const db = require('../persistence/models');


const router = express.Router();

// index route for questions
router.get('/', async (req, res) => {
  let allQuestions = await db.Question.findAll({
    attributes: ['id', 'question', 'answer', 'subjectId']
  });
  res.send(allQuestions);
});

// create route for questions
router.post('/', async (req, res) => {
  let question = await db.Question.create({
    question: req.body.question,
    answer: req.body.answer,
    subjectId: req.body.subjectId
  })
  res.send(question);
});

module.exports = router;