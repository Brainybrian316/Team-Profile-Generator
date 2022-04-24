//  parent class for all employees
class Employee {
    //  arguments for the employee constructor
    constructor(name, id, email) {
        // all the data from the user is passed in as an argument for other employees to use
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // returns the employee's name
    getName() {
        return this.name;
    }
//  returns the employee's id
    getId() {
        return this.id;
    }
//  returns the employee's email
    getEmail() {
        return this.email;
    }
//  returns the employee's role
    getRole() {
        return 'Employee';
    }
}
//  exports the Employee class
module.exports = Employee