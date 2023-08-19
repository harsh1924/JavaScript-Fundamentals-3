let info = { name: "Harsh", age: 22, likes: "Anime" };
function getObjectProperties(obj) {
    let count = 0;
    for (var key in obj) {
        count++;
    }
    return count;
};
console.log(`The number of total properties in the object are ${getObjectProperties(info)}`)

// OUTPUT: The number of total properties in the object are 3