
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

    // arrow function
    function Area(num1,num2) {
      console.log(num1*num2); 
      return num1 * num2
    }
     // traditional way to write a function
   Area(100 , 100);
   area1 = (num1, num2) => {
     console.log(num1*num2)
   return num1*num2
   }
    // arrow function 
   area1(20 , 100);

    // set is js collection which can store only unique values
    const id_no = new Set([1,2,3,4,5,6,7,8,1]);

    id_no.add(500)
    id_no.delete(1);

    console.log(id_no);

    console.log(id_no.has(2));

    console.log(id_no.forEach);
     
    let id;
    id_no.forEach(function(value) {

     id += value

    })
    console.log(id);

    const employees = new Map([
      ["Supriya", 17],
      ["sandty", 18],
      ["sandeep", 19],
      ["surya", 20]
  
    ])
    employees.set("john", 20) // set method alloes us to add a key value pair after setting a data
  console.log(employees)
  console.log(employees.get("surya"));
  
  const employeeid_no = new Set([1,2,3,4,5,6,7,8,1]);
  console.log(employeeid_no);
}
var promise = new Promise(function(resolve,reject) {
  const passingMarks = 500
   const securedMarks = 300

   if(passingMarks <= securedMarks) {
    resolve()

   }else {
    reject()
   }
})
promise.then(function () {
  console.log("congrats you have passed the exam")

}).catch(function() {
  console.log("Try again next year")
})

 // console.log(a);
 async function sayMyName() {
   return "Supriya"; 
   const response = await fetch("https://api.github.com/users") 
  
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;

 }
 console.log("before calling say my name first")
 let say = sayMyName();
 console.log("after calling my name say name next")
 say.then(users=> console.log(users));
 console.log(say);
 console.log("last calling my name text");


  




