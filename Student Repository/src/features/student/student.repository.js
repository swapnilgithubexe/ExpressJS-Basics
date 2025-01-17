// Please don't change the pre-written code
// Import the necessary modules here

import { ObjectId } from "mongodb";
import { getClient, getDB } from "../../config/mongodb.js";

const collectionName = "students";

class studentRepository {
  async addStudent(studentData) {
    const db = getDB();
    await db.collection(collectionName).insertOne(studentData);
  }

  async getAllStudents() {
    const db = getDB();
    const students = await db.collection(collectionName).find({}).toArray();
    return students;
  }

  //You need to implement methods below:
  // Start Writing your code
  async createIndexes() {
    const db = getDB();
    return await db.collection(collectionName).createIndexes([
      {
        key: { name: 1 }
      },
      {
        key: { age: 1, grade: -1 }
      }
    ]);
  }

  async getStudentsWithAverageScore() {
    try {
      const db = getDB();
      return await db.collection(collectionName).aggregate([
        { $match: { assignments: { $exists: true, $ne: [] } } },

        { $unwind: "$assignments" },

        {
          $group: {
            _id: "$name",
            averageScore: {
              $avg: "$assignments.score"
            }
          }

        }
      ]).toArray();
    } catch (error) {
      console.log(error);
    }
  }

  async getQualifiedStudentsCount() {
    const db = getDB();
    const result = await db.collection(collectionName).aggregate([
      {
        $match: {
          age: { $gt: 9 },
          grade: { $lte: "B" },
          assignments: {
            $elemMatch: {
              title: "Math",
              score: { $gte: 60 }
            }
          }
        }
      },
      {
        $count: "qualifiedStudents"
      }
    ]).toArray();
    return result.length > 0 ? result[0].qualifiedStudents : 0;
  }

  async updateStudentGrade() {

  }
}

export default studentRepository;
