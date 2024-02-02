"use strict";
// funcion anonima autoinvocada
(() => {
    // ayuda a trabajar con numeración que tengan sentido semantico
    // es una forma de manejar numeros
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
