const express = require('express');

var router = express.Router();

const objs = [
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "Ruby"
  }
];

router.get('/', (req, res) => {
  res.send(objs);
});

module.exports = router;