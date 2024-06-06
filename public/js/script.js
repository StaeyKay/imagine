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

