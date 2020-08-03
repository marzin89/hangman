let words = ['javascript', 'strawberry', 'television', 'university', 'friendship'];

let word = words[0];

let letterLines = document.getElementById('letter-lines');

let guess = ['—', '—', '—', '—', '—', '—', '—', '—', '—', '—'];

letterLines.innerHTML = guess.join(' ');

let lettersUsed = document.querySelector('p');

let alphabet = new RegExp(/[A-Za-z]/);

const input = document.querySelector('input');

const submit = document.getElementById('submit').addEventListener('click', roundOne);

let hangman = 0;

function drawHill1() {
        
    let hill1 = document.getElementById('hangman-area');

    let ctx = hill1.getContext('2d');

    ctx.moveTo(50, 500);

    ctx.lineTo(150, 400);

    ctx.stroke();

}

function drawHill2() {

    let hill2 = document.getElementById('hangman-area');

    let ctx = hill2.getContext('2d');

    ctx.moveTo(150, 400);

    ctx.lineTo(250, 500);

    ctx.stroke();

}    

function drawPole() {

    let pole = document.getElementById('hangman-area');

    let ctx = pole.getContext('2d');

    ctx.moveTo(150, 400);

    ctx.lineTo(150, 50);

    ctx.stroke();

}

function drawDiagonalBeam() {

    let diagonalBeam = document.getElementById('hangman-area');

    let ctx = diagonalBeam.getContext('2d');

    ctx.moveTo(150, 125);

    ctx.lineTo(225, 50);

    ctx.stroke();

}

function drawHorizontalBeam() {

    let horizontalBeam = document.getElementById('hangman-area');

    let ctx = horizontalBeam.getContext('2d');

    ctx.moveTo(150, 50);

    ctx.lineTo(400, 50);

    ctx.stroke();

}

function drawRope() {

    let rope = document.getElementById('hangman-area');

    let ctx = rope.getContext('2d');

    ctx.moveTo(400, 50);

    ctx.lineTo(400, 100);

    ctx.stroke();

}

function drawHead() {

    let head = document.getElementById('hangman-area');

    let ctx = head.getContext('2d');

    ctx.arc(400, 140, 40, 0, 2 * Math.PI);

    ctx.stroke();

}

function drawTorso() {

    let torso = document.getElementById('hangman-area');

    let ctx = torso.getContext('2d');

    ctx.moveTo(400, 180);

    ctx.lineTo(400, 325);

    ctx.stroke();

}

function drawLeftArm() {

    let leftArm = document.getElementById('hangman-area');

    let ctx = leftArm.getContext('2d');

    ctx.moveTo(400, 190);

    ctx.lineTo(340, 250);

    ctx.stroke();

}

function drawRightArm() {

    let rightArm = document.getElementById('hangman-area');

    let ctx = rightArm.getContext('2d');

    ctx.moveTo(400, 190);

    ctx.lineTo(460, 250);

    ctx.stroke();

}

function drawLeftLeg() {

    let leftLeg = document.getElementById('hangman-area');

    let ctx = leftLeg.getContext('2d');

    ctx.moveTo(400, 325);

    ctx.lineTo(340, 385);

    ctx.stroke();

}

function drawRightLeg() {

    let rightLeg = document.getElementById('hangman-area');

    let ctx = rightLeg.getContext('2d');

    ctx.moveTo(400, 325);

    ctx.lineTo(460, 385);

    ctx.stroke();

}

function roundOne() {

    if (input.value == 'J'.toLowerCase()) {

        guess[0] = 'J';
        
        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'J';

    } else if (input.value == 'A'.toLowerCase()) { 
        
        guess[1] = 'A'; 

        guess[3] = 'A';

        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'A';

    } else if (input.value == 'V'.toLowerCase()) {

        guess[2] = 'V';
        
        letterLines.innerHTML = guess.join(' '); 

        lettersUsed.innerHTML += 'V';

    } else if (input.value == 'S'.toLowerCase()) {
        
        guess[4] = 'S';
        
        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'S';

    } else if (input.value == 'C'.toLowerCase()) {

        guess[5] = 'C';
        
        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'C';

    } else if (input.value == 'R'.toLowerCase()) {

        guess[6] = 'R';
        
        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'R';

    } else if (input.value == 'I'.toLowerCase()) {

        guess[7] = 'I';
        
        letterLines.innerHTML = guess.join(' ');
        
        lettersUsed.innerHTML += 'I';

    } else if (input.value == 'P'.toLowerCase()) { 

        guess[8] = 'P';
        
        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'P';

    } else if (input.value == 'T'.toLowerCase()) {
    
        guess[9] = 'T';

        letterLines.innerHTML = guess.join(' ');

        lettersUsed.innerHTML += 'T';

    } else if (input.value == 'B'.toLowerCase() || input.value == 
    
    'D'.toLowerCase() || input.value == 'E'.toLowerCase() || input.value ==

    'F'.toLowerCase() || input.value == 'G'.toLowerCase() || input.value ==

    'H'.toLowerCase() || input.value == 'K'.toLowerCase() || input.value ==

    'L'.toLowerCase() || input.value == 'M'.toLowerCase() || input.value ==
    
    'N'.toLowerCase() || input.value == 'O'.toLowerCase() || input.value ==
    
    'Q'.toLowerCase() || input.value == 'U'.toLowerCase() || input.value ==
    
    'W'.toLowerCase() || input.value == 'X'.toLowerCase() || input.value ==
    
    'Y'.toLowerCase() || input.value == 'Z'.toLowerCase()) {

        hangman += 1;

        drawHangMan();

        lettersUsed.innerHTML += input.value.toUpperCase();
    
    } else if (alphabet.test(input.value) == false) {

        alert('Please enter a letter (A-Z)!');
    }

    if (letterLines.innerHTML == 'J A V A S C R I P T') {

        alert('You win!');

    } else if (hangman == 12) {

        alert('You lose!');
    }
}

function drawHangMan() {

    if (hangman == 1) {
    
        drawHill1();

    } else if (hangman == 2) {

        drawHill2();

    } else if (hangman == 3) {

        drawPole();

    } else if (hangman == 4) {

        drawDiagonalBeam();

    } else if (hangman == 5) {

        drawHorizontalBeam();

    } else if (hangman == 6) {

        drawRope();

    } else if (hangman == 7) {

        drawHead();

    } else if (hangman == 8) {

        drawTorso();

    } else if (hangman == 9) {

        drawLeftArm();

    } else if (hangman == 10) {

        drawRightArm();

    } else if (hangman == 11) {

        drawLeftLeg();

    } else if (hangman == 12) {

        drawRightLeg();
    }   
}
