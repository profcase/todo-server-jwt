const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 50
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Todo = mongoose.model('todo', TodoSchema)