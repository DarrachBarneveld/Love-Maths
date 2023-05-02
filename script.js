
// ADDING ALL BUTTON EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.getElementsByTagName('button')

    buttons.forEach(button => {

        button.addEventListener('click', () => {
            if(this.getAttribute('data-type') === 'submit'){
                checkAnswer()
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
        
    });
})



// FUNCTIONS


/**
 * Checks answer from the calculateCorrectAnswer function
 */

function checkAnswer(){

}

/**
 * Retreives the operants and the operator from the DOM and returns the correct mathematical answer
 */

function calculateCorrectAnswer(){


}

/**
 * Gets the current score from the DOM and increments the total score
 */


function incrementScore() {

}


/**
 * Gets the total incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    
}


/**
Displays the addition game option operator to the DOM
 */

function displayAdditionQuestion(operand1, operand2) {
    
}

/**
Displays the addition  game option operator to the DOM
 */

function displayAdditionQuestion(operand1, operand2) {

    
}

/**
Displays the subtraction game option operator to the DOM
 */

function displaySubtractQuestion(operand1, operand2) {


}


/**
Displays the multiply game option operator to the DOM
 */

function displayMultiplyQuestion(operand1, operand2) {


}



/**
Displays the division game option operator to the DOM
 */

function displayDivideQuestion(operand1, operand2) {


}