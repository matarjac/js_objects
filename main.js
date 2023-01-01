// EX-0
// 1.

const student = {
    name: 'yossi',
    age: 23,
    grade: 90,
    classes: ['English', 'Cinema', 'Painting']
}

console.log(student.name);
// 2.
    const book = {
    title: "book of wonder",
    author: 'Yossi',
    year: 2002,
    genre: 'Fantasy',
    publisher: 'Matar',
    pages: 400
    }

    book.rating=5;

// 3.

const car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
   };
console.log(car.features[1]);

const store = {
    name: 'Bootik',
    location: 'Bnei Brak',
    categories: ['Diary', 'Drinks', 'Food'],
    products: [{name: 'Cottage', price: 4, quantity: 20},
        {name: 'Pittot', price: 10, quantity: 10},
    {name: 'Kussbara', price: 8, quantity: 20}]
}

function getPrice(product){
    let price = store.products.find(item => item.name===product).price;
    let quantity = store.products.find(item => item.name===product).quantity;
    return price*quantity;
}
console.log('price is: ' +getPrice('Pittot'));


// EX-1

// 2.

const obj = {
    name: 'bob',
    age: 200,
    hobbies: 'screaming',
    height: 180
}
console.log(Object.keys(obj).length);

// 3.

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 3-1.

function displayGroceries(){
    for (let i=0;i<3;i++){
        console.log(groceries.fruits[i])
    }
    let shopping = groceries;

}
displayGroceries();

// 3-2
let user = client;
client = 'Betty';

array = [{name: 'yos', age:50}, {name:'mati', age:40}]
console.log(array);
console.log(array.find(item => item.name==='yos').age);

// EX-2

let books = [{name: 'Harry potter', author:'J.K Rowling', read: false},
            {name: 'Mr. vertigo', author:'Paul w.', read: true},
            {name: 'Serotonin', author:'Someone', read: false}]

for(i=0;i<books.length;i++){
    if (books[i].read){
        console.log(`You already read ${books[i].name} by ${books[i].author}`)
    }else{console.log(`You have not yet read ${books[i].name} by ${books[i].author}`);}
    
}

// EX-3

let fictionalPenguin = {name: 'Tacky', origin: 'Tacky the penguin', author:'Helen Lester'}
console.log(`Hello, I'm a penguin and my name is ${fictionalPenguin.name}!`);

fictionalPenguin.canFly = false;
fictionalPenguin.chirp = function(){console.log('CHIRP! CHIRP!')}
fictionalPenguin.sayHello = function(){console.log(`Hello im ${this.name} the penguin!`)}

fictionalPenguin.sayHello();

fictionalPenguin.name = "Penguin McPenguinFace";
fictionalPenguin.sayHello();

fictionalPenguin.fly = function(){if(this.canFly){console.log("I'm flying!")}else{console.log("I can't fly...")}}
fictionalPenguin.fly();

fictionalPenguin.canFly = true;
fictionalPenguin.fly();

for(let p in fictionalPenguin){
    console.log(p);
}
for(let p in fictionalPenguin){
    console.log(fictionalPenguin[p]);
}

//EX-4

// 1.
fictionalPenguin.favoriteFoods = ['Pizza', 'Eggs', 'Tomato'];
console.log(fictionalPenguin.favoriteFoods[1]);

// 3.
fictionalPenguin.firstFavoriteFood = fictionalPenguin.favoriteFoods[0];
console.log(fictionalPenguin.firstFavoriteFood);

// 4.
fictionalPenguin.favoriteFoods.push('Omlette');

// 5.
console.log(fictionalPenguin.favoriteFoods.length);

// 6.
fictionalPenguin.favoriteFoods[fictionalPenguin.favoriteFoods.length-1]="pineapples";
console.log(fictionalPenguin.favoriteFoods);


// let lastFavFood = fictionalPenguin.favoriteFoods.at(-1);
// fictionalPenguin.favoriteFoods[fictionalPenguin.favoriteFoods.length-1] = 'pineapples';
// console.log(lastFavFood)
// console.log(fictionalPenguin.favoriteFoods);

// ex-5
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };

let penguinArray = [gunter, ramon, fred];
let firstPenguin = penguinArray[0]
let secondPenguin = penguinArray[1]
console.log(`name of last penguin ${penguinArray[penguinArray.length-1].name}`);
penguinArray.push(fictionalPenguin);
console.log(penguinArray);
penguinArray[0].canFly = true;
penguinArray[0].sayHello();

for(let i =0;i<penguinArray.length;i++){
    penguinArray[i].numberOfFeet=2;
    console.log(penguinArray[i].numberOfFeet);
}

for(let i =0;i<penguinArray.length;i++){
    if (penguinArray[i].canFly){
        console.log(`${penguinArray[i].name} can fly!`);
    }
}

// EX-6
let school = {
name: "Aviv",
location: "Raannana",
students: [{name: 'Yossi', age: 17, grade: 8, classes: ['Math', 'English']},
            {name: 'Smadar', age: 17, grade: 8, classes: ['Arts', 'English']},
            {name: 'Ido', age: 17, grade: 9, classes: ['Math', 'Enginneering']}],
teachers: [{name: 'Riki', subject: 'Math', gradeLevels: [5,6,7,8]}, {name: 'Noam', subject: 'Arts', gradeLevels: [5,6,7,8]}, {name: 'Shuki', subject: 'English', gradeLevels: [5,6,7,8]}]
}

function isStudentInClass(studentName, teacherName){
    let studentObj = school.students.find(item => item.name == studentName);
    let teacherObj = school.teachers.find(item => item.name == teacherName);
    console.log(studentObj, teacherObj);
    for (let i =0; i<studentObj.classes.length; i++){
        if (teacherObj.subject.includes(studentObj.classes[i])){
            return true;
        }
    }
    return false;
}
console.log(isStudentInClass('Smadar', 'Noam'));

// EX-9

const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };

  function findByGenres(genre){
      let booksArr = [];
      for(i=0;i<library.books.length;i++){
          if(library.books[i].genre==genre){
              booksArr.push(library.books[i].title);
          }
      }
      return booksArr;
  }
  
  console.log(findByGenres('Novel'));