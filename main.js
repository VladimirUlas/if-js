let user = 'John Doe';
console.log(user);

const student = 'Vladimir';
console.log(student);

user = student;
console.log(user);
// In user name Vladimir
let test = 1
console.log(test);
console.log(++test);
console.log('1' + test);
//12
console.log(test);
console.log(test - 1);
// data array
const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i += 1) {
    result *= arr[i];
}
console.log(result);
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
let z = 0;
for (let i = 0; i < arr3.length; i++) {
    z = arr3[i] % 2;
    if (z === 0) {
        console.log(arr3[i]);
    }
}

