let words = ['javascript', 'strawberry', 'television', 'university', 'friendship'];

let word = words[0];

function drawLetterLines() {

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

function drawAlphabet() {

    const a_to_m = document.createElement('div');

    a_to_m.id='A-M';

    document.body.appendChild(a_to_m);

    
    const a = document.createElement('button');

    a.innerText='A';

    a.className='alphabet';

    a.id='A';

    a_to_m.appendChild(a);

    a.onclick=drawA;

    
    const b = document.createElement('button');

    b.innerText='B';

    b.className='alphabet';

    b.id='B';

    a_to_m.appendChild(b);

    b.onclick=drawB;


    const c = document.createElement('button');

    c.innerText='C';

    c.className='alphabet';

    c.id='C';

    a_to_m.appendChild(c);

    c.onclick=drawC;

    
    const d = document.createElement('button');

    d.innerText='D';

    d.className='alphabet';

    d.id='D';

    a_to_m.appendChild(d);

    d.onclick=drawD;


    const e = document.createElement('button');

    e.innerText='E';

    e.className='alphabet';

    e.id='E';

    a_to_m.appendChild(e);
    
    e.onclick=drawE;


    const f = document.createElement('button');

    f.innerText='F';

    f.className='alphabet';

    f.id='F';

    a_to_m.appendChild(f);

    f.onclick=drawF;

    
    const g = document.createElement('button');

    g.innerText='G';

    g.className='alphabet';

    g.id='G';

    a_to_m.appendChild(g);


    const h = document.createElement('button');

    h.innerText='H';

    h.className='alphabet';

    h.id='H';

    a_to_m.appendChild(h);

    h.onclick=drawH;


    const i = document.createElement('button');

    i.innerText='I';

    i.className='alphabet';

    i.id='I';

    a_to_m.appendChild(i);

    i.onclick=drawI;


    const j = document.createElement('button');

    j.innerText='J';

    j.className='alphabet';

    j.id='J';

    a_to_m.appendChild(j);

    j.onclick=drawJ;


    const k = document.createElement('button');

    k.innerText='K';

    k.id='K';

    k.className='alphabet';

    a_to_m.appendChild(k);


    const l = document.createElement('button');

    l.innerText='L';

    l.className='alphabet';

    l.id='L';

    a_to_m.appendChild(l);

    l.onclick=drawL;


    const m = document.createElement('button');

    m.innerText='M';

    m.className='alphabet';

    m.id='M';

    a_to_m.appendChild(m);

    
    const n_to_z = document.createElement('div');

    n_to_z.id='N-Z';

    document.body.appendChild(n_to_z);


    const n = document.createElement('button');

    n.innerText='N';

    n.className='alphabet';

    n.id='N';

    n_to_z.appendChild(n);

    n.onclick=drawN;

    
    const o = document.createElement('button');

    o.innerText='O';

    o.className='alphabet';

    o.id='O';

    n_to_z.appendChild(o);

    o.onclick=drawO;


    const p = document.createElement('button');

    p.innerText='P';

    p.className='alphabet';

    p.id='P';

    n_to_z.appendChild(p);

    p.onclick=drawP;


    const q = document.createElement('button');

    q.innerText='Q';

    q.className='alphabet';

    q.id='Q';

    n_to_z.appendChild(q);


    const r = document.createElement('button');

    r.innerText='R';

    r.className='alphabet';

    r.id='R';

    n_to_z.appendChild(r);

    r.onclick=drawR;


    const s = document.createElement('button');

    s.innerText='S';

    s.className='alphabet';

    s.id='S';

    n_to_z.appendChild(s);

    s.onclick=drawS;


    const t = document.createElement('button');

    t.innerText='T';

    t.className='alphabet';

    t.id='T';

    n_to_z.appendChild(t);

    t.onclick=drawT;


    const u = document.createElement('button');

    u.innerText='U';

    u.className='alphabet';

    u.id='U';

    n_to_z.appendChild(u);

    u.onclick=drawU;


    const v = document.createElement('button');

    v.innerText='V';

    v.className='alphabet';

    v.id='V';

    n_to_z.appendChild(v);

    v.onclick=drawV;


    const w = document.createElement('button');

    w.innerText='W';

    w.className='alphabet';

    w.id='W';

    n_to_z.appendChild(w);

    w.onclick=drawW;


    const x = document.createElement('button');

    x.innerText='X';

    x.className='alphabet';

    x.id='X';

    n_to_z.appendChild(x);


    const y = document.createElement('button');

    y.innerText='Y';

    y.className='alphabet';

    y.id='Y';

    n_to_z.appendChild(y);

    y.onclick=drawY;


    const z = document.createElement('button');

    z.innerText='Z';

    z.className='alphabet';

    z.id='Z';

    n_to_z.appendChild(z);

}

function drawA() {

    let a = document.getElementById('word-area');

    let ctx = a.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('A', 100, 60);

        ctx.fillText('A', 250, 60);

    } else if ( word == words[1] ) {

        ctx.fillText('A', 250, 60);

    }

}

function drawB() {

    let b = document.getElementById('word-area');

    let ctx = b.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[1] ) {

        ctx.fillText('B', 400, 60);

    }

}

function drawC() {

    let c = document.getElementById('word-area');

    let ctx = c.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('C', 400, 60);

    }

}

function drawD() {

    let d = document.getElementById('word-area');

    let ctx = d.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[4] ) {

        ctx.fillText('D', 400, 60);

    }

}

function drawE() {

    let e = document.getElementById('word-area');

    let ctx = e.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[1] ) {

        ctx.fillText('E', 475, 60);

    } else if ( word == words[2] ) {

        ctx.fillText('E', 100, 60);

        ctx.fillText('E', 250, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('E', 325, 60);

    } else if ( word == words[4] ) {

        ctx.fillText('E', 250, 60);

    }

}

function drawF() {

    let f = document.getElementById('word-area');

    let ctx = f.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[4] ) {

        ctx.fillText('F', 25, 60);

    }

}

function drawH() {

    let h = document.getElementById('word-area');

    let ctx = h.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[4] ) {

        ctx.fillText('H', 550, 60);

    }

}

function drawI() {

    let i = document.getElementById('word-area');

    let ctx = i.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('I', 550, 60);

    } else if ( word == words[2] ) {

        ctx.fillText('I', 400, 60);

        ctx.fillText('I', 550, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('I', 175, 60);

        ctx.fillText('I', 550, 60);

    } else if ( word == words[4] ) {

        ctx.fillText('I', 175, 60);

        ctx.fillText('I', 625, 60);

    }

}

function drawJ() {

    let j = document.getElementById('word-area');

    let ctx = j.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('J', 25, 60);

    }

}

function drawL() {

    let l = document.getElementById('word-area');

    let ctx = l.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[2] ) {

        ctx.fillText('L', 175, 60);

    }

}

function drawN() {

    let n = document.getElementById('word-area');

    let ctx = n.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[2] ) {

        ctx.fillText('N', 700, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('N', 100, 60);

    } else if ( word == words[4] ) {

        ctx.fillText('N', 325, 60);

    }

}

function drawO() {

    let o = document.getElementById('word-area');

    let ctx = o.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[2] ) {

        ctx.fillText('O', 625, 60);

    }

}

function drawP() {

    let p = document.getElementById('word-area');

    let ctx = p.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('P', 625, 60);

    } else if ( word == words[4] ) {

        ctx.fillText('P', 700, 60);

    }

}

function drawR() {

    let r = document.getElementById('word-area');

    let ctx = r.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('R', 475, 60);

    } else if ( word == words[1] ) {

        ctx.fillText('R', 175, 60);

        ctx.fillText('R', 550, 60);

        ctx.fillText('R', 625, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('R', 400, 60);

    } else if ( word == words[4] ) {

        ctx.fillText('R', 100, 60);

    }

}

function drawS() {

    let s = document.getElementById('word-area');

    let ctx = s.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('S', 325, 60);

    } else if ( word == words[1] ) {

        ctx.fillText('S', 25, 60);

    } else if ( word == words[2] ) {

        ctx.fillText('S', 475, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('S', 475, 60);

    } else if ( word == words[4] ) {

        ctx.fillText('S', 475, 60);

    }

}

function drawT() {

    let t = document.getElementById('word-area');

    let ctx = t.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('T', 700, 60);

    } else if ( word == words[1] ) {

        ctx.fillText('T', 100, 60);

    } else if ( word == words[2] ) {

        ctx.fillText('T', 25, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('T', 625, 60);

    }

}

function drawU() {

    let u = document.getElementById('word-area');

    let ctx = u.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[3] ) {

        ctx.fillText('U', 25, 60);

    }

}

function drawV() {

    let v = document.getElementById('word-area');

    let ctx = v.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[0] ) {

        ctx.fillText('V', 175, 60);

    } else if ( word == words[2] ) {

        ctx.fillText('V', 325, 60);

    } else if ( word == words[3] ) {

        ctx.fillText('V', 250, 60);

    }

}

function drawW() {

    let w = document.getElementById('word-area');

    let ctx = w.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[1] ) {

        ctx.fillText('W', 325, 60);

    }

}

function drawY() {

    let y = document.getElementById('word-area');

    let ctx = y.getContext('2d');

    ctx.font = '50px Arial';

    if ( word == words[3] ) {

        ctx.fillText('Y', 700, 60);

    } else if ( word == words[1] ) {

        ctx.fillText('Y', 700, 60);

    }

}

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

    drawLetterLines();

    drawAlphabet();

    switch (true) {

        case document.getElementById('J').clicked : drawJ(); answer += 1;

        break;

        case document.getElementById('A').clicked : drawA(); answer += 2;

        break;

        case document.getElementById('V').clicked : drawV(); answer += 1;

        break;

        case document.getElementById('S').clicked : drawS(); answer += 1;

        break;

        case document.getElementById('C').clicked : drawC(); answer += 1

        break;

        case document.getElementById('R').clicked : drawR(); answer += 1

        break;

        case document.getElementById('I').clicked : drawI(); answer += 1;

        break;

        case document.getElementById('P').clicked : drawP(); answer += 1;

        break;

        case document.getElementById('T').clicked : drawT(); answer += 1;

        break;

        case document.getElementById('B').clicked : hangman += 1;

        break;

        case document.getElementById('D').clicked : hangman += 1;

        break;

        case document.getElementById('E').clicked : hangman += 1;

        break;

        case document.getElementById('F').clicked : hangman += 1;

        break;

        case document.getElementById('G').clicked : hangman += 1;

        break;

        case document.getElementById('H').clicked : hangman += 1;

        break;

        case document.getElementById('K').clicked : hangman += 1;

        break;

        case document.getElementById('L').clicked : hangman += 1;

        break;

        case document.getElementById('M').clicked : hangman += 1;

        break;

        case document.getElementById('N').clicked : hangman += 1;

        break;

        case document.getElementById('O').clicked : hangman += 1;

        break;

        case document.getElementById('P').clicked : hangman += 1;

        break;

        case document.getElementById('Q').clicked : hangman += 1;

        break;

        case document.getElementById('U').clicked : hangman += 1;

        break;

        case document.getElementById('W').clicked : hangman += 1;

        break;

        case document.getElementById('X').clicked : hangman += 1;

        break;

        case document.getElementById('Y').clicked : hangman += 1;

        break;

        case document.getElementById('Z').clicked : hangman += 1;

    }
          
}
