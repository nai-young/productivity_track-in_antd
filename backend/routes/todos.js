const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')
const { check, validationResult } = require('express-validator')

// @route   GET /
// @desc    Get all todos
// @access  Public

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({})
    if (!todos) {
      return res.status(400).json({ msg: 'No todos found' })
    }
    res.json(todos)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET /:todo_id
// @desc    Get todo by id
// @access  Public

router.get('/:todo_id', async (req, res) => {
  const todo = await Todo.findById(req.params.todo_id)
  if (!todo) {
    return res.status(400).json({ msg: 'Todo not found' })
  }
  res.json(todo)
})

// @route   POST /
// @desc    Create new todo
// @access  Public

router.post('/', [
  check('title', 'Todo title is required').not().isEmpty(),
  check('priority', 'Priority is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const {
    title,
    priority
  } = req.body
  const newTodo = {}
  if (title) newTodo.title = title
  if (priority) newTodo.priority = priority
  try {
    const todo = new Todo(newTodo)
    await todo.save()
    res.json(todo)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   PUT /todoedit/:todo_id
// @desc    Update todo by id
// @access  Public

router.put('/todoedit/:todo_id', async (req, res) => {
  const todo = await Todo.findById(req.params.todo_id)
  if (!todo) {
    return res.status(400).json({ msg: 'Todo not found.' })
  }
  await Todo.findByIdAndUpdate(req.params.todo_id, req.body)
  res.json(todo)
})

// @route   DELETE /:todo_id
// @desc    Delete todo by id
// @access  Public

router.delete('/:todo_id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todo_id)
    if (!todo) {
      return res.status(400).json({ msg: 'No todo found' })
    }
    await todo.delete()
    res.json({ msg: 'Todo deleted' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
