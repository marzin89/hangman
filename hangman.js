let words = ['javascript'];

const btn = document.getElementById('Play');

btn.onclick = function drawLetterLines() {

    let word = document.getElementById('word-area');

    let ctx = word.getContext('2d');

    ctx.beginPath();

    ctx.moveTo(25, 75);

    ctx.lineTo(75, 75);

    ctx.moveTo(100, 75);

    ctx.lineTo(150, 75);

    ctx.moveTo(175, 75);

    ctx.lineTo(225, 75);

    ctx.moveTo(250, 75);

    ctx.lineTo(300, 75);

    ctx.moveTo(325, 75);

    ctx.lineTo(375, 75);

    ctx.moveTo(400, 75);

    ctx.lineTo(450, 75);

    ctx.moveTo(475, 75);

    ctx.lineTo(525, 75);

    ctx.moveTo(550, 75);

    ctx.lineTo(600, 75);

    ctx.moveTo(625, 75);

    ctx.lineTo(675, 75);

    ctx.moveTo(700, 75);

    ctx.lineTo(750, 75);
        
    ctx.stroke();

}

btn.addEventListener('click', drawLetterLines());