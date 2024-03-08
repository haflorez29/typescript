// clase ejemplo de función genérica

import { genericFunction } from "../generics/generics"
import { Hero, Villain } from "../interfaces"
// import { Hero } from "./interfaces/hero"

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winstons Wilson',
    dangerLevel: 130
}

// restriccion de función
genericFunction<Hero>(deadpool).realName
genericFunction<Villain>(deadpool).dangerLevel



// ----------------------------------------------------------------
// // clase generics introducción

// import { printObject, genericFunction } from "./generics/generics";

// printObject(3.1416.toFixed(2))
// ty con los genericos, ayuda a inferir el tipo de dato y muestra erro se usa un metodo no propio
// printObject(new Date().toFixed(2))
// printObject([1,2,3,4,5,6,7].toFixed(2)))

// genericFunction(3.1416).toFixed(2)
// genericFunction('hola mundo').toFixed(2)
// genericFunction([3.1416,87878]).toFixed(2)

// ---------------------------------------------------------------

// Clase namespaces 

// import { 
//     Hero, 
//     // Usar alias a un tipo de exportación
//     Hero2 as SuperHero 
// } from "./classes/Hero";


// const Hero2 = '2';
// const HeroXmen = new SuperHero;
// const ironman = new Hero('Ironman',1);
// console.log('class 1', ironman, ironman.power);

// ------------------------------------------------------------------------------


// // Clase namespaces

// importar alias completo a todo lo que exporta el archivo
// import *  as HeroClasses from "./classes/Hero";

// importacion tradicional
// import { powers } from "./data/powers"

// // Importacion de una exportacion por defecto, le puedo cambiar el nombre
// import powers, { Power } from "./data/powers";

// const ironman = new HeroClasses.Hero('Ironman');

// console.log(powers[0]);
// console.log('class 1', ironman, ironman.power);





