const express = require('express');
const obj = require('../services/testData');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(obj.questions);
});

module.exports = router;