// Define the variables used in the game display
var timer = 10;
var numCorrect = 0;
var numWrong = 0;
var playerInitials = String;
var highScore = 0;
var userScore = 0;
var playerHighScore = [playerInitials, highScore];
var answerText = [];
var currentQuestionIndex = 0;
// Organizing questions into an array of objects, with new questions able to be added to the end
var groupOfQuestions = [
    { 
        // Question, Answer options, Correct Answer as an integer
        "question": "Arrays in JS can be used to store:",
        "answers": [
        "Booleans", 
        "Strings", 
        "Arrays", 
        "All of the Above",
        ],
        "correctAns": 4
    },
    {
        "question": "String values must be enclosed within ____ when being assigned to variables",
        "answers": [
            "Commas",
            "Curly Brackets",
            "Quotes",
            "Parenthesis",
        ],
        "correctAns": 3
    },
    {
        "question": "Commonly used data types DO NOT include:",
        "answers": [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers",
        ],
        "correctAns": 3
    },
    {
        "question": "The condition of an if/else statement is enclosed with:",
        "answers": [
            "Quotes",    
            "Curly Brackets",
            "Parenthesis",
            "Square Brackets",
        ],
        "correctAns": 3
    }
]
    
  
// function to call "current" question
function renderActiveQuestion(current) {
    // console.log('currently rendering question ', current)
    // if the current question is the final question in the group, then we want to check whether
    // a high score was achieved, and leave the loop without going to a next question (because there
    // aren't any more)
    if (current===groupOfQuestions.length) {
        checkHighScore();
        // console.log("checking!");
        return;
    }

    // create vars that represent each part of the object
    var questionText = groupOfQuestions[current].question;

    // console.log(questionText);
    // populate the HTML with the text of the question
    document.getElementById("question").innerHTML = questionText;
    // cycle through (knowing number of multiple choice options in this challenge is 4) and
    // into array goes answer options for current question
    for (var i=0; i<=3; i++) {
        //  console.log(num);
          answerText[i] = groupOfQuestions[current].answers[i];
          // console.log(groupOfQuestions[i]);
          // console.log(answerText[i]);
    };
    
    // populate HTML buttons with answer options
    document.getElementById("answer1").innerHTML = answerText[0];
  //  console.log(answerText[0]);
    document.getElementById("answer2").innerHTML = answerText[1];
    document.getElementById("answer3").innerHTML = answerText[2];
    document.getElementById("answer4").innerHTML = answerText[3];
    // set timer for current question
    // does not seem to be functioning correctly as it "superimposes" a new countdown each
    // time I go to next question.
    // this probably needs to be something standalone, though for this draft I do not know
    // how to accomplish
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    if (timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdownTimer").innerHTML = "Finished!";
        return;
    }
    // else if ((document.getElementById("nextQuestion").clicked===true)){
    //     console.log ("wow!");
    // }
    //console.log("I'm counting");
    document.getElementById("countdownTimer").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    }, 1000);
    
    // console.log("I'm also here");
    
};

// will be called when "Next Question" button is selected by user
function renderNextQuestion() {
    //console.log("next!");
    // move question index by one and call that question #
    currentQuestionIndex++;
    // console.log(currentQuestionIndex);
    renderActiveQuestion(currentQuestionIndex);
}

// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdownTimer").innerHTML = "Finished!";
//     return;
//   }
//   //console.log("I'm counting");
//   document.getElementById("countdownTimer").innerHTML = timeleft + " seconds remaining";
//   timeleft -= 1;
// }, 1000);

// Manually render question 1 to start off
console.log("current question:" + currentQuestionIndex);
renderActiveQuestion(currentQuestionIndex);


// when the user selects their answer, evaluate each option at a time, through the evaluateAnswer
// function, after waiting for button to be clicked
document.querySelector('#answer1').addEventListener('click', evaluateAnswer);  
document.querySelector('#answer2').addEventListener('click', evaluateAnswer);
document.querySelector('#answer3').addEventListener('click', evaluateAnswer);
document.querySelector('#answer4').addEventListener('click', evaluateAnswer);


// I thought a next step could be to have the question move to the next one upon a button click,
// however that would actually then display the answer while displaying the next question, and
// that is not desired
// if (document.getElementById("#answer1").clicked === true){
//     console.log ("you clicked box 1");

// }

if (highScore !== 0) {
    document.getElementById("highScoreInitials").innerHTML = playerInitials;
    document.getElementById("highScore").innerHTML = userScore;
}

function evaluateAnswer(event) {
    // console.log("Here");
    // seeing what kind of data gets returned so that I look in "target"
    // console.log(event)
    // get userChoice
    var userChoice = event.target.innerHTML;
    // console.log(userChoice)
    // get correct answer
    var correctAnswerIndex = groupOfQuestions[currentQuestionIndex].correctAns - 1;
    var correctAnswer = groupOfQuestions[currentQuestionIndex].answers[correctAnswerIndex];
    console.log(correctAnswer);
    // check if answer is correct
    // -- if it is correct
    if (userChoice === correctAnswer) {
        // -- say correct and add to the user score
        document.querySelector("#correct-answer").innerHTML=userChoice + " is correct! Well done.";
        // console.log('correct');
        userScore++;
        return;
    } else {
        // -- else 
        // -- do something different
        document.querySelector("#correct-answer").innerHTML=userChoice + " is incorrect. The correct answer is " + correctAnswer +".";
        // console.log('incorrect');
        return;
    }
}

// if we have a new high score, send a prompt to user to enter initials
function checkHighScore(){
    if (userScore > highScore){
        // prompt user for initials
        playerInitials = window.prompt("Congrats! This is a high score! Enter your initials: ");
        // input onto page
        document.getElementById("highScoreInitials").innerHTML = playerInitials;
        document.getElementById("highScore").innerHTML = userScore;
        // store in local storage on computer and in variable highScore
        highScore = localStorage.setItem(userScore, userScore);
        console.log(highScore);
        console.log(userScore);
    } 
}

// some things still to be tweaked:
// - display of high score because it is correctly stored in browser
// - counter issues, including stopping counter when button is clicked (?)




