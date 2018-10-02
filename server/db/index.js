const mongoose = require('mongoose')
const User = require('./users')
const Score = require('./score')
const Question = require('./questions')
const Student = require('./students')
const Teacher = require('./teachers')
const Group = require('./group')

const dbUrl = process.env.MONGODB_URI || 'mongodb://ankur:ankur123@ds127490.mlab.com:27490/mcq'

mongoose.Promise = global.Promise

mongoose.connect(dbUrl)

mongoose.connection.once('open', () => {
    console.log(`data base is running on ${dbUrl}.`)
}).on('error', (error) => {
    console.log(`some error occurred while connecting database. ${error}`)
})

module.exports = { User, Score, Question, Student, Teacher, Group }
