const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    printStats() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.school);
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;