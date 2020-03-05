const express = require('express');
const db = require('../persistence/models');

var router = express.Router();

// index route for subjects
router.get('/', async (req, res) => {  
  let allSubjects = await db.Subject.findAll({
    attributes: ['id', 'name']
  });
  res.json(allSubjects);
});

// route to display all questions belonging to a specific subject
router.get('/:id/questions', async (req, res) => {
  let questions = await db.Question.findAll({
    where: { subjectId: req.params.id },
    attributes: ['id', 'question', 'answer', 'subjectId']
  });

  res.send(questions);
})

router.post('/', async (req, res) =>{
  let subject = await db.Subject.create({name: req.body.name});
  res.send(subject);
})

module.exports = router;