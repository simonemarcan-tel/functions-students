const createStudent = (studentName, studentGrade) => {
    studentObj = {
        name: studentName,
        grade: studentGrade
    }
    return studentObj
}
const mathGrade = createStudent()

const addMathGrade = (mathGrade) => {
    studentObj.mathGrade = 13

    return mathGrade
}
const historyGrade = addMathGrade(mathGrade)

const addHistoryGrade = (historyGrade) => {
    studentObj.historyGrade = 37

    return historyGrade
}
const scienceGrade = addHistoryGrade(historyGrade)

const addScienceGrade = (scienceGrade) => {
    studentObj.scienceGrade = 76

    return scienceGrade

}

const returnedGrades = addScienceGrade(scienceGrade)
console.log(returnedGrades)

