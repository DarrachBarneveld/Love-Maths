
// ADDING ALL BUTTON EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    let buttons = Array.from(document.getElementsByTagName("button"))

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    })

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");

})



// FUNCTIONS

/**
 * The main game. Run on a load and after each guess
 */

function runGame(gameType){

    console.log(gameType)

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract" ) {
        displaySubtractQuestion(num1, num2);
    }else if(gameType === 'division'){

        // Check if numbers are divisible in a whole number

        if(num1 % num2 === 0 ){
            displayDivisionQuestion(num1, num2)
        }
        else runGame('division')

    } 
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks answer from the calculateCorrectAnswer function
 */

function checkAnswer(){

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Retreives the operants and the operator from the DOM and returns the correct mathematical answer
 */

function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } 
    else if (operator === "/") {
        return [operand1 / operand2, "division"];
    }else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }


}

/**
 * Gets the current score from the DOM and increments the total score
 */


function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}


/**
 * Gets the total incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

    
}



/**
Displays the addition  game option operator to the DOM
 */

function displayAdditionQuestion(operand1, operand2) {

    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

    
}

/**
Displays the subtraction game option operator to the DOM
 */

function displaySubtractQuestion(operand1, operand2) {


    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";


}


/**
Displays the multiply game option operator to the DOM
 */

function displayMultiplyQuestion(operand1, operand2) {


    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";


}



/**
Displays the division game option operator to the DOM
 */

function displayDivisionQuestion(operand1, operand2) {


    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";


}