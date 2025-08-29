"use strict";
function handleNumber() {
    return new Promise((resolve, reject) => {
        resolve(Math.random() * 10);
        reject("Error generating number");
    });
}
handleNumber().then((num) => {
    console.log(num);
}).catch((error) => {
    console.log(error);
});
