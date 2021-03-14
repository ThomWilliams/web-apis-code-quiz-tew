// Array of questions

var questions = [
    {
        question: "Question 1: Which of these is not a primitive data type?",
        choices: ["A - Function", "B - Boolean", "C - String", "D - Number"],
        answer: "A - Function",
    },
    {
        question: "Question 2: To operate, functions do not require...",
        choices: ["A - Parentheses", "B - Parameters", "C - Square Brackets []", "D - A Function Name"],
        answer: "C - Square Brackets",
    },
    {
        question: "Question 3: A variable declared in a global scope is...",
        choices: ["A - A function", "B - Open source for all developers to use", "C - Only available to the local function", "D - Available to use in all functions, in multiple scripts"],
        answer: "D - Available to use in all functions, in multiple scripts",
    },
    {
        question: "Question 4: What does DOM stand for?",
        choices: ["A - Designate Orientate Manoeuvre", "B - Document Object Model", "C - Document Orienteering Method", "D - Design Orchestration Measure"],
        answer: "B",
    }
];

var answersList = document.createElement("ol");



// Variables
var highScore = document.querySelector(".highscore");
var timeEl = document.querySelector(".timer");
var quizStart = document.querySelector(".quizstart");
var questionGenerator = document.getElementById("questionArea");
var answersArea = document.getElementById("possibleAnswers");
var correctIncorrect = document.getElementById("correctIncorrect");

var currentQuestionIndex = 0;
var timer;
var timerCount = 10;

var enterInitials;


// Start Game with Click Event Listener
quizStart.addEventListener("click", startGame);


// Timer function
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timeEl.textContent = timerCount + " seconds remaining";
        // clock hits zero, reset
        if (timerCount === 0) {
            timeEl.textContent = "Out of Time";
            clearInterval(timer);
        }
    }, 1000);
}


// Start Game function reveals quiz, starts timer, sets question
function startGame() {
    var startArea = document.getElementById("startArea");
    startArea.setAttribute("class", "hide");
    questionGenerator.removeAttribute("class");
    startTimer();
    setQuestion();
}

// setQuestion sets a question from the array of questions
function setQuestion() {

    // variable to display question output in HTML h2 element
    var displayQuestion = document.getElementById("QuestionTitle");
    displayQuestion.textContent = questions[currentQuestionIndex].question;
    // removes all previous buttons before next question
    answersArea.innerHTML = "";

    // set choice of answers from questions.choices
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        // answer output
        
        var buttonChoice = document.createElement("button");
        buttonChoice.setAttribute("style", "font-size: 15px; background-color: #ff531a; color: white");
        buttonChoice.textContent = questions[currentQuestionIndex].choices[i]

        buttonChoice.onclick = checkAnswer;
        answersArea.appendChild(buttonChoice);
    }
}

// Check is the answer is correct

function checkAnswer() {
    if (this.textContent === questions[currentQuestionIndex].answer) {
        choices === answer;
        console.log("Correct");
    } else {
        console.log("Incorrect")
        //Deduct time from timer
        (timerCount --);
    }
}



// function nextQuestion () {
//     if checkAnswer === true 
//     questions[currentQuestionIndex].answer++;
//     else endQuiz };



// Colum tips.....
    //Check it the timer is less than or equal to 0 
    //If it is its game over
    //Else you increment the current question index and call setQuestion again

function endQuiz() {
    if (timer <= 0); 
    alert("Game Over!");
    } 
    


    // Colum - Dispaly the highscores from local storage etc 




/* psuedo code...

- START BUTTON pressed (click event listener)
    - Timer Starts
    - Question prompted with multiple choice questions.
    - if incorrect answers, then time deducted
    - User inputs correct answer, new question prompted
    REPEAT
    - Question prompted with multiple choice questions.
    - if incorrect answers, then time deducted
    - User inputs correct answer, new question prompted

- END OF QUIZ
 - Quiz Over prompt when all questions completed
 - OR Timer equals zero


 - ENTER SCORE
 - Score presented in prompt
 - Enter initials window
 - Try again....


 VARIABLES
 - Array of Quiz questions
 - Array of answers for each question
 - right answer
 - wrong answers
 - timer start
 - timercountdown
 - win message
 - lose message
 - score
 - enter intials user input
 - reset button */









 // IS THIS RIGHT?? OR SHOULD I DEFINE CHECK ANSWER
//     function question1 () {
//     if (questions.question["Question 1: Which of these is not a primitive data type?"]) {
//         questions.choices["A - Function"].addEventListener("click") === true;
//         correctIncorrect.textContent = "Correct";
//         console.log("Correct");
//         question2;
//     } else { 
//         false;
//         console.log("Incorrect");
//     } question2;
//     }

//     function question2 () {
//     if (questions.question["Question 2: To operate, functions do not require..."]) {
//         questions.choices["C - Square Brackets"].addEventListener("click") === true;
//         correctIncorrect.textContent = "Correct";
//         console.log("Correct");
//     } else { 
//         false;
//         correctIncorrect.textContent = "Incorrect";
//         console.log("Incorrect");
//     } question3;
//     }  

//     function question3 () {
//     if (questions.question["Question 3: A variable declared in a global scope is..."]) {
//         questions.choices["D - Available to use in all functions, in multiple scripts"] === true;
//         correctIncorrect.textContent = "Correct";
//         console.log("Correct");
//     } else { 
//         false;
//         correctIncorrect.textContent = "Incorrect";
//         console.log("Incorrect");
//     }
//  }
