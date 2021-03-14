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
        answer: "B - Document Object Model",
    }
];


// Variables
var highScore = document.querySelector(".highscore");
var timeEl = document.querySelector(".timer");
var quizStart = document.querySelector(".quizstart");
var quizEnd = document.getElementById("EndQuiz");
var questionGenerator = document.getElementById("questionArea");
var answersArea = document.getElementById("possibleAnswers");
var correctIncorrect = document.getElementById("correctIncorrect");

var addHighscoreButton = document.getElementById("enter");

var currentQuestionIndex = 0;
var timer;
var timerCount = 45;
var score = 0;

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
            endQuiz();
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

// setQuestion sets a question and answers from the array of questions
function setQuestion() {

    // SETS QUESTIONS
    var displayQuestion = document.getElementById("QuestionTitle");
    displayQuestion.textContent = questions[currentQuestionIndex].question;
    // removes all previous buttons before next question
    answersArea.innerHTML = "";

    // SETS ANSWERS
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var answersList = document.createElement("ul");
        answersList.setAttribute("style", "margin: 0; line-height: 2rem")
        var answerItem = document.createElement("li");
        answerItem.setAttribute("style", "list-style-type: none")

        var buttonChoice = document.createElement("button");
        buttonChoice.setAttribute("style", "font-size: 15px; background-color: #ff531a; color: white");
        buttonChoice.textContent = questions[currentQuestionIndex].choices[i];

        answerItem.appendChild(buttonChoice);
        answersList.appendChild(answerItem);
        answersArea.appendChild(answersList);
        buttonChoice.onclick = checkAnswer;
    }
}


// Check is the answer is correct
function checkAnswer() {
    console.log("Called")

    if (this.textContent === questions[currentQuestionIndex].answer) {
        true;
        console.log("Correct");
        correctIncorrect.textContent = "Correct";
        correctIncorrect.setAttribute("style", "color: green; font-size: 10px; font-style: italic;");
        score += 5
    } else {
        console.log("Incorrect!");
        correctIncorrect.textContent = "Incorrect!";
        correctIncorrect.setAttribute("style", "color: red; font-size: 10px; font-style: italic;");

        timerCount -= 5;
        timeEl.textContent = timerCount + " seconds remaining";
    }
    currentQuestionIndex++;
    console.log(currentQuestionIndex, questions.length)
    if (currentQuestionIndex === questions.length) {
        endQuiz()
    } else {
        setQuestion()
    }
}

function endQuiz() {
    var endScreen = document.getElementById("EndQuiz");
    endScreen.removeAttribute("class", "hide");
    questionArea.setAttribute("class", "hide");
}





// function nextQuestion () {
//     if checkAnswer === true 
//     questions[currentQuestionIndex].answer++;
//     else endQuiz };



    //Check it the timer is less than or equal to 0 
    //If it is its game over
    //Else you increment the current question index and call setQuestion again




    // Display the highscores from local storage etc 




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
