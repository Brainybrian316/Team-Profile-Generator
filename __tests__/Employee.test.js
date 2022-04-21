const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', 1);

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));

});