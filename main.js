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

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const para1 = document.getElementById('text1');
const para2 = document.getElementById('text2');
const para3 = document.getElementById('text3');

function colorChange() {
    let click = 0;
    return function (event) {
        click += 1;
        const paragraph = event.target;
        paragraph.style.color = colors[click - 1];
        if (click > colors.length - 1) {
            click = 0;
        }
    }
}

para1.addEventListener('click', colorChange());
para2.addEventListener('click', colorChange());
para3.addEventListener('click', colorChange());

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const prepareStringForSearch = (str, strToCompare) => str.toLocaleLowerCase().replaceAll(' ', '').includes(strToCompare);

function search(searchRequest) {
    const result = [];
    const searchStringLowerCase = searchRequest.replaceAll(' ', '').toLowerCase();
    for (let index = 0; index < data.length; index += 1) {
        const { country, city, hotel } = data[index];
        const concatedString = `${country}${city}${hotel}`;

        if (prepareStringForSearch(concatedString, searchStringLowerCase)) {
            result.push(`${country}, ${city}, ${hotel}`);
        }
    }

    return result;
}

console.log(search('Germany Ber'));

const date = '2020-11-26';
const splitDate = date.split('-');
const reverseDate = splitDate.reverse();
const joinDate = reverseDate.join('.');

console.log(joinDate);

const newDate = date.split('-').reverse().join('.');
console.log(newDate);
