let student = { id: 20, name: "Luffy", grade: "E", age: 21 };
function propertyName(value) {
    for (let key in student) {
        if (key == value) {
            return true;
        }
        else return false;
    }
}
console.log(propertyName('id'));

// OUTPUT: true