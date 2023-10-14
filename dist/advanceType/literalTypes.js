"use strict";
// 4. Narrowing with Literal Types:
function handleDirection(direction) {
    if (direction === "up") {
        // Here, 'direction' is narrowed to the type 'up'.
        console.log("Moving up");
    }
    else if (direction === "down") {
        console.log("Moving down");
    }
}
// 5.Keyof and Literal Types:
const person5 = {
    name: "Alice",
    age: 30,
};
const config = {
    theme: "light",
    analytics: true,
};
