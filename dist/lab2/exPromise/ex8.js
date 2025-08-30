"use strict";
function square(num) {
    return new Promise(resolve => {
        resolve(num * num);
    });
}
function doubleNumber(num) {
    return new Promise(resolve => {
        resolve(num * 2);
    });
}
function addNumber(num) {
    return new Promise(resolve => {
        resolve(num + 5);
    });
}
square(2).then((result) => {
    return doubleNumber(result);
}).then((result) => {
    return addNumber(result);
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error('Error:', err);
});
