"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validation || (Validation = {}));
;
Validation.validateText('Steb');
//# sourceMappingURL=main.js.map