// const person: {
//     name : string
//     age : number
// } = {
var person = {
    name: 'Hank',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivitiew;
favoriteActivitiew = ['Sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
