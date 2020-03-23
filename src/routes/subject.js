const express = require('express');
const db = require('../persistence/models');

var router = express.Router();

// Functions for Routes
const index = async () => {
  return await db.Subject.findAll({
    attributes: ['id', 'name']
  });
}

const show = async (id) => {
  return await db.Question.findAll({
    where: { subjectId: id},
    attributes: ['id', 'question', 'answer', 'subjectId']
  });
}

const create = async(obj) => {
  return await db.Subject.create({name: obj.name});
}

// index route for subjects
router.get('/', async (req, res) => {  
  let allSubjects = await index()
  res.json(allSubjects);
});

// route to display all questions belonging to a specific subject
router.get('/:id/questions', async (req, res) => {
  let questions = await show(req.params.id);
  res.send(questions);
})

// create route for Subjects
router.post('/', async (req, res) =>{
  // let subject = await db.Subject.create({name: req.body.name});
  let subject = await create(req.body);
  res.send(subject);
})

module.exports = router;