// type AddFn = (a: number, b: number) => number 
interface AddFn {
    (a: number, b: number): number
}

let addNum: AddFn

interface Named {
    readonly name?: string
    outputName?: string
}
interface Greetable extends Named {
    name?: string

    greet(phrase: string): void
}

class PersonFile implements Greetable {
    name?: string
    age = 30
    constructor(n?: string) {
        if (n) {
            this.name = n
        }
    }
    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        } else {
            console.log('Hi!')
        }
    }
}

let user1: Greetable
user1 = new PersonFile('Hank')

user1.greet('Hi there - I am')