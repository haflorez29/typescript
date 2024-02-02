(() => {
    const hero: string = 'Flash'
    // siempre especificar el valor de retorno de la funcion
    function returnName(): string {
        return hero;
    }

    const activateBatiSingal = (): string => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatiSingal)

    const heroName = returnName()
})()