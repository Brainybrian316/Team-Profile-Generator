const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    printStats() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.officeNumber);
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager