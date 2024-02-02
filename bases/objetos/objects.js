"use strict";
(() => {
    let flash = {
        name: 'Barry Alleng',
        age: 24,
        powers: ['viajar en el tiempo', 'super velocidad']
    };
    // flash = {
    //     name2: 'Otro nombre'
    // }
    flash = {
        name: 'Barry Alleng',
        // age: 24,
        powers: ['viajar en el tiempo', 'super velocidad'],
        getName() {
            return this.name;
        }
    };
    let superMan = {
        name: 'Clark Kent',
        age: 24,
        powers: ['viajar en el tiempo', 'super velocidad']
    };
})();
