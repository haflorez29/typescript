"use strict";
// puede ser tupla, cuarteto ...
(() => {
    // controla, que valores y que tipo de dato tiene el arreglo
    const hero = ['Dr Strange', 100, true];
    // identifica que el valor de hero en la posicion cero es string 
    // no lo puedo cambiar por number
    // hero[0]=50
    hero[0] = 'Ironman';
    hero[1] = 200;
    hero[2] = false;
});
