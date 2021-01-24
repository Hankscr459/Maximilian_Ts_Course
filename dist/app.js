"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Hank', hobbies: ['Sport'] }, { age: 27 });
console.log(mergeObj);
function countAndDescription(element) {
    let descriptionText = 'Get no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescription(['Sports', 'Cooking']));
//# sourceMappingURL=app.js.map