// const person: {
//     name : string
//     age : number
// } = {
// const person : {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: 'Hank',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR = 'AUTHOR' }

const person = {
    name: 'Hank',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push(0, 'admin')

// let favoriteActivitiew: string[]
// favoriteActivitiew = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log('is Author')
}