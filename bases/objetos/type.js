"use strict";
(() => {
    let flash = {
        name: 'Barry Alleng',
        age: 24,
        powers: ['viajar en el tiempo', 'super velocidad']
    };
    let superMan = {
        name: 'Clark Kent',
        age: 23,
        powers: ['viajar en el tiempo', 'super velocidad'],
        getName() {
            return this.name;
        },
    };
})();
