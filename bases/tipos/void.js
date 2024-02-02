"use strict";
(() => {
    function callBatman() {
        // genera error al asignar un return
        // return 1;
        return;
    }
    // a tiene valor de void, que significa vacio
    // es para funciondes de js que no tiene return
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
        return;
    };
})();
