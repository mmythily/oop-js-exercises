// This class represents all that is common between Student and Mentor
class Person {
    // moved here b/c it was identical
    constructor(name, quirkyFact, email) {
        this.name = name;
        this.quirkyFact = quirkyFact;
        this.email = email;
    }
    // moved here b/c it was identical
    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }

    currentWeek(week) {
        return `Current week is ${week}`;
    }
}
class Student extends Person {
    // stays in Student class since it's specific to students only
    enroll(cohort) {
        this.cohort = cohort;
    }
}
class Mentor extends Person {
    // specific to mentors
    constructor(name) {
        super(name);
    }
    static bio () {
        return super.bio();
    }
    goOnShift() {
        this.onShift = true;
    }
    // specific to mentors
    goOffShift() {
        this.onShift = false;
    }
}

const michelle = new Person('Michelle','love trees');

// const michelle = new Student();;
// michelle.cohort('may25');

console.log(michelle, michelle.bio(), michelle.currentWeek(5));

const techlead = new Mentor('Patrick', 'I love water')
console.log(techlead,techlead.bio('ex google lead'))