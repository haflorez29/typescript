import { Pokemon } from "../decorators/pokemon-class"

const charmander = new Pokemon('charmander')
// console.log(charmander);
// esta bloqueado por el decorador ß, y el objeto no es extendible
// (Pokemon.prototype as any).customName = 'Pikachu'

charmander.savePokemonToDB(5)
// charmander.savePokemonToDB(-300)