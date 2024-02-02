(()=>{
    // tampoco tiene representacion en js al igual que 
    interface Hero {
        name: string; 
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Alleng',
        age: 24,
        powers: ['viajar en el tiempo', 'super velocidad']
    };

    let superMan: Hero = {
        name: 'Clark Kent',
        age: 23,
        powers: ['viajar en el tiempo', 'super velocidad'],
        getName() {
            return this.name
        },
    }

})()