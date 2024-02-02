(() => {
    class Avenger {
        // private name: string = '';
        // public team: string = '';
        // public realName?: string = '';
        static avgAge: number = 35;
        static getAvgAge(){
            // toma el name de la class, si tomo otra propiedad no la va tomar porque noe sta declarada antes
            return this.name
        }
        // constructor(name: string, team: string, realName?: string) {
        // this.name = name;
        // this.team = team;
        // this.realName = realName
        // }
        // forma corta de asignar propiedades
        constructor(
            private name: string,
            public team: string,
            avgAge: number = 55,
            public realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName
            Avenger.avgAge = avgAge
        }
        // public bio(){
        //     return `${this.name} (${this.team})`
        // }
        private bio(){
            return `${this.name} (${this.team})`
        }
    }
    const antman: Avenger = new Avenger('Antman', 'capitan')
    // console.log(antman, Avenger.avgAge);
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());
})()