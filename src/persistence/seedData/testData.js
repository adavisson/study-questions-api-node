const questions = [
  {
    question: "Question",
    answer: "Answer",
    subjectId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    question: "Question2",
    answer: "Answer2",
    subjectId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    question: "Question3",
    answer: "Answer3",
    subjectId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const subjects = [
  {
    name: "JavaScript",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Ruby",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  questions: questions,
  subjects: subjects
}