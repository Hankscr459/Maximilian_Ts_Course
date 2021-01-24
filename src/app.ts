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