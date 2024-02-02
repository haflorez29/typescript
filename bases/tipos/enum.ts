// funcion anonima autoinvocada
(()=>{
    // ayuda a trabajar con numeración que tengan sentido semantico
    // es una forma de manejar numeros
    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.medium
    console.log(currentAudio)
    console.log(AudioLevel)
})()