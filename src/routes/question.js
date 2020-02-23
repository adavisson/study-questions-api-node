const express = require('express');
const db = require('../persistence/models');


const router = express.Router();

router.get('/', async (req, res) => {
  let allQuestions = await db.Question.findAll({
    attributes: ['id', 'question', 'answer', 'subjectId']
  });
  res.send(allQuestions);
});

module.exports = router;