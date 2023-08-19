let str = "Hello";
function reverseString(value) {
    return value.split("").reverse().join("");
}
console.log(`The string is ${str}`);
console.log(`The reversed string is ${reverseString(str)}`);

// OUTPUT:-
// The string is Hello
// The reversed string is olleH