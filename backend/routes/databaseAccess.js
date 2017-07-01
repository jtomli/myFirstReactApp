var express = require('express');
var ToDoItem = require('../models/ToDoItem');
const router = express.Router();

router.post('/add', (req, res) => {
  const newToDo = new ToDoItem({task: req.body.task});

  newToDo.save().then(response => {
    res.send(response);
  }).catch(error => {
    res.send(error);
  })
});

module.exports = router;
