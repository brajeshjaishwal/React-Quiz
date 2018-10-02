const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    group: Schema.Types.ObjectId,
    detail: {
        type: String,
        unique: true
    },
    answers: [String],
    correct_answer: String,
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question