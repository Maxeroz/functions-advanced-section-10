'use strict';

///////////////////////////////////////////////////
// More Closure Examples

// Example
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boaring all ${n} passengers`);
    console.log(`There are 3 grops, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

/*
///////////////////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

///////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};

// runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
// console.log(notPrivate);

///////////////////////////////////////////////////
// A Closer Look at Functions
// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const answerBtn = document.querySelector('.poll');
// console.log(answerBtn);

poll.registerNewAnswer = function () {
  const answer = Number(
    // Get answer from prompt
    prompt(
      `${this.question}\n${this.options
        .join()
        .replaceAll(',', '\n')}\n(Write option number)`
    )
  );
  // const answer = 1;

  // console.log(answer);

  if (typeof answer === 'number' && answer < this.answers.length) {
    this.answers[answer] += 1;
    this.displayResults();
    this.displayResults('string');
  }
};
answerBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

///////////////////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function() {}

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Maksim Ozerskii');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Maksim Ozerskii');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Partial application

const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(200));

console.log();

const portuTax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const portuTaxFn = portuTax(0.23);
portuTaxFn(100);

///////////////////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Maksim');

greet('Hi-ho!')('Everybody');

// Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi!')('Mate!');


///////////////////////////////////////////////////
// Functions Accepting Callback Functions

// My Own Example

const upperFirstLetter = function (str) {
  const [firstWord, ...others] = str.split(' ');
  const output = [
    firstWord.replace(firstWord[0], firstWord[0].toUpperCase()),
    ...others,
  ].join(' ');
  return output;
};

const allFirstLetterUpperCase = function (str) {
  const arrayStr = str.split(' ');
  const emptyArray = [];
  // console.log(arrayStr);
  for (const word of arrayStr) {
    const upperWord = word.replace(word[0], word[0].toUpperCase());
    emptyArray.push(upperWord);
  }
  const finalStr = emptyArray.join(' ');
  return finalStr;
  // console.log(finalStr);
};

const coder = function (str, fN) {
  console.log(`Original String: ${str}`);
  console.log(`Changed String: ${fN(str)}`);

  console.log(`Changed by: ${fN.name}`);
};

coder('maskim ozerskii uzbekistan', upperFirstLetter);
coder('maskim ozerskii uzbekistan', allFirstLetterUpperCase);

// Course Jonas

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋🏻');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing ...
// const flightNubmer = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);

console.log(jonas);

///////////////////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNubmer,
  numberPassengers = 1,
  price = 199 * numberPassengers
) {
  // ES5
  //   numberPassengers = numberPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNubmer,
    numberPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// console.log(bookings);

createBooking('LH123', undefined, 1000);
*/
