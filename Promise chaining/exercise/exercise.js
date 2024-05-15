const isLogged = true; 

function checkLoggedIn(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random().toFixed(2)); 
    } else {
      reject('User is not logged in');
    }
  });
}


function checkRandomNumber(randomNumber) {
  return new Promise((resolve, reject) => {
    if (randomNumber > "0.50") { 
      resolve({ name: "John", age: 24 });
    } else {
      reject('Random number is too low');
    }
  });
}


checkLoggedIn(isLogged)
  .then((randomNumber) => {
    console.log('Random number:', randomNumber);
    return checkRandomNumber(randomNumber);
  })
  .then((finalObject) => {
    console.log(finalObject); 
  })
  .catch((error) => {
    console.error(error);
  })