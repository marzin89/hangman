let words = ['javascript', 'strawberry', 'television', 'university', 'friendship'];

let word = words[0];

let letterLines = document.getElementById('letter-lines');

let answer = 0;

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

function playRound() {

    let word = words[0];

    if (document.getElementById('J').clicked) {

        document.getElementById('letter1').innerHTML = 'J'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('A').clicked) { 
        
        document.getElementById('letter2').innerHTML = 'A'; 

        document.getElementById('letter4').innerHTML = 'A';
        
        answer += 2;

        return answer;

    } else if (document.getElementById('V').clicked) {
        
        document.getElementById('letter3').innerHTML = 'V'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('S').clicked) { 
        
        document.getElementById('letter5').innerHTML = 'S'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('C').clicked) {
        
        document.getElementById('letter6').innerHTML = 'C'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('R').clicked) {
        
        document.getElementById('letter7').innerHTML = 'R'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('I').clicked) { 
        
        document.getElementById('letter8').innerHTML = 'I'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('P').clicked) { 
        
        document.getElementById('letter9').innerHTML = 'P';
        
        answer += 1;

        return answer;

    } else if (document.getElementById('T').clicked) { 
        
        document.getElementById('letter10').innerHTML = 'T'; 
        
        answer += 1;

        return answer;

    } else if (document.getElementById('B').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('D').clicked) {

        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('E').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('F').clicked) {
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('G').clicked) {

        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('H').clicked) {
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('K').clicked) {
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('L').clicked) {

        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('M').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('N').clicked) {
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('O').clicked) {

        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('P').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('Q').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('U').clicked) {

        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('W').clicked) {
     
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('X').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('Y').clicked) { 
        
        hangman += 1;

        drawHangMan();

        return hangman;

    } else if (document.getElementById('Z').clicked) {

        hangman += 1;

        drawHangMan();

        return hangman;
    }
}         

function drawHangMan() {

    if (hangman == 1 && answer < 10) {
    
        drawHill1();

    } else if (hangman == 2 && answer < 10) {

        drawHill2();

    } else if (hangman == 3 && answer < 10) {

        drawPole();

    } else if (hangman == 4 && answer < 10) {

        drawDiagonalBeam();

    } else if (hangman == 5 && answer < 10) {

        drawHorizontalBeam();

    } else if (hangman == 6 && answer < 10) {

        drawRope();

    } else if (hangman == 7 && answer < 10) {

        drawHead();

    } else if (hangman == 8 && answer < 10) {

        drawTorso();

    } else if (hangman == 9 && answer < 10) {

        drawLeftArm();

    } else if (hangman == 10 && answer < 10) {

        drawRightArm();

    } else if (hangman == 11 && answer < 10) {

        drawLeftLeg();

    } else if (hangman == 12 && answer < 10) {

        drawRightLeg();
    }   
}
