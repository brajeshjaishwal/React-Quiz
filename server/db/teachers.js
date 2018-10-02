const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeacherSchema = new Schema({
    userid: Schema.Types.ObjectId,
    groups: [Schema.Types.ObjectId]
})

const Teacher = mongoose.model('Teacher', TeacherSchema)

module.exports = Teacher