const isLogged = true;

let firstPromise = new Promise ((resolve, reject)=>{
    if(isLogged){
        console.log("User is logged");
        const randomNumber = Math.random();
        const randomNumberFixed = randomNumber.toFixed(1);
        resolve(randomNumberFixed)
    }else{
        reject(new Error ("User is not logged"))
    }
})

const secondPromise = (number) => {
    return new Promise ((resolve, reject) => {
        if (number > 0.5){
            console.log("The number is greater than 0.5");
            resolve({name: "John", age: 24});
        }else{
            reject(new Error("Number is smaller than 0.5"));
        }
    })
}

firstPromise
.then((response) => secondPromise(response))
.then((result)=>console.log(result))
.catch((error)=>console.error(error))
.finally(() => console.log("Promise chain is completed"))
