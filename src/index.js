function fvNevek(param1,param2){

}

let masikFv = function (param1,param2){

    console.log(param1);

};


/*
document.addEventListener('DOMContentLoaded', function (){
    console.log('Page loaded');

    document.getElementById('gomb').addEventListener('click',function(){
        document.body.style.backgroundColor = 'lightblue';
    });
});
*/


let t = [4, 78, 715, -99];
/*
t.sort((a, b )=>{
    if(a < b){
        return-1;
    }else if(a>b){
        return 1;
    }else{
        return 0; 
    }
});*/

t.sort((a,b) => {return a -b});
t = t.filter(e => e > 0);
t = t.map(e => e*e);
console.log(t);
 

document.addEventListener('DOMContentLoaded', () =>{
    console.log('Page loaded');

    let idozito;

    document.getElementById('gomb').addEventListener('click',()=> {

        document.body.style.backgroundColor = 'lightblue';

        setTimeout(() => {
            
            document.body.style.backgroundColor = 'white';

        },2000);

        if(idozito!== undefined){
            clearInterval(idozito);
        }

        idozito =  setInterval(()=> {

            console.log(document.body.style.backgroundColor);

        },1000);
    });
});


