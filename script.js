


// Powers of 2

// function powersOfTwo(n){
//   const arr = [];
  
//   for (let i = 0; i <= n; i++) {
//     arr.push(2 ** i)
//   }
  
//     return arr
//   }
//   console.log(powersOfTwo(1));

  // function powersOfTwo(n){
  //   const arr = [];
    
  //   for (let i = 0; i <= n; i++) {
  //     arr.push(Math.pow(2, i))
  //   }
    
  //     return arr
  //   }
  //   console.log(powersOfTwo(1))
  
// OBJECT

    // const myObj = {
    //   firstName: "Frank",
    //   lastName: "Asamoah",
    //   age: 38,
    //   friends: ["Nana Kwame", "Naasei"]
    // };

    // localStorage.setItem("myObj", myObj);
    // console.log(myObj.firstName);

  //  localStorage.getItem("myObj");
  //   console.log(myObj.firstName)

// STRING


// const display = document.querySelector(".result");
// const input = document.querySelector(".putin");

// const disFunction = () => {
//   display.innerHTML = input.value;
// console.log(input.value)
// }

// input.addEventListener("keyup", disFunction)


// lonest word in a string




// const longestString = (str) => {
//   // to see the length of the longest string: "let longestWord = 0";
//   let longestWord = "";
//   let stringArray = str.split(" ");
//   for (let i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length > longestWord.length) {
//   // to see the length of the longest string: "longestWord  = stringArray[i].length";
//       longestWord  = stringArray[i];
//     }
//   }
//   return longestWord;
// }
// console.log(longestString("Hopefully we do more of these"));


const longestString = (str) => {
  let longestWord = str.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
  return longestWord;
}
console.log(longestString("Hopefully we do more of these"));

// // shortest word

// const shortestString = (str) => {
//   let shortestWord = str.split(' ').reduce((shortest, current) => {
//     return current.length < shortest.length ? current : shortest;
//   }, "");
//   return shortestWord;
// }
// console.log(shortestString("Frank Asamoah and Stringhetti are here"));


// function toCamelCase(str) {
//   let strArray = str.split(/[\s]/);
//   return strArray.reduce((prevItem, currItem) => prevItem += currItem)
  
// };

// console.log(toCamelCase('he is here'));

// function toCamelCase(str) {
//   let strArray = str.split(/[\s]/);
//   return strArray.toString()
  
// };

// console.log(toCamelCase('here'));

// let employee = {
//   firstName: 'Peter',
//   lastName: 'Doe',
//   employeeId: 1
// };

// console.log(employee.firstName);


const getSleepHours = day => {
  switch(day) {
    case 'Monday':
    return 5;
    case 'Tuesday':
    return 8;
    case 'Wednesday':
    return 7.5;
    case 'Thursday':
    return 6;
    case 'Friday':
    return 5.5;
    case 'Saturday':
    case 'Sunday':
    return 8;
    default:
    return "that's all for today"
  }
}

console.log(getSleepHours('Monday'));


const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday')  + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 6;
  return idealHours * 7; 
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if( actualSleepHours === getIdealSleepHours )  {
    return `Got the perfect amount of sleep.`
    } else if(actualSleepHours > getIdealSleepHours) {
      return `Got more sleep than needed.`
    } else if(actualSleepHours < getIdealSleepHours){
      return `Should get some rest.`
    } else {
      return `Go for advice`
    }
}
console.log(calculateSleepDebt());

class Person {
 constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

activity() {
  return `${this.firstName} plays good`}
 };


class NewPerson extends Person {
  constructor(firstName, age) {
    super();
    this.firstName = firstName;
    this.age = age;
    
  }
}

const person = new NewPerson('Frank', 'Asamoah', 38)

console.log(person.activity());

class Pet {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
  
  get name() {
    return this._name
  }

  get behavior() {
    return  this._behavior
  }
}

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}


class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  
  get certifications() {
    return this._certifications
  }

  // static method that can't be accessed by the instances of the Nurse class but only by the Nurse class

  static randomDrugsToBeGiven() {
    const drugs = ['Ibu', 'Para', 'G', 'Andrew'];
    const randomDrug = Math.floor(Math.random() * 4);
    return drugs[randomDrug]
  }

};

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

console.log(nurseOlynyk._name);
console.log(nurseOlynyk._certifications);
// call this....console logging this would be undefined
nurseOlynyk.takeVacationDays(5);
// before this works: pass by reference so it's mutable
console.log(nurseOlynyk.remainingVacationDays);

// this is how static methods are called. On the class itself
console.log(Nurse.randomDrugsToBeGiven())

// this is a TypeError since instance of nurse can't access this method
// console.log(nurseOlynyk.randomDrugsToBeGiven())


// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  return (typeof (a+b))
 };

 console.log(typeOfSum(undefined, true));


 //  Array plus array


function arrayPlusArray(arr1, arr2) {
  let total = 0;
  let allArrays = [...arr1, ...arr2];
  console.log(allArrays);
  for (let i = 0; i < allArrays.length; i++) {
    total += allArrays[i];
  }
  return total
   
};

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));



// Count how often sign changes in array.

// let count = 0
// let isPositive = false




// const catchSignChange = arr => {
//   let count = 0;
//   for (let i=0; i<arr.length; i++){
//     if((arr[i]<0 && arr[i+1]>=0) || (arr[i]>=0 && arr[i+1]<0)) 
//     count++
//   };
    
//   return count;
  
// };

// console.log(catchSignChange([1, -3, -4, 0, 5]));



// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


// function pillars(numPill, dist, width) {
//   if(numPill ==1 ) {
//     return 0
//   }else{
//     return numPill = ((numPill-2) * width) + ((100 * dist) * (numPill-1))
//   }
// };
// // return numPill == 1  ? 0 : ((numPill-2)*width) + ((100*dist)*(numPill-1)) 
// console.log(pillars(11, 15, 30));


// I just used a ternary conditional that checked if the number of pilars is 1, 
// it'll return 0, else, It'll multiply the number of pilars minus 2, by the width, 
// so I can get the length of all the pilars except for the first and the last one, 
// and then I'll sum the distance by 100 so I can get it in centimeters and the result of this by the number of pilars minus one, 
// because to get the sum of the lengths between two pillars I have to rest one, beacuse they are ordered like this:

// | -- | -- | -- |

// So if there are 4 pillars, there are only 3 empty spaces that contain a length



// function inAscOrder(arr) {
//   const compareArray = (a, b) => a - b
//   const newArr = arr.slice().sort(compareArray);
//   return arr.join() === newArr.join()
// }

// console.log(inAscOrder([1, 6, 10, 18, ]));


// function zeroAndOne(s) {
//  return s.replace(/01||10/g, '').length;
 
// };
// console.log(zeroAndOne("110100"));

// object can contain every type of data
let humanBeing = {
  firstName: "Roxi",
  lastName: "Danke",
  country: "Romania",
  // getInfo: function() {
  //   return this.firstName + " " + this.lastName + " comes" + " from " + this.country;
  // },
  getInfo() {
    // this refers to the object we're in....passby reference
    return `${this.firstName} ${this.lastName} comes from ${this.country}`;
  }
};

console.log(humanBeing.getInfo());

// console.log(this);


// class for when objects have some similarities so that the code for objects ain't repeated
class HumanBeing {
  // contructor is called anytime an instance( ie. object) is instatntiated from the class
  constructor(firstName, lastName, country){
    // this refers to the instances/objects that are gonna be generated from ther class
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country
  }
};

class NewWoman extends HumanBeing {
  constructor(firstName, lastName, country, son) {
    super(firstName, lastName, country);
    this.son = son
  }
}

// INSTANCES OF THE CLASS

// constructor 1
const roxi = new HumanBeing('Roxi', 'Danke', 'Romania');   

// constructor 2
const roxiFriend = new HumanBeing('Katarina', 'Bitte', 'Germany');

console.log(roxi.lastName);
console.log(roxiFriend.lastName);


// same OOP just like in React
const woman = new NewWoman('Jana', 'Stoecker', 'Germany', 'Lars');

console.log(woman.son);


// fifty-fifty chance
const fiftyfifty = Math.random() < 0.5;

fiftyfifty ? console.log('out') : console.log('bed');


// MakeUpperCase
const makeUpperCase = str => str.toUpperCase();
  
console.log((makeUpperCase("HELLO")));



// Make acronym
const toAcronym = inp => inp.split(' ').map(el => el.charAt(0).toUpperCase()).join('')


console.log(toAcronym("Portable Network Graphics"));


// const funcToPlay = () => {
//   const newName = 'Frank';

//   const newHuman = {
//     firstName: newName
//   }
//   console.log(newHuman.firstName);
// };

// funcToPlay();

// const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

// const seeToppings = (options) => {
//   const
// };

// Return the day

const whatday = (num) => { 
  const days = ["Sunday", "Monday", "Tuesday"
  , "Wednesday", "Thursday", "Friday", "Saturday"];
  
    return days[num-1] || "Wrong, please enter a number between 1 and 7";
  };
  
  console.log(whatday(4));
  
