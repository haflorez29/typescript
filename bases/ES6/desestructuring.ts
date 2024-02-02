(()=>{
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;  
    }
    const avengers: Avengers = {
        nick : 'Sanuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }
    const { poder, vision } = avengers
    console.log(poder.toFixed(2), vision.toUpperCase())

    const printAvenger = ({ironman, ...resto}: Avengers) =>{
        console.log(ironman, resto.activo)
    }

    printAvenger(avengers)

    const avengerArr: [string, boolean, number] = ['Cap. América', true, 150];
    // const ironman = avengerArr[1];
    const [,existe,valor] = avengerArr;
    console.log(existe, valor);
    
})()