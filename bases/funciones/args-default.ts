(() => {
    const fullName = (firstName: string, upper: boolean, lastName?: (string | boolean), lower: boolean = false): string => {
        if (lower) {
            return `${firstName} ${lastName || '---'}`.toLowerCase()
        } else if(upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase()
        }
        else {
            return `${firstName} ${lastName || '---'}`
        }
    }

    const name = fullName('Tony', true);

    console.log({ name })
})()