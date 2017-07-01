var express = require('express');
var ToDoItem = require('../models/ToDoItem');
const router = express.Router();

router.get('/add', (req, res) => {
  const testToDo = new ToDoItem({task: "test task"});

  testToDo.save().then(response => {
    res.send(response);
  }).catch(error => {
    res.send(error);
  })
});

module.exports = router;
