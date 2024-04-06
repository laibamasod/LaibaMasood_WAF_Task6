const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullname: String,
    semester: String,
    program: String
});

const student = new mongoose.model("Student",studentSchema)

module.exports = student;