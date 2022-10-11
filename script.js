// Define the variables used in the game display
var timer = 10;
var numCorrect = 0;
var numWrong = 0;
var playerInitials = String;
var highScore = 0;
var playerHighScore = [playerInitials, highScore];
// var questionText = [];
var answerText = [];
var currentQuestionIndex = 0;
var groupOfQuestions = [
    { 
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
    
    // console.log(groupOfQuestions.length);
    

function renderActiveQuestion(current) {
    console.log('currently rendering question ', current)
    var questionText = groupOfQuestions[current].question;

    console.log(questionText);
    document.getElementById("question").innerHTML = questionText;
    for (var i=0; i<=3; i++) {
        //  console.log(num);
          answerText[i] = groupOfQuestions[current].answers[i];
          // console.log(groupOfQuestions[i]);
          // console.log(answerText[i]);
    };
      
    document.getElementById("answer1").innerHTML = answerText[0];
    // console.log(answerText[0]);
    document.getElementById("answer2").innerHTML = answerText[1];
    document.getElementById("answer3").innerHTML = answerText[2];
    document.getElementById("answer4").innerHTML = answerText[3];

    
    // console.log("I'm also here");
    
};

function time(timeleft) {
    setInterval(function() { 
        console.log('here');
        if(timeleft <= 0){
            clearInterval();
            document.getElementById("countdownTimer").innerHTML = "Finished";
            // return;
            
            // document.getElementById("question").innerHTML = "";
            // document.getElementById("answer1").innerHTML = "";
            // document.getElementById("answer2").innerHTML = "";
            // document.getElementById("answer3").innerHTML = "";
            // document.getElementById("answer4").innerHTML = "";
        } else {
            document.getElementById("countdownTimer").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
    function reset(){
        timeleft=10;
        document.getElementById("countdownTimer").innerHTML = "10";
    }
}

// render question 1
console.log(currentQuestionIndex);
renderActiveQuestion(currentQuestionIndex);

// time(10);

// when the user selects their answer
console.log("here1");
document.querySelector('#answer1').addEventListener('click', evaluateAnswer);
    // move to next question
    console.log("here2");    
// document.querySelector('#nextQuestion').addEventListener('click', renderActiveQuestion(currentQuestionIndex+1));
document.querySelector('#answer2').addEventListener('click', evaluateAnswer);
//     // move to next question
// document.querySelector('#nextQuestion').addEventListener('click', renderActiveQuestion(currentQuestionIndex++));
console.log("here3");
// // time(10);
document.querySelector('#answer3').addEventListener('click', evaluateAnswer);
//     // move to next question
// document.querySelector('#nextQuestion').addEventListener('click', renderActiveQuestion(currentQuestionIndex++));
console.log("here4");
//     // time(10);
document.querySelector('#answer4').addEventListener('click', evaluateAnswer);

// move onto next question
console.log(currentQuestionIndex);

function evaluateAnswer(event) {
    
    console.log(event)
    // get userChoice
    var userChoice = event.target.innerHTML;
    console.log(userChoice)
    // get correct answer
    var correctAnswerIndex = groupOfQuestions[currentQuestionIndex].correctAns - 1;
    var correctAnswer = groupOfQuestions[currentQuestionIndex].answers[correctAnswerIndex];
    console.log(correctAnswer);
    // check if answer is correct
    // -- if it is correct
    if (userChoice === correctAnswer) {
        // -- -- sya correct
        document.querySelector("#correct-answer").innerHTML=userChoice + " is correct! Well done.";
        console.log('correct')
    } else {
        // -- else 
        // -- --  do something
        document.querySelector("#correct-answer").innerHTML=userChoice + " is incorrect. The correct choice is " + correctAnswer;
        console.log('foreshame');
    }
}

// for (var i=1; i<groupOfQuestions.length; i++){
//     currentQuestionIndex++;
//     if (currentQuestionIndex === groupOfQuestions.length) {
//         console.log('done')
//     } else {
//         renderActiveQuestion(currentQuestionIndex); 
//     }
// }

// function time(timeleft) {
//     setInterval(function() { 
//         console.log('here');
//         if(timeleft <= 0){
//             clearInterval();
//             document.getElementById("countdownTimer").innerHTML = "Finished";
//             // return;
            
//             // document.getElementById("question").innerHTML = "";
//             // document.getElementById("answer1").innerHTML = "";
//             // document.getElementById("answer2").innerHTML = "";
//             // document.getElementById("answer3").innerHTML = "";
//             // document.getElementById("answer4").innerHTML = "";
//         } else {
//             document.getElementById("countdownTimer").innerHTML = timeleft + " seconds remaining";
//         }
//         timeleft -= 1;
//     }, 1000);
// }


// // for each question in group of quesions
// for (var i=0; i<groupOfQuestions.length; i++) {
//     // change the question text in the html to the quesiotn
//     questionText[i] = groupOfQuestions[i].question;
//     //console.log(questionText[i]);
//     renderActiveQuestion(i);
//     console.log(i);
// };

    
    



