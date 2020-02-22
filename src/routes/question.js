const express = require('express');
const db = require('../persistence/models');


const router = express.Router();

router.get('/', async (req, res) => {
  let allQuestions = await db.Question.findAll();
  res.send(allQuestions);
});

module.exports = router;