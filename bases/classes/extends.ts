(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            // console.log('Consturctor Avenger llamado !');
        }
        protected getFullName() {
            return `${this.name}  ${this.realName}`
        }
    }
    // si no se pone constructor llama el constructor de Avenger
    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            // el super se debe llamar al inicio 
            super(name, realName);
            // console.log('Constructor Xmen llamado');
        }

        // getter
        get fullName() {
            return `${this.name}- ${this.realName}`
        }
        // setter recibe argumento y no regresa nada, el objetido es establacer un valor
        set fullName(name: string) {
            if (name.length < 2) {
                throw new Error('el nombre debe tener mas de dos caracteres');
            }
            // aqui se puede hacer logica antes
            this.name = name
        }
        // llamar funciones del padre desde los hijos
        getFullnameDesdeXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('wolverine', 'Logan', true)
    // console.log(wolverine);
    // parece una propiedad pero es un getter
    // wolverine.fullName = 'Fernando'
    // console.log(wolverine.fullName);
})()