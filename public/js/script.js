const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
};

// Variables
const pi = 3.142;
let name = 'Esther Kwashie';
let age = 16;
let present = false;
console.log(name);

// Objects
const car = {
    numberPlate: "GR-123-24",
    model: 'Bentley',
    color: 'pink',
    weight: 345,
    weightUnit: 'KG',
    owner: {
        name: 'Esther Kwashie',
        driver: {
            name: 'Kudzo'
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car = {
    model: 'Porche'
}
car.owner.driver.name = 'Ama';
console.log(car.owner.driver.name);


//Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweet: 1,
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 10,
    shares: 5,
    retweet: 3,
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets;
  
  //Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  //If/else
  if (today.getHours() == 16) {
    console.log('Class has ended!');
  } else {
    console.log('Class is in session!');
  }
  
  //For loop
  for (let i = 0; i <=10; i++) {
    console.log('Notify friends!', i);
    
  }

// June 6th, Functions
// Defining functions
function login(username, password) {
  if (username == 'mickeymond' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'mickeymond') {
    return 'Invalid username'
  } else if (password != '1234') {
    return 'Invalid password'
  } else {
    return 'Invalid username or password!';
  }
}
// Invoking functions
login('hello', '1111');

// Basic arithmetic
12 + 23;
90 - 53;
5 * 9;
60 / 5;
78 % 4;

// Comparison operators
2 == '2';
2 === '2';
3 !== 2;

// Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(8, 12, 45, 23, 8, 21, 96, 10, 18, 39);

Math.ceil(Math.random() * 1000000);

// Order of operations
1 * 2 + 3 - 4 / 2 + 2**2;

// Handling user inputs
1200 + Number('250');

// String concatenation
firstName = 'Esther ';
lastName = ' Kwashie';
firstName.trim() + ' ' + lastName.trim();

// Template literals
`${firstName.trim()} ${lastName.trim()}`;

// String methods
firstName.length;
lastName.length;
`${firstName.trim()} ${lastName.trim()}`.length;
firstName.toUpperCase();
lastName.charAt(3);  
`${firstName.trim()} ${lastName.trim()}`.trim(0);

// String conversion
String(2014)

// Write a function that will add a participant to our Google classroom
const participants = [];
function addParticipant(email) {
  // Check if email was provided
  if (!email) {
    return 'Email not provided!'
  }
  // Check if email is valid
  if (!email.inclides ('a')) {
    return 'Invalid email provided!'
  }
  // Add email to the participants;
  participants.push(email);
  // Notify them via mail
  // return response
  return 'Participant added!';
}

addParticipant();

//Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ')

// Write a function that will take firstname, lastname and return fullname;

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
};

// Invoking the function
fullName('Joe', 'Ganner');

// Write a function that will take a user with firstname, lastname and return fullname
const user = {
  firstname: 'Joe',
  lastname: 'Ganner'
}
function fullname(user) {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}
fullname(user);

//Array map
const users = [
  {firstname: 'Linda', lastname: 'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Stephen', lastname: 'Grider'},
  {firstname: 'Elon', lastname: 'Musk'},
]
users.map(fullname);

// Map and return squares of numbers

function square(number) {
  return number ** 2;
}

const numbers = [0, 1, 2, 3, 4, 5]
numbers.map(square);

// Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);

// Write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else false
// const user = {
//   name: 'Martin King',
//   dateOfBirth: '1970-06-17',
// }
function birthday (user){
  if (user.dateOfBirth == '12/06/2024') {
  return true
  } else {
    return false   
  };
};
 // Invoking the function
birthday(name, user.dateOfBirth);


// An alternative approach
function isBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  console.log(birthDate.getMonth(), today.getMonth());
  console.log(birthDate.getDate(), today.getDate());
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
  return true;
  } else {
    return false;
  }
}

isBirthday(user);

// Write a function that takes a user with name and dateOfBirth and returns a birthday message if their birthday is today else return not your birthday
function birthdayMessage(user) {
  if (isBirthday(user)) {
  return `Happy birthday ${user.name}`;
  } else {
    return `Sorry, ${user.name} it is not your birthday`;
  }
}

birthdayMessage(user);

// Bottle cls=ass
class Bottle {
  constructor(color, shape, volume) {
    this.color = color;
    this.shape = shape;
    this.voliume = volume;  
  } 
  
  getInfo() {
    return `This is a ${this.shape} ${this.color} bottle with a capacity of ${this.volume} ml`;
  }
}
const bottle1 = new Bottle ('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle ('yellow', 'square', 100);
bottle2.getInfo();


// Object methods 
const bottle = {
  color: 'red',
  shape: 'square',
  volume: 100,
  getInfo: function() {
  return `This is a ${this.shape} ${this.color} bottle with a capacity of ${this.volume} ml`;
  }
}

bottle.color;
bottle.getInfo();

