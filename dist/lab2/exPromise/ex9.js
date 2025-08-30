"use strict";
//Write a Promise that reads an array after 1 second and filters even numbers
function filterEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumber = arr.filter((num) => {
                return num % 2 === 0;
            });
            resolve(evenNumber);
        }, 1000);
    });
}
const arr1 = [1, 2, 3, 4, 5, 6];
filterEvenNumbers(arr1).then((result) => {
    console.log(result); // Should log [2, 4, 6]
}).catch((err) => {
    console.error('Error:', err);
});
