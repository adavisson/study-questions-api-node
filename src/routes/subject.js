const express = require('express');
const db = require('../persistence/models');

var router = express.Router();

router.get('/', async (req, res) => {  
  let allSubjects = await db.Subject.findAll({
    attributes: ['id', 'name']
  });
  res.json(allSubjects);
});

router.get('/:id/questions', async (req, res) => {
  let questions = await db.Question.findAll({
    where: { subjectId: req.params.id },
    attributes: ['id', 'question', 'answer', 'subjectId']
  });

  res.send(questions);
})

module.exports = router;