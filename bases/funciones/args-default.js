"use strict";
(() => {
    const fullName = (firstName, upper, lastName, lower = false) => {
        if (lower) {
            return `${firstName} ${lastName || '---'}`.toLowerCase();
        }
        else if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
    };
    const name = fullName('Tony', true);
    console.log({ name });
})();
