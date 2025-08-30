// Use .finally() to log "Done" when a Promise finishes (success or failure).

function myPromise() {
    return new Promise((resolve, reject) =>{
        const succ = true;
        if (succ) {
            resolve("Success");
        }
        else {
            reject("Failure");
        }
    })
}

myPromise().then((result) => {
    console.log(result); 
}).catch((err) => {
    console.error('Error:', err);
}).finally(() => {
    console.log("Done");
});