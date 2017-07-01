var mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const ToDoItem = mongoose.model('ToDo', todoItemSchema);

module.exports = ToDoItem;
