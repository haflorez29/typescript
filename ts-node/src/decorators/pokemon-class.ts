function printToConsole(constructor: Function) {
    console.log(constructor);
    // este es un constructor que sea aplica a la clase 
}

const printToConsoleConditional = (print: boolean = false): Function => {
    return () => print ? console.log('hola Mundo') : console.log('print false');
}

const bloquearPrototipo = function (constructor: Function) {
    // bloquea el constructor
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value
        // esta funcion se llama con los argumentos del metodo
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El pokemon con ese id no existe');
            } else {
                // tengo que hace esto para que haga 
                return originalMethod(id)
            }
        }

    }
}

function readonly(isWritable: boolean = true): Function {
    // en el decorador de propiedaes no hay propertyDescriptor
    return function (target: any, key: string) {
        console.log({
            target, key
        });
        const descriptor: PropertyDescriptor = {
            // definicion de getter y setter
            get() {
                console.log(this,'getter');                
                return 'Fernando'
            },
            // this es la intancia de la clase
            set(this, val) {
               console.log(this, val, 'setter');
               Object.defineProperty(this, key, {
                value: val,
                writable: !isWritable,
                enumerable: false
               })
                
            },
        }
        return descriptor;
    }
}

// se ejcuta en el momento de transpilación/compilacion
@printToConsole
// permite mandar algun argumento
@printToConsoleConditional(true)
// se pueden anidar los decoradores de arriba a abajo
@bloquearPrototipo
export class Pokemon {
    // public publicApi: string = 'https://pokeapi.co'
    // a pesar de ser privado lo puedo cambiar con charmander.publicApi = 'x' ya que es transpilado a js y es permitido
    @readonly(true)
    private publicApi: string = 'https://pokeapi.co'
    constructor(
        public name: string
    ) { }
    // aplica solo a el metodo
    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon saved in BD ${id}`);
    }
}
