function palindrome(str) {
    return str === str.split('').reverse('').join('');
}
console.log(palindrome('шалаш'));

// Function min (a, b) and function max (a, b)
function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}
console.log(min(8, 5));

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
console.log(max(8, 5));

function ternMin(a, b) {
    return a < b ? a : b;
}
ternMin(4, 6);

function ternMax(a, b) {
    return a < b ? a : b;
}
ternMax(8, 9);

function zero() {
    let arr = [3, 12, 50, 28, 19, 4, 81, 78, 52, 91];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === 0) {
            arr = arr.join().replace(/0/g, 'zero');
            console.log(arr.split(','));
        }
    }
}

zero();
