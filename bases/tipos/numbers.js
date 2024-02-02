"use strict";
(() => {
    let avengers = 30;
    // si no le doy una valor a avengers
    // avenger<villians va ser false, lo cual estaria mal porque esta comparando undefined con villians
    // Number('23a') esta funcion si recibe algo que no pueda ser numero sera NaN y puede generar errores
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
