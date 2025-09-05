function simulateTask2(time: number){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    })
}

Promise.all([simulateTask2(1000), simulateTask2(2000), simulateTask2(3000)]).then((messages) => {
    console.log(messages);
})
