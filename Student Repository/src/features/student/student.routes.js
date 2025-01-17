import express from 'express';
import StudentController from './student.controller.js';

const router = express.Router();
const studentController = new StudentController();

// Add a student
router.post('/add-student', (req, res) => {
    studentController.addStudent(req, res);
});

// Get all students
router.get('/all-students', (req, res) => {
    studentController.getAllStudents(req, res);
});
// Create indexes
router.post('/create-indexes', (req, res) => {
    studentController.createIndexes(req, res);
});

// Get students with average score
router.get('/students-average-score', (req, res) => {
    studentController.getStudentsWithAverageScore(req, res);
});

// Get qualified students count
router.get('/qualified-students-count', (req, res) => {
    studentController.getQualifiedStudentsCount(req, res);
});

// router.post('/award-extra-credit', (req, res) => {
//     studentController.awardExtraCredit(req, res);
// });

// route to update student grade
router.post('/update-student-grade', (req, res) => {
    studentController.updateStudentGrade(req, res);
});

export default router;
