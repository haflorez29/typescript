"use strict";
(() => {
    const hero = 'Flash';
    // siempre especificar el valor de retorno de la funcion
    function returnName() {
        return hero;
    }
    const activateBatiSingal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatiSingal);
    const heroName = returnName();
})();
