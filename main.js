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

const wordPalindrome = 'шалаш';
const reverseWordPalindrome = wordPalindrome.split().reverse().join();
console.log(wordPalindrome === reverseWordPalindrome);

const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];

function searchHotels(searchWord) {
    const searchWordToLowerCase = searchWord.toLowerCase();
    hotels.forEach((element) => {
        const searchLineToLowerCase = element.name.toLowerCase() + element.city.toLowerCase()
          + element.country.toLowerCase();
        if (searchLineToLowerCase.includes(searchWordToLowerCase)) {
            console.log(`${element.country}, ${element.city}, ${element.name}`);
        }
    });
}

searchHotels('south');

function searchCountry() {
    return hotels.reduce((accumulator, currentValue) => {
        const resultSearch = [];
        if (!accumulator[currentValue.country]) {
            resultSearch.push(currentValue.city);
            accumulator[currentValue.country] = resultSearch;
        } else if (!accumulator[currentValue.country].includes(currentValue.city)) {
            accumulator[currentValue.country].push(currentValue.city);
        }
        return accumulator;
    }, {});
}

console.log(searchCountry());

const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

const deepEqual = (ObjectOne, objectTwo) => {
    const isParametrsObject = typeof ObjectOne !== 'object' || typeof objectTwo !== 'object';
    const isParametrsUndefined = ObjectOne === undefined || objectTwo === undefined;
    const isParametrsNull = ObjectOne === null || objectTwo === null;
    if (ObjectOne === objectTwo) return true;
    if (isParametrsUndefined) return false;
    if (isParametrsObject) return false;
    if (isParametrsNull) return false;
    const objectOneKeys = Object.keys(ObjectOne);
    const objectTwoKeys = Object.keys(objectTwo);
    if (objectOneKeys.length !== objectTwoKeys.length) return false;
    for (const key of objectOneKeys) {
        if (!objectTwoKeys.includes(key) || deepEqual(ObjectOne[key], objectTwo[key])) return true;
    }
    return false;
};
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    },
];

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {
        return new Date().getFullYear() - this.admissionYear;
    }
}

class Students {
    constructor(students) {
        this.students = students.map(({
                                          firstName, lastName, admissionYear, courseName,
                                      }) => new Student(firstName, lastName, admissionYear, courseName));
    }

    getInfo() {
        this.students.sort((prev, next) => prev.course - next.course);
        const arrgument = [];
        this.students.forEach((item) => {
            arrgument.push(`${item.fullName} - ${item.courseName}, ${item.course} курс`);
        });
        return arrgument;
    }
}
const students = new Students(studentsData);
console.log(students.getInfo());
