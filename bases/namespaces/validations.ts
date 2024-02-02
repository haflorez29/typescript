namespace Validation {
    export const validateText = (text: string) => {
        return (text.length > 3) ? true : false;
    }

    const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf())) ? false : true;
    }
};

Validation.validateText('Steb')