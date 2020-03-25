const mongoose = require('mongoose')
const crypto = require('crypto')
const ScaleSchema = new mongoose.Schema({
  day: {
    type: String,
    trim: true,
    required: 'day is required'
  },
  scaleds: {
    type: String,
    trim: true,
    required: 'scaleds is required'
  },
  department: {
    type: String,
    trim: true,
    required: 'department is required'
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Scale', ScaleSchema)
