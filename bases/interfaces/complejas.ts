(() => {


    interface Client {
        name: string,
        age?: number,
        address: Adress
        getFullAddress(id: string): void;
    }

    interface Adress {
        id: Number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 1255,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id:string) {

        },
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 22324,
            zip: "",
            city: ""
        },
        getFullAddress(id:string) {
            return 'jpña'
        },
    }

})()