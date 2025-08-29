function simulateTask(time: number){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    })
}

simulateTask(2000).then((message) => {
    console.log(message);
})

