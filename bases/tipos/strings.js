"use strict";
(() => {
    var _a;
    // 4 formas de definir String
    // comillas simples, comilla doble, back tick
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    console.log(`I'm ${batman}`);
    // este error no lo evita typescript
    // console.log(batman[10].toUpperCase)
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'no existe este caracter');
})();
