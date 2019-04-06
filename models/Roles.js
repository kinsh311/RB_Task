const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./User')
const roleSchema = new Schema({

    admin: [String],
    analyst: [String],
    editor: [String]
})
mongoose.model('roles',roleSchema);