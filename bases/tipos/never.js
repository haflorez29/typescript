"use strict";
(() => {
    // never no es undefined ni void
    // despues de llamar este tipo de funciones no va a continuar el codigo
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    const error2 = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
})();
