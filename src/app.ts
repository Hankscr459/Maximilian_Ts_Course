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

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printRreports() {
        console.log(this.reports)
    }
}

const it = new ITDepartment('n1', ['MAX'])

it.addEmployee('Maru')
it.addEmployee('LuLu')

// accounting.employees[2] = 'DD'

// accounting.name = 'Andrew'

it.describe()
it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment('d1', [])

accounting.addReport('Something went wrong')

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()