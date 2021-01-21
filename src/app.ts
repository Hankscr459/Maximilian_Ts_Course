abstract class Department {
    protected employees: string[] = []

    constructor(protected id: string, public name: string) {
        // this.id = id
        // this.name = n
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this: Department) : void

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
    describe() {
        console.log('IT Department - ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id )
    }

    printRreports() {
        console.log(this.reports)
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }
}

const it = new ITDepartment('n1', ['MAX'])

it.addEmployee('Maru')
it.addEmployee('LuLu')

// accounting.employees[2] = 'DD'

// accounting.name = 'Andrew'

it.describe()
// it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment('d1', [])

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong')
console.log(accounting.mostRecentReport)
// accounting.printRreports()

// const employee1 = Department.createEmployee('andrew_hank')
// console.log(employee1)

accounting.describe()

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()