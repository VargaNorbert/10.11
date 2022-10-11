document.addEventListener('DOMContentLoaded',() => {
    let t = [];
    for(let i = 0; i<20; i++){

        t.push(Math.floor((Math.random()*30)+1));

    }

    document.getElementById('gomb').addEventListener('click', () =>{
       let t2= t.filter(e => e%5==0);
       console.log(t2);
    });

    document.getElementById('hozzaad').addEventListener('click', () => {


        t.push(document.getElementById('szam').value);

        console.log(t);
    });


});