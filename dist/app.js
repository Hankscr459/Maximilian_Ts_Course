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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printRreports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('n1', ['MAX']);
it.addEmployee('Maru');
it.addEmployee('LuLu');
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d1', []);
accounting.addReport('Something went wrong');
//# sourceMappingURL=app.js.map