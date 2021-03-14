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
var userFinalscore = document.getElementById("final-score");
var answersArea = document.getElementById("possibleAnswers");
var correctIncorrect = document.getElementById("correctIncorrect");

var addHighscoreButton = document.getElementById("enter");

var currentQuestionIndex = 0;
var timer;
var timerCount = 30;
var score = 0;


// FUNCTIONS

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


// setQuestion sets a question and answer from the array
function setQuestion() {

    // Sets Questions
    var displayQuestion = document.getElementById("QuestionTitle");
    displayQuestion.textContent = questions[currentQuestionIndex].question;
    // removes all previous buttons before next question
    answersArea.innerHTML = "";

    // Sets Answers
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var answersList = document.createElement("ul");
        answersList.setAttribute("style", "margin: 0; line-height: 2rem")
        var answerItem = document.createElement("li");
        answerItem.setAttribute("style", "list-style-type: none")

        // Button stylings
        var buttonChoice = document.createElement("button");
        buttonChoice.setAttribute("style", "font-size: 15px; background-color: #ff531a; color: white");
        buttonChoice.textContent = questions[currentQuestionIndex].choices[i];

        answerItem.appendChild(buttonChoice);
        answersList.appendChild(answerItem);
        answersArea.appendChild(answersList);
        buttonChoice.onclick = checkAnswer;
    }
}


// Checks Answer if correct or incorrect
function checkAnswer() {
    console.log("Called")
    if (this.textContent === questions[currentQuestionIndex].answer) {
        true;
        console.log("Correct!");
        correctIncorrect.textContent = "Correct!";
        correctIncorrect.setAttribute("style", "color: green; font-size: 15px; font-style: italic;");
        score += 5
    } else {
        console.log("Incorrect!");
        correctIncorrect.textContent = "Incorrect!";
        correctIncorrect.setAttribute("style", "color: red; font-size: 15px; font-style: italic; border-top: 2px;");

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

// End of Quiz screen
function endQuiz() {
    var endScreen = document.getElementById("EndQuiz");
    endScreen.removeAttribute("class", "hide");
    questionArea.setAttribute("class", "hide");
    clearInterval(timer);
    timeEl.textContent = "Quiz over!";
}


// Add highscore
function addHighscore () {
    var enterInitials = document.getElementById("initials");
    var playerInitials = enterInitials.value;
    var finalScore = {
        initials: playerInitials,
        finalScore: score
    };
    
    var previousScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    previousScores.push(finalScore);
    window.localStorage.setItem("highscores", JSON.stringify(previousScores));

    for (var i = 0; i < previousScores.length; i++) {
        var entry = document.createElement("li");
        entry.textContent = previousScores[i].initials + " : " + previousScores[i].finalScore;
        entry.setAttribute("style", "list-style-type: none; margin-left: none")
        var scoresList = document.getElementById("highscores");
        scoresList.appendChild(entry)
    } 
}

// Start Game 
quizStart.addEventListener("click", startGame);

// Add Highscore
addHighscoreButton.addEventListener("click", addHighscore); 

localStorage.clear();


