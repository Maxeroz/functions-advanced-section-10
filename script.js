'use strict';
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
