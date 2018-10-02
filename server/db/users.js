const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    userType: String,
    email: String,
    //other details can go as well, like address, mobile number and etc.
})

const User = mongoose.model('User', UserSchema)

module.exports = User
