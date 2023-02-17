const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const Note = require('../models/Note')
const Todo = require('../models/Todo')

const notesPath = path.join(__dirname, 'notes.json')
const notesJson = JSON.parse(fs.readFileSync(notesPath, 'utf-8'))

const todosPath = path.join(__dirname, 'todos.json')
const todosJson = JSON.parse(fs.readFileSync(todosPath, 'utf-8'))

const db = process.env.MONGODB_URL

const connectDB = async () => {
  try {
    await mongoose.connect(db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    )
    console.log('MongoDB Database Connected')
    await getNotes()
    await getTodos()
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
async function getNotes () {
  // Delete previous database fields
  console.log('Removing notes...')
  await Note.deleteMany()

  // Add pre-load data from JSON file
  console.log('Adding new notes from file...')
  const res = await Note.insertMany(notesJson.notes)
  console.log(`Inserted ${res.length} notes`)
}

async function getTodos () {
  // Delete previous database fields
  console.log('Removing todos...')
  await Todo.deleteMany()

  // Add pre-load data from JSON file
  console.log('Adding new todos from file...')
  const res = await Todo.insertMany(todosJson.todos)
  console.log(`Inserted ${res.length} todos`)
}
module.exports = connectDB
