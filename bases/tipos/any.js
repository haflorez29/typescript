"use strict";
// se debe usar lo menos posible, es eliminar toda la validación sobre tipos
(() => {
    let avenger = 123;
    // si declaro con let, por defecto tiene any
    let exists;
    let power;
    avenger = 134.234234;
    console.log(avenger.toFixed(2));
    avenger = 'Dr strange';
    console.log(avenger.charAt(0));
    // casteo para que sea tratado como un tipo de dato especifico
    console.log(avenger.charAt(0));
    console.log(avenger.toFixed(0));
})();
