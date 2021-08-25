/*Scope de un bloque

al estar dentro de un bloque de codigo, una variable puede ser llamada si 
esta declarada como var 

pero si esta declarada con let y cosnt no puede ser llamada
*/

const fruits = () => {
    if(true) {
        var fruits1 = 'apple';
        /* var fruits2 = 'banana';
        var fruits3 = 'kiwi'; */
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
    console.log(fruits3);
    }

    console.log(fruits1);
    /* console.log(fruits2);
    console.log(fruits3); */
}

fruits()


let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x);

//Incorrecta
const anotherFunction = () => {

    for (var i=0; i<10; i++ ){
        
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
//Correcta
const anotherFunction = () => {
//variable let no se modifica como lo hace var

    for (let i=0; i<10; i++ ){
        
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction()