(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutanPower(id: number): string;
    }

    interface Human {
        age: number;

    }

    class Mutant implements Xmen, Human {
        public age: number = 2;
        public name: string = 'Tormenta';
        public realName: string = 'Test';
        mutanPower() {
            return `${this.name} ${this.realName}`
        }
    }
})()