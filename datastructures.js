// ================================================
// SECTION 18 DATA STRUCTURES INTRODUCTION
// ================================================

// a CLASS is a blueprint for creating objects with predefined properties and methods

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudent = new Student('Jonathan', 'Butler', 9);

class Animal {
  constructor(arms, legs, nose) {
    this.arms = arms;
    this.legs = legs;
    this.nose = nose;
  }
}

let kitty = new Animal(4, 2, true);
