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

// method example

class Student {
    constructor(firstName, lastName, year) {
      this.firstName= firstName;
      this.lastName = lastName;
      this.grade = year;
      this.tardies = 0;
      this.scores = [];
    }
    fullName() {
      return `it is ${this.firstName} ${this.lastName}`
    }
    markLate() {
      this.tardies += 1;
      if (this.tardies > 3) {
        return 'You are expelled from school'
      }
      return `${this.firstName} ${this.lastName} was late ${this.tardies} time(s)`;
    }
    addScore(score) {
      this.scores.push(score)
      return this.scores
    }
    calculateAverage() {
      let sum = this.scores.reduce(function(a,b) {return a + b})
      return Math.ceil(sum / this.scores.length)
    }
  }
  
  let firstStudent = new Student("Jonathan", "Butler", 9)
  firstStudent.addScore(92)
  firstStudent.addScore(87)
  firstStudent.calculateAverage()
