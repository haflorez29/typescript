(()=>{
    // 4 formas de definir String
    // comillas simples, comilla doble, back tick
    const batman: string='Batman';
    const linternaVerde: string = "Linterna Verde";
    console.log(`I'm ${batman}`)
    // este error no lo evita typescript
    // console.log(batman[10].toUpperCase)
    console.log(batman[10]?.toUpperCase || 'no existe este caracter')
})()