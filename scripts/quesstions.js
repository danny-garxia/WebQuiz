
let quiz1Questions = [
    {
        numb:1,
        question:"What does HTML stand for?",
        answer:"A. HyperText Markup Language",
        options: [
         "A. HyperText Markup Language",
         "B. Hyper Monkey Language",
         "C. HperText Marking Language",
         "D. Hide Text Make Laugh"
        ]
    },
    {
        numb:2,
        question:"What is CSS?",
        answer:"B. Cascading Style Sheet",
        options: [
            "A. Curser Style Sheet",
            "B. Cascading Style Sheet",
            "C. Computer Styling Software",
            "D. Computer Science Society"
        ]
    },
    {
        numb:3,
        question:"Java Vs Javascript",
        answer:"C. No Similarites",
        options: [
            "A. Java and JavaScript are the same language.",
            "B. JavaScript Derives From Java",
            "C. No Similarites",
            "D. Both Are Used For For Front End"
        ]
    }, 
    {
        numb:4,
        question:"Which statement is true about JavaScript closures",
        answer:"D. A closure is the combination of a function and the lexical environment within which that function was declared.",
        options: [
          "A. Closures are used only for creating objects",
          "B. Closures can only access variables in their own scope",
          "C. JavaScript does not support closures",
          "D. A closure is the combination of a function and the lexical environment within which that function was declared."
        ]
    },
    {
        numb:5,
        question:"What is the correct HTML element for inserting a line break",
        answer:"A. br",
        options: [ 
        "A. br",
        "B. lb",
        "C. break",
        "D. linebreak",
        ]
    },
];
let quiz3Questions = [
    {
        numb: 1,
        question: "What is the purpose of 'let' and 'const' in JavaScript?",
        answer: "C. They are used to declare variables with block scope",
        options: [
            "A. They are used to create loops",
            "B. They are used to define functions",
            "C. They are used to declare variables with block scope",
            "D. They are used to add comments in code"
        ]
    },
    {
        numb: 2,
        question: "What is the result of the following expression: '5 + 10 * 2'?",
        answer: "B. 25",
        options: [
            "A. 30",
            "B. 25",
            "C. 20",
            "D. 15"
        ]
    },
    {
        numb: 3,
        question: "What does 'NaN' stand for in JavaScript?",
        answer: "A. Not a Number",
        options: [
            "A. Not a Number",
            "B. New and Nice",
            "C. No Accessible Numbers",
            "D. Negative Array Number"
        ]
    },
    {
        numb: 4,
        question: "What is the result of 'typeof []' in JavaScript?",
        answer: "B. 'object'",
        options: [
            "A. 'array'",
            "B. 'object'",
            "C. 'list'",
            "D. 'undefined'"
        ]
    },
    {
        numb: 5,
        question: "What is the use of 'addEventListener' in JavaScript?",
        answer: "C. It is used to attach an event handler to an element",
        options: [
            "A. It is used to create a new HTML element",
            "B. It is used to change the color of an element",
            "C. It is used to attach an event handler to an element",
            "D. It is used to define a new function"
        ]
    },
    {
        numb: 6,
        question: "Which symbol is used for comments in JavaScript?",
        answer: "B. //",
        options: [
            "A. /#",
            "B. //",
            "C. /* */",
            "D. --"
        ]
    }
];
let quiz2Questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "A. HyperText Markup Language",
        options: [
            "A. HyperText Markup Language",
            "B. Hyper Monkey Language",
            "C. HperText Marking Language",
            "D. Hide Text Make Laugh"
        ]
    },
    {
        numb: 2,
        question: "What is CSS?",
        answer: "B. Cascading Style Sheet",
        options: [
            "A. Curser Style Sheet",
            "B. Cascading Style Sheet",
            "C. Computer Styling Software",
            "D. Computer Science Society"
        ]
    },
    {
        numb: 3,
        question: "Java Vs Javascript",
        answer: "C. No Similarites",
        options: [
            "A. Java and JavaScript are the same language.",
            "B. JavaScript Derives From Java",
            "C. No Similarites",
            "D. Both Are Used For For Front End"
        ]
    },
];
// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions array
let shuffledQuestions = shuffleArray(quiz1Questions);
let shuffledQuestions3 = shuffleArray(quiz3Questions);
let shuffledQuestions2 = shuffleArray(quiz2Questions);

quiz1Questions = shuffledQuestions;
quiz3Questions =shuffledQuestions3;
quiz2Questions =shuffledQuestions2;

// Export the shuffled questions array
module.exports = {
    quiz1Questions,
    quiz2Questions,
    quiz3Questions
};