
let Name = "Supriya"
console.log(Name)
let age;
age = 25;
console.log(Name + " " + age)

// types of variables
var marks = 80
console.log(marks) // how you would defines a var keyword
{
  const a = 65
  const b = 10
  let num = 500
  // the scope of the var variable lies inside afunction
  function add() {
    var a = 10
    var b = 20
    var c = a + b
    console.log(c)
  }
  console.log(a)
  add()
  function multiply() {
    const c = a * b
    console.log("multiplication value is" + c)
  }
  multiply()

  console.log(a)
  function division() {
    const c = a / b
    console.log("division value is" + c)
  }
  division()
  console.log("post fix decrement" + num--)
  console.log("pre fix decrement" + --num)
  console.log("post fix increment" + num++)
  console.log("pre fix increment" + ++num)
  console.log(num);
  let hello;
  // alert(!hello); // not -> logical operator //use doesnot //

  // AND operator
  alert(5 && 90 && 100); // and operator gives the bigger number

  // OR operator
  console.log(10 || 50 || 100) // OR operator gives smallest value 

  console.log(100 || 20)

  const names = ["Supri", "Supriya", "Inaganti"]
  console.log(names)

  const food = [];
  food[0] = "Biryani"
  food[1] = "sweets"
  food[2] = "Cake"
  console.log(food[2]);

  const menu = [...food, "vada", "Upma", "semya"]
  console.log(menu)

  const marks = [1, 11, 22, 333, 444, 55555]
  let maxMark = Math.max(...marks)
  console.log(maxMark)

  const students = new Map([
    ["Supriya", 17],
    ["sandty", 18],
    ["sandeep", 19],
    ["surya", 20]

  ])
  students.set("john", 20) // set method alloes us to add a key value pair after setting a data
  console.log(students)
  console.log(students.get("Rohit")); // get allows to retrive the data

  for (let index = 0; index < menu.length; index++) {
    console.log(menu[index]);
  }

  if (menu.length > 10) {
    console.log("we have more than ten food items")
  } if (menu.length == 10) {
    console.log("we have  ten food items")

  } else {
    console.log("we have less ten food items")
  }

   switch(menu.length) {
     case 0: console.log("no items in menu");
     break;

     case 1: console.log("1 item in menu");
     break;

     case 2: console.log("2 items in menu");
     break;

     case 3: console.log("3 items in menu");
     break;

     case 4: console.log("4 items in menu");
     break;

     case 5: console.log("5 items in menu");
     break;
     default: console.log("more than 5 items")

   }
}


