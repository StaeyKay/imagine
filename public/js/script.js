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
