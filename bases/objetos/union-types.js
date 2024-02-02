"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['fly']
    };
    console.log(typeof myCustomVariable);
    // devolveria tipo Object, ya que para js no existe el tipo Hero
})();
