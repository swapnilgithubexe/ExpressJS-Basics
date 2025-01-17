import StudentRepository from "./student.repository.js";
import { ObjectId } from "mongodb";

export default class studentController {
  constructor() {
    this.studentRepository = new StudentRepository();
  }

  addStudent = async (req, res) => {
    try {
      const studentData = req.body;
      await this.studentRepository.addStudent(studentData);
      res.status(201).json({ message: "Student added successfully." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while adding the student." });
    }
  };

  getAllStudents = async (req, res) => {
    try {
      const students = await this.studentRepository.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving all students." });
    }
  };

  createIndexes = async (req, res) => {
    try {
      await this.studentRepository.createIndexes();
      res.status(200).json({ message: "Indexes created successfully." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating indexes." });
    }
  };

  getStudentsWithAverageScore = async (req, res) => {
    try {
      const students =
        await this.studentRepository.getStudentsWithAverageScore();
      res.status(200).json(students);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          error:
            "An error occurred while retrieving students with average scores.",
        });
    }
  };
  getQualifiedStudentsCount = async (req, res) => {
    try {
      const count = await this.studentRepository.getQualifiedStudentsCount();
      res.status(200).json({ qualifiedStudentsCount: count });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          error:
            "An error occurred while calculating qualified students count.",
        });
    }
  };
  updateStudentGrade = async (req, res) => {
    try {
      const { studentId, extraCreditPoints } = req.body;
      await this.studentRepository.updateStudentGrade(
        new ObjectId(studentId),
        extraCreditPoints
      );
      res.status(200).json({ message: "Student grade updated successfully." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while updating student grade." });
    }
  };
}
