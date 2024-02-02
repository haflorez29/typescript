(() => {
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`
    const saveTheWorld = () => `El mundo está salvado!`

    // let myFunction:Function;
    // let myFunction:(y:number, z:number)=>number;
    // myFunction = addNumber;
    // console.log(myFunction(1,2));
    
    // let myFunction:(y:string)=>string;
    // myFunction = greet;
    // console.log(myFunction('heidy'));  

    // let myFunction:()=>string;
    // myFunction = saveTheWorld;
    // console.log(myFunction());

    // let myFunction:()=>void;
    // si mi funcion no va devolver nada

})()