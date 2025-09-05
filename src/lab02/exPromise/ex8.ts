function square(num: number){
    return new Promise(resolve => {
        resolve(num*num);
    })
}

function doubleNumber(num: number){
    return new Promise(resolve =>{
        resolve(num * 2);
    })
}

function addNumber(num : number){
    return new Promise(resolve => {
        resolve(num + 5)
    })
}

square(2).then((result) => {
    return doubleNumber(result as number);
}).then((result) => {
    return addNumber(result as number);
}).then((result) => {
    console.log(result); 
}).catch((err) => {
    console.error('Error:', err);
});


