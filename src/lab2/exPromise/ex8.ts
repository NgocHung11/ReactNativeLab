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
    console.log(result);
    
})


