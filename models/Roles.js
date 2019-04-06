const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({

    admin: [String],
    analyst: [String],
    editor: [String]
})
mongoose.model('roles',roleSchema);