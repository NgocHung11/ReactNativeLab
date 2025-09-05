function errorPromise(){
    return new Promise((resolve,reject) => {    

        setTimeout(()=> {
            reject("Something went wrong");
        }, 1000)
    })
}

errorPromise().catch((error) => {
    console.log(error);
})