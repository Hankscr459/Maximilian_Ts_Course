type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmploee = Admin & Employee

const e1 : ElevatedEmploee = {
    name: 'Hank',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numberic = number | boolean

type Universal = Combinable & Numberic