//Initializing the box sectionsand option list by getting the class with querry selectors
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const optionList = document.querySelector('.option-list');

//Initializing the buttons by getting the class with querry selectors
const nextBtn =document.querySelector('.next-btn');
const tryAgainBtn =document.querySelector('.tryAgain-btn');
const newQuizBtn = document.querySelector('.newQuiz-btn');
const quiZ1= document.querySelector('.quiz1'); 
const quiZ2= document.querySelector('.quiz2'); 
const quiZ3= document.querySelector('.quiz3'); 

//Initializing the question counter 
let questionCount =0;
let questionNum =1;
let userScore =0;

//Creating a function that will display the quiz
function showQuiz(){
    var T = document.querySelector(".hideQuiz");
    T.style.display = "block";  // <-- Set it to block
    quiZ1.style.display = 'none'; // Hide the clicked button
    quiZ2.style.display = 'none'; 
    quiZ3.style.display = 'none'; 
}

//Creating a finction that  will hide the quiz and show the quiz buttons
function showNewGame(){
    hideQuiz();
    quiZ1.style.display = 'block'; 
    quiZ2.style.display = 'block'; 
    quiZ3.style.display = 'block'; 
}

// Creating a function that will hide the quiz
function hideQuiz(){
    var T = document.querySelector(".hideQuiz");
    T.style.display = "none"; 
};

//Creating a function that calls hide quiz and  shows the results box,
function displayResultSection(){
    hideQuiz();
    var R = document.querySelector(".result-box");
    R.style.display = "block";  // <-- Set it to block
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your score ${userScore} out of ${questions.length}`; 
}

//Creating a function that shows the user score in percentage format 
function showResultBox(){
    displayResultSection();
    //assigning values to the  result-button elements
    const CircProg = document.querySelector('.circ-progress'); 
    const progValue = document.querySelector('.prog-value');
    let progStart = -1;
    let progEnd =(userScore / questions.length) * 100;
    let speed =20;

    //filling the results  progress bar with color based on user's score
   let prog = setInterval(() =>{
    progStart++;
    progValue.textContent =`${progStart}%`;
    CircProg.style.background =`conic-gradient(rgb(59, 130, 216) ${progStart*3.6}deg,rgba(0, 0, 0, 0.2)0deg)`;
    if (progStart === progEnd){
        clearInterval(prog);
    }
   },speed);

}



//function that hides the assigning score
function hideScore (){
    var T = document.querySelector(".result-box");
    T.style.display = "none";
}

//Assining on click functionality quiz1,2,3 buttons
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

//Assining on click functionality to next butoton
nextBtn.onclick = ()=>{
    //while quiz has next question
    if (questionCount < questions.length-1) {
        questionCount++;
        showQuestions(questionCount);
        questionNum++;
        questionCounter(questionNum);

        nextBtn.classList.remove('active');

      } else {
        // Quiz is finished
        showResultBox();
    }
}

//Assining on click functionality to try again button
tryAgainBtn.onclick =()=>{
    showQuiz();
    hideScore();
    questionCount =0;
    questionNum =1;
    userScore =0;
    showQuestions(questionCount);
    questionCounter(questionNum);
}

//Assining on click functionality to new game button
newQuizBtn.onclick =()=>{
    showNewGame();
    hideScore();
    questionCount =0;
    questionNum =1;
    userScore =0;
    showQuestions(questionCount);
    questionCounter(questionNum);
}


//function gets question and options from array and displays it in HTML
function showQuestions(index){
    const questiontext =document.querySelector('.question-text');
    questiontext.textContent = `${questions[index].numb}. ${questions[index].question}`;
    let optionTag =`<div class ="option"><span>${questions[index].options[0]}</span></div>
    <div class ="option"><span>${questions[index].options[1]}</span></div>
    <div class ="option"><span>${questions[index].options[2]}</span></div>
    <div class ="option"><span>${questions[index].options[3]}</span></div>`;
    //keepScore(0);
        optionList.innerHTML = optionTag;
        const option = document.querySelectorAll(".option");
        for(i=0 ; i < option.length  ; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)');
        }
        keepScore(0);
}

//function gets checks if selected option is right
function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnwser = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    console.log(`User selected ${userAnswer}`);
    console.log(`User selected ${correctAnwser}`);

        if (userAnswer == correctAnwser) {
            console.log('answer corrrect')
            answer.classList.add('correct');
            userScore+=1;
            keepScore(userScore);
        }
        else{
            console.log('wrong answer');
            answer.classList.add('wrong');
            for(let i = 0; i< allOptions;i++){
             if(   optionList.children[i].textContent == correctAnwser){
                optionList.children[i].setAttribute('class','option correct');
             }
            }
        }
        for(let i = 0; i< allOptions;i++){
            optionList.children[i].classList.add('disabled');
        }
        nextBtn.classList.add('active');
}

//function displays which number user is son
function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent= `${index} of ${questions.length} Questions`;
}

//function displays users score
function keepScore(){
    const headerScore = document.querySelector('.header-score');
    headerScore.textContent = `Score:${userScore} / ${questions.length}`;
}

