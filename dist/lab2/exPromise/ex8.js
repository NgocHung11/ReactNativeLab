"use strict";
function numberPromiseChain(num) {
    return new Promise(resolve => {
        resolve(num * num);
    });
}
numberPromiseChain(2).then((result) => {
    console.log(result);
});
