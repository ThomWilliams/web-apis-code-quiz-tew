// Array of questions

var questions = [
    {
        question: "This is question 1",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "This is question 2",
        choices: ["A", "B", "C", "D"],
        answer: "C"
    },
    {
        question: "This is question 3",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        question: "This is question 4",
        choices: ["A", "B", "C", "D"],
        answer: "B"
    }
];

var highScore = document.querySelector(".highscore");
var timeEl = document.querySelector(".timer");
var quizStart = document.querySelector(".quizstart");
var questionGenerator = document.getElementById("questionArea");
var answersArea = document.getElementById("possibleAnswers");
var qAnswers = document.querySelector(".answers");

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


// Start Game 
function startGame() {
    var startArea = document.getElementById("startArea");
    startArea.setAttribute("class", "hide");
    questionGenerator.removeAttribute("class");
    startTimer();
    setQuestion();
}

function setQuestion() {

    // questions
    var displayQuestion = document.getElementById("QuestionTitle");
    displayQuestion.textContent = questions[currentQuestionIndex].question;
    // removes all previous buttons before next question
    answersArea.innerHTML = "";

    // answers
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent = questions[currentQuestionIndex].choices[i]
        buttonChoice.onclick = checkAnswer;


        answersArea.appendChild(buttonChoice)
    }
}

function checkAnswer() {
    if (this.textContent === questions[currentQuestionIndex].answer) {
        console.log("Correct")
    } else {
        console.log("Incorrect")
        //Deduct time from timer
    }

    // Colum tips.....
    //Check it the timer is less than or equal to 0 
    //If it is its game over
    //Else you increment the current question index and call setQuestion again
}

function endQuiz(){
    // Colum - Dispaly the highscores from local storage etc 
}

 // Along the right lines...

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

