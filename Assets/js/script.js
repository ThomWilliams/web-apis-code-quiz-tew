var highScore = document.querySelector(".highscore");
var timeEl = document.querySelector(".timer");
var quizStart = document.querySelector(".quizstart");
var questionGenerator = document.querySelector(".questiongen");
var qAnswers = document.querySelector(".answers");
var a1 = document.querySelector(".a1");
var a2 = document.querySelector(".a2");
var a3 = document.querySelector(".a3");
var a4 = document.querySelector(".a4");

var correctAnswer = 0;
var incorrectAnswer = 0;
var timer;
var timerCount = 10;

var question;
var quizQuestion;
var answer1;
var answer2;
var answer3;
var answer4;



// Start Quiz Event Listener
quizStart.addEventListener("click", startTimer);


// Timer function
function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = timerCount + " seconds remaining";
        // clock hits zero, reset
        if (timerCount === 0) {
            timeEl.textContent = "Out of Time";
         clearInterval(timer);
        }
    }, 1000);
}



// function startGame() {
//     question = setQuestion(function) () {
//         questionGenerator.textContent = "Question:" + quizQuestion;
//     }
//     // a1 = answer1;
//     // a2 = answer2;
//     // a3 = answer3;
//     // a4 = answer4;
// }

// function question1 () {
//     quizQuestion = "Question 1: This is Question1";
// }



// // // Question One Prompted
// function question1 () {
//     question = "Question 1: This is Question1";
        
//     answer1 = "answer: correct answer";
//     answer2 = "answer: incorrect";
//     answer3 = "answer: incorrect";
//     answer4 = "answer: incorrect";
// }

//      //correct
//     if questionGenerator = a1 () {
//         correctAnswer++;
//         question2;
//     }

//     // incorrect
//     if questionGenerator = a2, a3, a4 () {
//         incorrectAnswer--;

//     }
// }

// function question2 () {

// }


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

