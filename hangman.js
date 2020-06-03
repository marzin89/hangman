let words = ['javascript'];

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

    a_to_m.appendChild(a);

    
    const b = document.createElement('button');

    b.innerText='B';

    b.className='alphabet';

    a_to_m.appendChild(b);


    const c = document.createElement('button');

    c.innerText='C';

    c.className='alphabet';

    a_to_m.appendChild(c);

    
    const d = document.createElement('button');

    d.innerText='D';

    d.className='alphabet';

    a_to_m.appendChild(d);


    const e = document.createElement('button');

    e.innerText='E';

    e.className='alphabet';

    a_to_m.appendChild(e);


    const f = document.createElement('button');

    f.innerText='F';

    f.className='alphabet';

    a_to_m.appendChild(f);

    
    const g = document.createElement('button');

    g.innerText='G';

    g.className='alphabet';

    a_to_m.appendChild(g);


    const h = document.createElement('button');

    h.innerText='H';

    h.className='alphabet';

    a_to_m.appendChild(h);


    const i = document.createElement('button');

    i.innerText='I';

    i.className='alphabet';

    a_to_m.appendChild(i);


    const j = document.createElement('button');

    j.innerText='J';

    j.className='alphabet';

    a_to_m.appendChild(j);


    const k = document.createElement('button');

    k.innerText='K';

    k.className='alphabet';

    a_to_m.appendChild(k);


    const l = document.createElement('button');

    l.innerText='L';

    l.className='alphabet';

    a_to_m.appendChild(l);


    const m = document.createElement('button');

    m.innerText='M';

    m.className='alphabet';

    a_to_m.appendChild(m);

    const n_to_z = document.createElement('div');

    n_to_z.id='N-Z';

    document.body.appendChild(n_to_z);


    const n = document.createElement('button');

    n.innerText='N';

    n.className='alphabet';

    n_to_z.appendChild(n);

    
    const o = document.createElement('button');

    o.innerText='O';

    o.className='alphabet';

    n_to_z.appendChild(o);


    const p = document.createElement('button');

    p.innerText='P';

    p.className='alphabet';

    n_to_z.appendChild(p);


    const q = document.createElement('button');

    q.innerText='Q';

    q.className='alphabet';

    n_to_z.appendChild(q);


    const r = document.createElement('button');

    r.innerText='R';

    r.className='alphabet';

    n_to_z.appendChild(r);


    const s = document.createElement('button');

    s.innerText='S';

    s.className='alphabet';

    n_to_z.appendChild(s);


    const t = document.createElement('button');

    t.innerText='T';

    t.className='alphabet';

    n_to_z.appendChild(t);


    const u = document.createElement('button');

    u.innerText='U';

    u.className='alphabet';

    n_to_z.appendChild(u);


    const v = document.createElement('button');

    v.innerText='V';

    v.className='alphabet';

    n_to_z.appendChild(v);


    const w = document.createElement('button');

    w.innerText='W';

    w.className='alphabet';

    n_to_z.appendChild(w);


    const x = document.createElement('button');

    x.innerText='X';

    x.className='alphabet';

    n_to_z.appendChild(x);


    const y = document.createElement('button');

    y.innerText='Y';

    y.className='alphabet';

    n_to_z.appendChild(y);


    const z = document.createElement('button');

    z.innerText='Z';

    z.className='alphabet';

    n_to_z.appendChild(z);

}