const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

// @route   GET /
// @desc    Get all notes
// @access  Public

router.get('/', async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})

// @route   POST /
// @desc    Create new note
// @access  Public

router.post('/', async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      description: req.body.description
    })
    await note.save()
    res.json(note)
  } catch (err) {
    res.status(500).send('Server error: ' + err.message)
  }
})
// @route   GET /:note_id
// @desc    Get note by id
// @access  Public

router.get('/:note_id', async (req, res) => {
  const note = await Note.findById(req.params.note_id)
  if (!note) {
    return res.status(400).json({ msg: 'Note not found' })
  }
  res.json(note)
})

// @route   PUT /noteedit/:note_id
// @desc    Update note
// @access  Public

router.put('/noteedit/:note_id', async (req, res) => {
  const note = await Note.findById(req.params.note_id)
  if (!note) {
    return res.status(400).json({ msg: 'Note not found' })
  }
  await Note.findByIdAndUpdate(req.params.note_id, req.body)
  res.json(note)
})

// @route   DELETE /:note_id
// @desc    Delete note
// @access  Public

router.delete('/:note_id', async (req, res) => {
  const note = await Note.findById(req.params.note_id)
  if (!note) {
    return res.status(400).json({ msg: 'Note not found' })
  }
  await note.delete()
  res.json({ msg: 'Note deleted' })
})

module.exports = router
