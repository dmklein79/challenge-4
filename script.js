// Define the variables used in the game display
var timer = 10;
var numCorrect = 0;
var numWrong = 0;
var playerInitials = String;
var highScore = 0;
var playerHighScore = [playerInitials, highScore];
var questionText = [];
var answerText = [];
const groupOfQuestions = [
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
    

function renderActiveQuestion(num) {
    console.log(questionText[num]);
    document.getElementById("question").innerHTML = questionText[num];
    for (var i=0; i<=3; i++) {
        //  console.log(num);
          answerText[i] = (i+1) + ". " + groupOfQuestions[num].answers[i];
          // console.log(groupOfQuestions[i]);
          // console.log(answerText[i]);
    };
      
    document.getElementById("answer1").innerHTML = answerText[0];
    // console.log(answerText[0]);
    document.getElementById("answer2").innerHTML = answerText[1];
    document.getElementById("answer3").innerHTML = answerText[2];
    document.getElementById("answer4").innerHTML = answerText[3];

    var timeleft = 10;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdownTimer").innerHTML = "Finished";
            return;
            
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

    // console.log("I'm also here");
    
};

for (var i=0; i<groupOfQuestions.length; i++) {
    questionText[i] = groupOfQuestions[i].question;
    //console.log(questionText[i]);
    renderActiveQuestion(i);
    console.log(i);
};

    
    



