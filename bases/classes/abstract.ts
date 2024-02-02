(() => {
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) { }

    }
    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo!'
        }
    }
    class Villian extends Mutante {
        conquistarMundo(){
            return ' Mundo conquistado'
        }
    }
    // puedo usar mis clases como mi propio tipo
    const wolverine = new Xmen('Wolvering', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character:Mutante) => {
        console.log(character.realName);
    }
    printName(magneto)
})()