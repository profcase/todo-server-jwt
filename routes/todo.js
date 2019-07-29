const express = require('express')
const Todo = require('../models/todo.js')
const auth = require('../middleware/auth.js')

const router = express.Router()

// @route   GET /todo
// @desc    Get All Todos
// @access  Public
router.get('/', (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(all => res.json(all));
});

// @route   POST /todo
// @desc    Create new Todo
// @access  Private
router.post('/', auth, (req, res) => {
  console.log(`Request body: ${req.body}`)
  const obj = new Todo({
    name: req.body.name
  })
  obj.save().then(item => res.json(item));
})

// @route   DELETE /todo/:id
// @desc    Delete a Todo
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Todo.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router