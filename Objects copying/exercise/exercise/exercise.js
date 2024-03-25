const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// When assigning person2 to person1, it is referring to the same object, and therefore, 
// it does not make a copy that modifies the name and shows the change, but rather assigns it a new name 
// and prints it twice, since it is the same object, not a copy.