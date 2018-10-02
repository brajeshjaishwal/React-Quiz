const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
    student: Schema.Types.ObjectId,
    group: Schema.Types.ObjectId,
    TotalMarks: Number,
    //score trace can also come here in form of reference to score trace table,
    // that can store state of quiz's answers for a student
})

const Score = mongoose.model('Score', ScoreSchema)

module.exports = Score