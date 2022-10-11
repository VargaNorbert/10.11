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

    let lista= [new Szazlabu(12)];

    document.getElementById('feladat6').addEventListener('click',()=> szazlabuMegjelenites('lista',lista));

});

class Szazlabu{
    labakSzama;

    constructor (labakSzama){
        this.labakSzama= labakSzama;
    }

    toString(){
        return this.labakSzama + 'lábú százlábú';
    }

   
};

function labakbolSzazlabuk(t){
    let tomb= new [Szazlabu];

    return t.map(e => new Szazlabu(e))
};

function szazlabuMegjelenites(a,t){

    let szuloElem = document.getElementById(a);

    let label= document.createElement('label');
    
    t.forEach(e =>{
        label.textContent = e.toString();
        let listaElem= document.createElement('li');
        listaElem.appendChild(label);
        szuloElem.appendChild(listaElem);
    })

    
}