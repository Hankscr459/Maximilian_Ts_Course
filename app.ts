// const person: {
//     name : string
//     age : number
// } = {
const person = {
    name: 'Hank',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivitiew: string[]
favoriteActivitiew = ['Sports']

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}