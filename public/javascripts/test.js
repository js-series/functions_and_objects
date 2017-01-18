var expect = chai.expect;    // Using Expect style

describe('Problem 1', function () {
  it('should define an add function', function () {
    expect(function () {
      add();
    }).to.not.throw(ReferenceError);
  });

  describe('add', function () {
    it('should add two numbers', function () {
      expect(add(2,3)).to.equal(5);
    });
  });
});

describe('Problem 2', function() {
  it('should define an allowedToDrink function', function () {
    expect(function () {
      allowedToDrink();
    }).to.not.throw(ReferenceError);
  });

  describe('allowedToDrink', function() {
    it('should return true when age is 21', function() {
      expect(allowedToDrink(21)).to.equal(true)
    });

    it('should return true when age is over 21', function() {
      expect(allowedToDrink(22)).to.equal(true)
    });

    it('should return false when age is less 21', function() {
      expect(allowedToDrink(20)).to.equal(false)
    });
  });
});

describe('Problem 3', function () {
  it('should define an nextCustomer function', function () {
    expect(function () {
      nextCustomer();
    }).to.not.throw(ReferenceError);
  });

  describe('nextCustomer', function () {
    it('should return undefined if no customers', function () {
      expect(nextCustomer([])).to.equal(undefined);
    });

    it('should return the first customer', function () {
      expect(nextCustomer(['john', 'jane', 'bob'])).to.equal('john');
    });

    it('should not change the customers', function () {
      var waiting = ['john', 'jane', 'bob'];

      expect(nextCustomer(['john', 'jane', 'bob'])).to.equal('john');
      expect(waiting).to.eql(['john', 'jane', 'bob']);
    })
  });
});

describe('Problem 4', function () {
  it('should define an addCustomer function', function () {
    expect(function () {
      addCustomer();
    }).to.not.throw(ReferenceError);
  });

  describe('addCustomer', function () {
    it('should add a customer to an empty waiting list', function () {
      var waiting = [];
      addCustomer(waiting, 'john');

      expect(waiting).to.be.eql(['john']);
    });
  });

  describe('addCustomer', function () {
    it('should add a customer to the end of a wait list', function () {
      var waiting = ['john', 'jane'];

      addCustomer(waiting, 'bob');

      expect(waiting).to.be.eql(['john', 'jane', 'bob']);
    });
  });
});


describe('Problem 5', function () {
  it('should define an seatCustomer function', function () {
    expect(function () {
      seatCustomer();
    }).to.not.throw(ReferenceError);
  });

  describe('seatCustomer', function () {
    it('should seatCustomer the customer', function () {
      var waiting = ['john', 'jane', 'bob'];

      expect(seatCustomer(waiting)).to.equal('john');
      expect(waiting).to.be.eql(['jane', 'bob'])
    });
  });
});

describe('Problem 6', function () {
  it('should define an waitPerPerson function', function () {
    expect(function () {
      waitPerPerson();
    }).to.not.throw(ReferenceError);
  });

  describe('waitPerPerson', function () {
    it('should be two minutes when less than 5 are people seated', function () {
      expect(waitPerPerson(4)).to.equal(2);
    });

    it('should be four minutes when 5 to 9 are people seated', function () {
      expect(waitPerPerson(5)).to.equal(4);
      expect(waitPerPerson(9)).to.equal(4);
    });

    it('should be six minutes when 10 to 14 are people seated', function () {
      expect(waitPerPerson(10)).to.equal(6);
      expect(waitPerPerson(14)).to.equal(6);
    });

    it('should be 10 minutes when 15 or more  people seated', function () {
      expect(waitPerPerson(15)).to.equal(10);
      expect(waitPerPerson(16)).to.equal(10);
    });
  });
});


describe('Problem 7', function () {
  it('should define an waitTime function', function () {
    expect(function () {
      waitTime();
    }).to.not.throw(ReferenceError);
  });

  describe('waitTime', function () {
    it('should take 16 minutes when 4 seated people and 8 waiting', function () {
      expect(waitTime(4, 8)).to.equal(16);
    });

    it('should take 32 minutes when 5 seated people and 8 waiting', function () {
      expect(waitTime(5, 8)).to.equal(32);
    });

    it('should take 48 minutes when 10 seated people and 8 waiting', function () {
      expect(waitTime(10, 8)).to.equal(48);
    });

    it('should take 80 minutes when 15 seated people and 8 waiting', function () {
      expect(waitTime(15, 8)).to.equal(80);
    });
  });
});


describe('Problem 8', function () {
  it('should define an customersBefore function', function () {
    expect(function () {
      customersBefore();
    }).to.not.throw(ReferenceError);
  });

  describe('customersBefore', function () {
    it('should count the names before the provided name', function () {
      var waitingCustomers = ['john', 'jane', 'bob', 'danny'];

      expect(customersBefore(waitingCustomers, 'bob')).to.equal(2)
      expect(customersBefore(waitingCustomers, 'john')).to.equal(0)
    });

    it('should return undefined if the name is not a waiting customer', function () {
      var waitingCustomers = ['john', 'jane', 'bob', 'danny'];

      expect(customersBefore(waitingCustomers, 'jack')).to.equal(undefined)
    });

    it('should return undefined if no one is waiting', function () {
      var waitingCustomers = [];

      expect(customersBefore(waitingCustomers, 'jack')).to.equal(undefined)
    });
  });
});

describe('Problem 9', function () {
  it('should define an hasReservation function', function () {
    expect(function () {
      hasReservation();
    }).to.not.throw(ReferenceError);
  });

  describe('hasReservation', function () {
    it('should return true when on reservations list', function () {
      var reservations = ['sam', 'taylor', 'ruby'];

      expect(hasReservation(reservations, 'taylor')).to.equal(true);
    });

    it('should return false not on reservations list', function () {
      var reservations = ['sam', 'taylor', 'ruby'];

      expect(hasReservation(reservations, 'lisa')).to.equal(false);
    });
  });
});

describe('Problem 10', function () {
  it('should define an timeRemaining function', function () {
    expect(function () {
      timeRemaining();
    }).to.not.throw(ReferenceError);
  });

  describe('timeRemaining', function () {
    it('should return the expected wait for given person', function () {
      var waiting     = ['john', 'jane', 'jack', 'ruby'];
      var name        = 'jack';

      expect(timeRemaining(waiting, name, 4)).to.equal(4);
      expect(timeRemaining(waiting, name, 10)).to.equal(12);
    });

    it('should return total wait time (like problem 7) if not waiting', function () {
      var waiting     = ['john', 'jane', 'jack', 'ruby'];
      var name        = 'bob';

      expect(timeRemaining(waiting, name, 4)).to.equal(8);
      expect(timeRemaining(waiting, name, 10)).to.equal(24);
    });
  });
});

describe('Problem 11', function () {
  it('should define variable emtpyObject', function () {
    expect(function () {
      emptyObject;
    }).to.not.throw(ReferenceError);
  });

  it('should be an empty object', function () {
    expect(emptyObject).to.eql({});
  });
});


describe('Problem 12', function () {
  it('should define the correct personName', function () {
    expect(personName).to.eql({
      first: 'jane',
      last:  'doe'
    })
  });
});

describe('Problem 13', function () {
  it('should define the correct birth', function () {
    expect(birth).to.eql({
      year: 1980,
      month: 11,
      day: 25
    })
  });
});

describe('Problem 14', function () {
  it('should define the correct address', function () {
    expect(address).to.eql({
      street:      '315 Hudson street',
      zip:         '10013',
      city:        'New York City',
      subdivision: 'New York'
    })
  });
});


describe('Problem 15', function () {
  it('should define the correct person', function () {
    expect(person).to.eql({
      name: {
        first: 'jane',
        last:  'doe'
      },
      birth: {
        year:  1980,
        month: 11,
        day:   25
      },
      address: {
        street:      '315 Hudson street',
        zip:         '10013',
        city:        'New York City',
        subdivision: 'New York'
      }
    })
  });
});

describe('Problem 16', function () {
  it('should define the correct firstName', function () {
    expect(firstName).to.equal(personName.first);
  });
});

describe('Problem 17', function () {
  it('should define the correct birthYear', function () {
    expect(birthYear).to.equal(birth.year);
  });
});

describe('Problem 18', function () {
  it('should define the correct personCity', function () {
    expect(personCity).to.equal(person.address.city);
  });
});

describe('Problem 19', function () {
  it('should three friends in userInfo', function () {
    expect(userInfo.friends.length).to.eql(3);
  });
});
