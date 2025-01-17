export default class StudentModel {
    constructor(name, age, grade, assignments = []) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.assignments = assignments;
    }
}
