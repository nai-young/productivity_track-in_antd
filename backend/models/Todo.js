const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', todoSchema)