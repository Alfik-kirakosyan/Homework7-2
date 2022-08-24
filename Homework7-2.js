//Homework7-2

//Task 1

function CarConstructor(year, model) {
    this.year = year
    this.model = model
  
    if (!new.target) {
      return "please call me with new keyword"
    }
}

//Task 2

//1
function LoggerDecorator(func) {
	return function(logger){
  	func.call(this, logger)
    console.log("Function name is:" + func.name)
    console.log("Function called at: ", new Date().toLocaleString())
  }
}

//2 
function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
  
      let result = func(x);
  
      cache.set(x, result);
      return result;
    };
}

//3

function delay(func, milSec) {

  return function() {
    setTimeout(() => func.apply(this, arguments), milSec);
  };

}


//Task 3

const flights = {

    flights: [],
  
    priorityFlights: [],
  
    scheduleFlight(flight) {
      this.flights.push(flight);
    },
  
    removeFlight(flight) {
      this.flights = this.flights.filter(flightFilter);
  
      function flightFilter(f) {
        if (flight === f) {
          return flights.priorityFlights.includes(flight);
        }
        return true
      }
    },
  
    makePriorityFlight(flight) {
      this.priorityFlights.push(flight);
    }
  
}

  
//Task 4

function Person() {
    this.name = "John";
    if (this.constructor === Person) {
      throw new Error("You can not create an instance , This is Abstract class");
    }
};


//Task 5

class Character {
  constructor(name, type, health, level, attack, defense) {
    this.name = name
    this.type = type
    this.health = health
    this.level = level
    this.attack = attack
    this.defense = defense

    const stringSize = this.name.length > 2 && this.name.length < 10

    if (!stringSize) {
      throw new Error("charachters must be min 2")

    }
  }

  levelUp() {
    if (this.life !== 0) {
      this.level += 1
      this.attack += (20 * this.attack) / 100
      this.health = 100
    } else {
      throw new Error("you cannot increase the level of the deceased")
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100)
    }
  }
}




class Bowerman extends Character {
  constructor(health, level, attack, defense) {
    super(health, level, attack, defense)

    this.health = 100
    this.level = 1
    this.attack = 25
    this.defense = 25
  }
}

class Swordsman extends Character {
  constructor(health, level, attack, defense) {
    super(health, level, attack, defense)

    this.health = 100
    this.level = 1
    this.attack = 40
    this.defense = 10
  }
}

class Magician extends Character {
  constructor(health, level, attack, defense) {
    super(health, level, attack, defense)

    this.health = 100
    this.level = 1
    this.attack = 10
    this.defense = 40
  }

}

class Undead extends Character {
  constructor(health, level, attack, defense) {
    super(health, level, attack, defense)

    this.health = 100
    this.level = 1
    this.attack = 25
    this.defense = 25
  }
}

class Zombie extends Character {
  constructor(health, level, attack, defense) {
    super(health, level, attack, defense)

    this.health = 100
    this.level = 1
    this.attack = 40
    this.defense = 10
  }
}

class Daemon extends Character {
  constructor(health, level, attack, defense) {
    super(health, level, attack, defense)

    this.health = 100
    this.level = 1
    this.attack = 10
    this.defense = 40
  }
}


let miqo = new Swordsman("miqo", "Swordsman")

console.log(miqo)
miqo.levelUp()
console.log(miqo)
miqo.damage(10)
console.log(miqo)


//Task 6

class City {
  constructor(buildings) {

    this.buildings = buildings
    
    this.buildings = []
    this.buildings.push(new.target.name)
  }
}


class Building extends City {
  constructor(buildings) {
    super(buildings);
    this.buildings.push(new.target.name)
  }
  
}

class Hospital extends Building {
  constructor(buildings) {
    super(buildings);
    this.buildings.push(new.target.name)
  }
}

class PoliceDepartment extends Building {
  constructor(buildings) {
    super(buildings);
    this.buildings.push(new.target.name)
  }
}

class Car extends Building {
  constructor(buildings) {
    super(buildings);
    this.buildings.push(new.target.name)
  }
}

class PoliceCar extends PoliceDepartment {
  constructor(buildings) {
    super(buildings);
    this.buildings.push(new.target.name)
  }
}

class AmbulanceCar extends Hospital {
  constructor(buildings) {
    super(buildings);
    this.buildings.push(new.target.name)
  }
}

const nairiHospital = new Hospital();
const erebuniHospital = new Hospital();
const centralPoliceDepartment = new PoliceDepartment()


console.log(City.buildings)

//Task 7

function promise(answer) {
	return new Promise(function(res, rej) {
  	if(answer === true){
    	res('Hooray!!! She said "Yes"!')
    } else if(answer === false) {
    	res('Oh no, she said "No".')   	
    }
    	rej('Wrong parameter is passed! Ask her again.')
  })
}


//Task 8

fetch(' https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data));












