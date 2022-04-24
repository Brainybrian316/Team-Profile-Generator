const Employee = require('../lib/Employee');

// class for intern
class Intern extends Employee {
    // all the data from the user is passed in as an argument
    constructor(name, id, email, school) {
        // all the data from the user is passed in as an argument from the employee constructor
        super(name, id, email);
        // specific data for the intern is passed in as an argument
        this.school = school;
    }

    // returns the intern's school
    getSchool() {
        return this.school;
    }
    // returns the intern's role
    getRole() {
        return 'Intern';
    }
}
//  exports the Intern class
module.exports = Intern;