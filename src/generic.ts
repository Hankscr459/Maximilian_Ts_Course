// const names: Array<string> = []

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(7)
//     }, 2000)
// })

// promise.then(data => {
//     // data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

// const mergeObj = merge<{name: string, hobbies: string[]}, {age: number}>({ name: 'Hank', hobbies: ['Sport'] }, { age: 27 })
const mergeObj = merge({ name: 'Hank', hobbies: ['Sport'] }, { age: 27 })

console.log(mergeObj)

// console.log(merge({name: 'Hank'}, {age: 27}))

interface Lengthy {
    length: number
}

function countAndDescription<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Get no value'
    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

// console.log(countAndDescription('Hi there!'))
console.log(countAndDescription(['Sports', 'Cooking']))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'Hank'}, 'name'))

class DataStorage<T extends string | number | boolean> {
    private data: T[] = []
    // private data: (string | number | boolean)[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item, 1))
    }

    getItem() {
        return [...this.data]
    }
}

// const textStorage = new DataStorage<string>()
// textStorage.addItem('Hank')
// textStorage.addItem('Menu')
// textStorage.removeItem('Hank')
// console.log(textStorage.getItem())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// const maxObj = {name: 'Hank'}
// objStorage.addItem(maxObj)
// objStorage.addItem({name: 'Menu'})

// objStorage.removeItem({name: 'Menu'})
// console.log(objStorage.getItem())

interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

function createCourseGoal(
    title: string, description: string, date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Max', 'Anna']
// names.push('Manu)
// names.pop()