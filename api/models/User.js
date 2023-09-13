// first, import mongoose so that we can
// connect to the database
const mongoose = require('mongoose')
const {Schema, model} = mongoose


const UserSchema = Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

const UserModel = model('User', UserSchema)

module.exports = UserModel