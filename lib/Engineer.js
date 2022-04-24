const Employee = require('../lib/Employee');

//  class for engineer
class Engineer extends Employee {
    // all the data from the user is passed in as an argument
    constructor(name, id, email, github) {
        // all the data from the user is passed in as an argument from the employee constructor
        super(name, id, email);
        // specific data for the engineer is passed in as an argument
        this.github = github;
    }
    // returns the engineer's github username
    getGithub() {
        return this.github;
    }
    // returns the engineer's role
    getRole() {
        return 'Engineer';
    }
}

//  exports the Engineer class
module.exports = Engineer;