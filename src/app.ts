class Department {
    private employees: string[] = []

    constructor(private id: string, public name: string) {
        // this.id = id
        // this.name = n
    }

    describe(this: Department) {
        console.log(`Department:  (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('n1', 'Accounting')

accounting.addEmployee('Maru')
accounting.addEmployee('LuLu')

// accounting.employees[2] = 'DD'

accounting.name = 'Andrew'

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()