"use strict";
function hello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
hello().then((message) => {
    console.log(message);
});
