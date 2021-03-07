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


// Question One 
// function question1 () {

//     var question1 = "This Is Question One....";
//     a1 = "answer: correct";
//     a2 = "answer: incorrect";
//     a3 = "answer: incorrect";
//     a4 = "answer: incorrect";

//     if question1 = correct (a1) {
//         correctAnswer++
//         //correct
//     }

//     if question1 = incorrect (a2, a3, a4,) {
//         incorrectAnswer--
//         // incorrect
//     }

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

