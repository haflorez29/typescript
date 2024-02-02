(() => {
    // never no es undefined ni void
    // despues de llamar este tipo de funciones no va a continuar el codigo
    const error = (message: string): never => {
        throw new Error(message)
    }
    error('Auxilio')
    const error2 = (message: string): (never | number) => {
        if (false) {
            throw new Error(message)
        }
        return 1;
    }
})()