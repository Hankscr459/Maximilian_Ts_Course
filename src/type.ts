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

function add(a:number, b: number): number
function add(a:string, b: string): string
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

const result = add('Andrew', 'Mead')
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Hank',
    // job: { title: 'CEO', description: 'My own company' }
}

// console.log(fetchedUserData?.job.title)

// type UnkonwnEmployee = Employee | Admin

// function printEmployeeInformation(emp: UnkonwnEmployee) {
//     console.log('Name: ' + emp.name)
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if ('startDate' in emp) {
//         console.log('Privileges: ' + emp.startDate)
//     }
// }

// printEmployeeInformation(e1)
// // printEmployeeInformation({name: 'Maru', startDate: new Date()})


// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }
// class Trunk {
//     drive() {
//         console.log('Driving a trunk')
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount)
//     }
// }

// type Vehicle = Car | Trunk

// const v1 = new Car()
// const v2 = new Trunk()

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive()
//     // if ('loadCargo' in vehicle) {
//     //     vehicle.loadCargo(1000)
//     // }
//     if (vehicle instanceof Trunk) {
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1)
// useVehicle(v2)

// interface Bird {
//     type: 'bird'
//     flyingSpeed: number
// }

// interface Horse {
//     type: 'horse'
//     runningSpeed: number
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
//     // if ('flyingSpeed' in animal) {
//     //     console.log('Moving with speed: ' + animal.flyingSpeed)
//     // }
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break
//         case 'horse':
//             speed = animal.runningSpeed
//     }
//     console.log('Moving at speed: ' + speed)
// }

// moveAnimal({type: 'bird', flyingSpeed: 10})

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement
// const userInputElement = document.getElementById('user-input')

// // userInputElement = 'Hi!'


// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there!'
// }

// interface ErrorContainer {
//     [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character!'
// }