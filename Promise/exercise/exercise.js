const number = 15;

const  num = new Promise ((resolve, reject) => {
    if (number > 10){
        resolve("El número es mayor que diez")
    } else{
        reject("El número es menor que diez")
    }
});

num.then((response) => console.log(response)).catch((err)=>console.error(err));
