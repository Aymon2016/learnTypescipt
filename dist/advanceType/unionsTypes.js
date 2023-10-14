"use strict";
// optional Properties:
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}
formatValue('string');
formatValue(500);
//Polymorphic Functions:
function printValue(value) {
    console.log(value);
}
