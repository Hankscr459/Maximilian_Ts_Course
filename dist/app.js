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
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Hank' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item, 1));
    }
    getItem() {
        return [...this.data];
    }
}
const numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map