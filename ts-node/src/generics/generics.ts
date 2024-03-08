
// export const printObject = (argument: any) => {
//     console.log(argument);
// };

// export function genericFunction (argument: any){
//    return argument
// }

// Función generica

export const printObject = <T>(argument: T) => {
    console.log(argument);
};


export function genericFunction<T>(argument: T): T {
    return argument
}