"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department:  (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('n1', 'Accounting');
accounting.addEmployee('Maru');
accounting.addEmployee('LuLu');
accounting.name = 'Andrew';
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map