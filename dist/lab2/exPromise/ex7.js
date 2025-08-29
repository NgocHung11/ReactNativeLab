"use strict";
function simulateTask3(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
        if (time < 1000) {
            reject("Time is too short");
        }
    });
}
Promise.race([simulateTask3(900), simulateTask3(1000), simulateTask3(3000)]).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
