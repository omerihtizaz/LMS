mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    id: String, 
    name: String, 
    title: String, 
    allowDownload: String, 
    difficultyLevel: String, 
    OfferedBy: String, 
    video1: String, 
    video2: String, 
    pdf: String, 
    pptx: String, 
    answers: String,
    quiz: String,
});
const studentSchema = new mongoose.Schema({
    name: 
    {
        type: String, 
        required: true,
    },
    rollNum: 
    {
        type: String, 
        required: true,
    },
});
const lernerSchema = new mongoose.Schema({
    studentRoll: String,
    courseID: String,
    pptx_seen : Boolean,
    pdf_seen : Boolean,
    video1_seen : Boolean,
    video2_seen : Boolean,
    passed: String, 
});
const Course = mongoose.model('course', courseSchema);
const Student = mongoose.model('student', studentSchema);
const Learner = mongoose.model('learner', lernerSchema);


module.exports = {
    Student, Course, Learner
}
