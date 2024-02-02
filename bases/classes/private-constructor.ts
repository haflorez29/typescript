(()=>{
    // class Apocalipsis {
    //     constructor( public name: string){

    //     }
    // }
    // const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico')
    // const apocalipsis1 = new Apocalipsis('Soy apocalipsis... el unico')
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis... el unico')
    // console.log(apocalipsis, apocalipsis1, apocalipsis2);

    class Apocalipsis{
        static instance: Apocalipsis;
        private constructor(public name: string){}

        static callApocalipsis (): Apocalipsis {
            if (!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Apocalpsis el unico')
            }
            return Apocalipsis. instance;
        }
        changeName (newName: string): void{
            this.name = newName
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()
    apocalipsis1.changeName('Xavier')
    const apocalipsis4 = Apocalipsis.callApocalipsis()
    const apocalipsis5 = Apocalipsis.callApocalipsis()
    const apocalipsis6 = Apocalipsis.callApocalipsis()
})()