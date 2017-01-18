/*
  Function Exercises
*/

// 1. Write a function called 'add' that has two Number params and adds them together.
function add(x, y) {
  return x + y;
}

// 2. Write a function called 'allowedToDrink' that has an 'age' param and
//  returns false if age is less than 21 and true otherwise.
function allowedToDrink(age) {
  return age >= 21;
}

// 3. Write a function called 'nextCustomer' that has a 'waitingCustomers' param
// that is an array of customer names. The function should return the first
// name in the list.
function nextCustomer(waitingCustomers) {
  return waitingCustomers[0];
}

// 4. Write a function called 'addCustomer' that has two params 'waitingCustomers',
//  an array of names, and 'newCustomer', a name of a new customer.
//
//  The 'addCustomer' function should add the 'newCustomer' to the end of
//  'waitingCustomers'. It doesn't have a return.
function addCustomer(waitingCustomers, newCustomer) {
  waitingCustomers.push(newCustomer);
}

// 5. Write a function called 'seatCustomer' with a 'waitingCustomers' param and that
//  removes first customer name and returns it.
function seatCustomer(waitingCustomers) {
  return waitingCustomers.shift();
}

// 6. Write a function called 'waitPerPerson' with a 'seatedCount' param.
//
//  Assume the following rules for waitPerPerson
//
//  1. For less than five seated people there is a 2 minute wait per person.
//  2. For five or more seated people the seating rate is 4 minutes per person.
//  3. For ten or more seated people the seating rate 6 minutes per person.
//  4. For fifteen or more seated people the seating rate is 10 minutes per person.
//
function waitPerPerson(seatedCount) {
  if (seatedCount < 5) {
    return 2;
  } else if (seatedCount < 10) {
    return 4;
  } else if (seatedCount < 15) {
    return 6;
  } else {
    return 10;
  }
}

/*
function waitPerPerson(seatedCount) {
  var power = Math.min(Math.floor(seatedCount / 5), 3);

  if (power) {
    return 2 + Math.pow(2, power);
  } else {
    return 2;
  }
}
*/


// 7. Write a function called 'waitTime' with two params: 'seatedCount', a number, and
// 'waitingCount', the number of waiting customers. The 'waitTime' should compute
// the total wait for a new customer using the 'waitPerPerson' and 'waitingCount'.
//
function waitTime(seatedCount, waitingCount) {
  return waitPerPerson(seatedCount) * waitingCount;
}

// 8. Write a function called 'customersBefore' with both a 'waitingCustomers' and 'name'
//  param. It should use the 'name' to count the number of customers before that
//  name in customers list
//

// The trick here is that the index gives you the count of name
// before the given name.
function customersBefore(waitingCustomers, name) {
  var index = waitingCustomers.indexOf(name);

  if (index !== -1) {
    return index;
  }
}

/*
function customersBefore(waitingCustomers, name) {
  for (var i = 0; i < waitingCustomers.length; i++) {
    if (waitingCustomers[i] === name) {
      return i;
    }
  }
}
*/

// 9. Write a function called 'hasReservation' with a 'reservations' param, an
//  array of names, and a 'name' param. The function should return true or false
//  if the name is on the list.
function hasReservation(reservations, name) {
  return reservations.indexOf(name) > -1;
}

// 10.) Write a function called 'timeRemaining' with three params: 'waitingCustomers',
// a 'name', and 'seatedCount'. Count the number of customers before the given 'name'
// and use the 'seatedCount' to determine the 'waitTime'.
function timeRemaining(waitingCustomers, name, seatedCount) {
  // If someone isn't on the waitingCustomers list they should be presumed to
  // be at the end of the list or at position waitingCustomers.length.
  var waitingBeforeCustomer = customersBefore(waitingCustomers, name) || waitingCustomers.length;

  return waitTime(seatedCount, waitingBeforeCustomer);
}

/*
 Object Exercises
*/

// 11.) Create a variable called 'emptyObject' that is an empty object.
var emptyObject = {};

// 12.) Create a variable 'personName' with properties first and last set to 'jane' and 'doe'.
var personName = {
  first: 'jane',
  last:  'doe'
};

// 13.) Create a variable called 'birth' with properties 'year', 'month', 'day'
// set to 1980, 11, and 25 respectively.
var birth = {
  year:  1980,
  month: 11,
  day:   25
};

// 14.) Create a variable called 'address' with properties 'street', 'zip', 'city',
//  and 'subdivision' set to '315 Hudson street', '10013', 'New York City', 'New York'.
var address = {
  street:      '315 Hudson street',
  zip:         '10013',
  city:        'New York City',
  subdivision: 'New York'
};

// 15.) Create a variable called 'person' with properties personName, birth, and address
// whose values are the ones defined above.
var person = {
  name:    personName,
  birth:   birth,
  address: address
};

// 16.) Create a variable called firstName whose value is the value of first
// property in personName.
var firstName = personName.first;

// 17.) Create a variable called birthYear whose value is the value of year
// property in birth.
var birthYear = birth.year;

// 18.) Create a variable called personCity whose value is the value of the
// value of nested properties address and city in person.
var personCity = person.address.city;

// 19.) Create a variable called 'userInfo' with a friends property that is an
// array of three names.
var userInfo = {
  friends: ['john', 'jane', 'ruby']
}
