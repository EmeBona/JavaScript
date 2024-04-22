const isLogged = true;

let firstPromise = new Promise ((resolve, reject)=>{
    if(isLogged){
        console.log("User is logged");
        const randomNumber = Math.random();
        console.log(randomNumber);
        const randomNumberFixed = randomNumber.toFixed;
        resolve(randomNumberFixed)
    }else{
        reject("This number is not bigger than 0.5")
    }
})

const secondPromise = (number) => {
    return new Promise ((resolve, reject) => {
        if (number > 0.5){
            console.log("The number is greater than 0.5");
            resolve({name: "John", age: 24});
        }else{
            console.log("Number is smaller than 0.5");
            reject("ERROR");
        }
    })
}

firstPromise
.then((response) => secondPromise(response))
.then((result)=>console.log(result))
.catch((error)=>console.error(error))
