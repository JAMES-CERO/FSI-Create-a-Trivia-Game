// variables
let UserName = window.prompt("Enter Your name")
let Userscore = 0
let Playagain = true
 // Making a funtion that has inside de for loop this is for the while repetition
function playGame (){
    //For loop so each question is prompt
for(let i = 0; i < questions.length; i++) {
    let question = questions[i]
    let UserAnswer = window.prompt(question.text)
 // if so we can add the score
if (UserAnswer === question.correctAnswer) {
     Userscore = Userscore + 10
    }
}
// window ALERT so you can see the score
window.alert ("Your score is "+Userscore)
}
// While loop  so you can restart the game 
while (Playagain ===true) {
    playGame()
    let UserChoice = window.prompt("Wanna do it again Y o N")
if (UserChoice === 'Y') {
    Playagain = true
} else {
    Playagain = false
    window.alert("GameOver")
    // prompt game over & set false so the game stops
}
}
