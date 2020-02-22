const express = require('express');

const router = express.Router();

const objs = [
  {
    id: 1,
    question: "Question",
    answer: "Answer",
    subject_id: 1
  },
  {
    id: 2,
    question: "Question2",
    answer: "Answer2",
    subject_id: 1
  }
]
router.get('/', (req, res) => {
  res.send(objs);
});

module.exports = router;