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

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

type UnkonwnEmployee = Employee | Admin

function printEmployeeInformation(emp: UnkonwnEmployee) {
    console.log('Name: ' + emp.name)
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Privileges: ' + emp.startDate)
    }
}

printEmployeeInformation(e1)
// printEmployeeInformation({name: 'Maru', startDate: new Date()})


class Car {
    drive() {
        console.log('Driving...')
    }
}
class Trunk {
    drive() {
        console.log('Driving a trunk')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount)
    }
}

type Vehicle = Car | Trunk

const v1 = new Car()
const v2 = new Trunk()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000)
    // }
    if (vehicle instanceof Trunk) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)