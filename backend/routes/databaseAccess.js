var express = require('express');
var ToDoItem = require('../models/ToDoItem');
const router = express.Router();

router.get('/all', (req, res) => {
  ToDoItem.find((err, todos) => {
    res.send(todos);
  });
});

router.post('/add', (req, res) => {
  const newToDo = new ToDoItem({taskText: req.body.taskText});
  newToDo.save().then(response => {
    res.send(response);
  }).catch(error => {
    res.send(error);
  })
});

router.post('/remove', (req, res) => {
  var id = req.body.id;
  ToDoItem.remove({
    _id: id
  }, error => {
    ToDoItem.find((err, todos) => {
      res.send(todos);
    })
  })
});

router.post('/toggle', (req, res) => {
  var id = req.body.id;
  ToDoItem.findById(id, (err, foundToDo) => {
    if (foundToDo.completed) {
      foundToDo.completed = false;
    } else {
      foundToDo.completed = true;
    }
    foundToDo.save().then(response => {
      ToDoItem.find((err, todos) => {
        res.send(todos);
      })
    })
  })
});

module.exports = router;
