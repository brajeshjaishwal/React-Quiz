const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    userid: Schema.Types.ObjectId,
    groups: [Schema.Types.ObjectId],
    scores: [Schema.Types.ObjectId]
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student