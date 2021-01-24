"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Hank' }, { age: 27 });
console.log(mergeObj);
//# sourceMappingURL=app.js.map