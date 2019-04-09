const mongoose = require('mongoose');
var Schema=mongoose.Schema;

var student = new Schema({
    name: { type: String },
    contact: { type: Number },
    gender: { type: String },
    email: { type: String },
    course: { type: String },
    address: { type: String }
});

module.exports = mongoose.model('student',student);