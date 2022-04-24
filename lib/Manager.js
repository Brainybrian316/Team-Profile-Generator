const Employee = require('../lib/Employee');

// class for Manager
class Manager extends Employee {
    // all the data from the user is passed in as an argument
    constructor(name, id, email, officeNumber) {
        // all the data from the user is passed in as an argument from the employee constructor
        super(name, id, email);
        // specific data for the manager is passed in as an argument
        this.officeNumber = officeNumber;
    }

    // returns the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // returns the manager's role
    getRole() {
        return 'Manager';
    }
}

// exports the Manager class
module.exports = Manager