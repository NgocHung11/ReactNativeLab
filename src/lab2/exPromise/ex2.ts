function numberPromise(){
    return new Promise((resolve => {
        setTimeout(()=> {
            resolve(10);
        }, 1000)
    }))
}

numberPromise().then((num) => {
    console.log(num);
})