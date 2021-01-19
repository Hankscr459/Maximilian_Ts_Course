// const person: {
//     name : string
//     age : number
// } = {
const person : {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
} = {
    name: 'Hank',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

person.role.push(0, 'admin')

let favoriteActivitiew: string[]
favoriteActivitiew = ['Sports']

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}