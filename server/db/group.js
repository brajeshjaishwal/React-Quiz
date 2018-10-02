const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = new Schema({
    name: String,
    teacher: Schema.Types.ObjectId,
    students: [Schema.Types.ObjectId],
    questions: [Schema.Types.ObjectId]
    //many other details can be here like start and end time of the group, rating of success, outcome, analytics result
})

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group