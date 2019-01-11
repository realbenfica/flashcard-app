let currentQuestionNumber = 0
const questions = ["What is the colour of the sky?", " is the meaning of life", "How deep is the ocean?"]
const answers = ["Blue", "Everything", "Very deep"]

function displayCurrentQuestion() {
    document.getElementById("questions").innerText = questions[currentQuestionNumber];
}

function nextQuestion() {
    currentQuestionNumber++;
    displayCurrentQuestion();
    displayBeginAnswer();
}

displayCurrentQuestion()


function displayCurrentAnswer() {
    document.getElementById("answers").innerHTML = answers[currentQuestionNumber];
}
displayCurrentAnswer();


function displayBeginAnswer() {
    document.getElementById("answers").innerHTML = null;
}
displayBeginAnswer();




// unction displayBeginAnswer() {
//     if(answers[0]){
//         document.getElementById("answers").innerHTML = null;
//         {
//         else { 
//         document.getElementById("answers").innerHTML = answers[currentQuestionNumber];
//         }
// }
// displayBeginAnswer();



// function nav() {
//     document.getElementById("questions").innerText = "What is the meaning of life?"; 
    // const newDiv = document.createElement("div");  
    // newDiv.className = "question2";   
    // section.appendChild(newDiv);
    // document.getElementsByClassName("question2")[0]
    
// }

// Flashcard
// Step 1  html with a title and a question with a button to reveal an answer.
//         - create html file
//         - create js file
//         - Hardcode the question in the html
//         - create a button in js/html
//         - in the js code the answer in the function (event handler)

//         What we want to do:
//         - we want to see a question with a button next or under it. 
//         - we want the answer to be revealed when you click the button.

// Intermediate steps
// Connect colaborator on github
// clone repository on Lai's terminal
// test pull and push functions from Lai's git
// put repository online

// Step 2     create Navigation
//             - create 1 button "next"
//             - create new question
//             - create interaction where pressing next shows new question
// Step 3      create an array with questions and iterate this array in the question BoxBrowser

