const express = require('express');
const obj = require('../persistence/seeders/testData');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(obj.questions);
});

module.exports = router;