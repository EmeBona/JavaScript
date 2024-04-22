class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");


console.log(`El nombre es: ${developer.firstName} ${developer.lastName}`);
