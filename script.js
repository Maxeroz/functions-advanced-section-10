'use strict';

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
/*
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
