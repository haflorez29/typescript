(() => {
    // no hay contraparte en js de type
    type Hero = {
        name: string; 
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let myCustomVariable: string | number | Hero = 'Fernando';
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name:'Bruce',
        age: 43,
        powers: ['fly']
    };
    console.log(typeof myCustomVariable);
    // devolveria tipo Object, ya que para js no existe el tipo Hero
    
})()