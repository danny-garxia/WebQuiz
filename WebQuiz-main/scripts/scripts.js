const quizBox = document.querySelector('.quiz-box');

let questionCount =0;
let questionNum =1;

// Get questions and options from array

const nextBtn =document.querySelector('.next-btn');

const quiZ1= document.querySelector('.quiz1'); 
const quiZ2= document.querySelector('.quiz2'); 
const quiZ3= document.querySelector('.quiz3'); 



function showQuiz(){
    var T = document.querySelector(".hideQuiz");
    T.style.display = "block";  // <-- Set it to block
    quiZ1.style.display = 'none'; // Hide the clicked button
    quiZ2.style.display = 'none'; // Hide the clicked button
    quiZ3.style.display = 'none'; // Hide the clicked button
}

quiZ1.onclick =()=>{
    showQuiz();
    showQuestions(0);
    questionCounter(1);
}
quiZ2.onclick =()=>{
    showQuiz();
    showQuestions(0);
    questionCounter(1);

}
quiZ3.onclick =()=>{
    showQuiz();
    showQuestions(0);
    questionCounter(1);

}

nextBtn.onclick = ()=>{
    questionCount++;
    if (questionCount < questions.length) {
        showQuestions(questionCount);
        document.querySelector('.question-total').textContent = `${questionCount + 1} out of ${questions.length}`;
        questionNum++;
        questionCounter(questionNum);
      } else {
        // Quiz is finished
        alert('Quiz Finished');
      }
}

const optionList = document.querySelector('.option-list');

function showQuestions(index){
    const questiontext =document.querySelector('.question-text');
    questiontext.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag =`<div class ="option"><span>${questions[index].options[0]}</span></div>
    <div class ="option"><span>${questions[index].options[1]}</span></div>
    <div class ="option"><span>${questions[index].options[2]}</span></div>
    <div class ="option"><span>${questions[index].options[3]}</span></div>`;
        optionList.innerHTML = optionTag;
        const option = document.querySelectorAll(".option");
        for(i=0 ; i < option.length  ; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)');
        }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnwser = questions[questionCount].answer;
    console.log(`User selected ${userAnswer}`);
    console.log(`User selected ${correctAnwser}`);

        if (userAnswer == correctAnwser) {
            console.log('answer corrrect')
            answer.classList.add('correct');
        }
        else{
            console.log('wrong answer');
            answer.classList.add('wrong');

        }
}

function questionCounter(index){
    const questionTotal = document.querySelector('question-tota');
    questionTotal.textContent= `${index} of ${questions.length} Questions`;

}