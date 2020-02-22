const express = require('express');
const db = require('../persistence/models');

var router = express.Router();

router.get('/', async (req, res) => {  
  let allSubjects = await db.Subject.findAll();
  res.json(allSubjects);
});

// router.get('/:id/questions', (req, res) => {
//   const questions = obj.questions.filter(question => {
//     return question.subject_id.toString() === req.params.id;
//   });

//   res.send(questions);
// })

module.exports = router;