
let Name = "Supriya"
console.log(Name)
 let age;
 age = 25;
 console.log(Name  + " "  + age)

 // types of variables
  var marks = 80
   console.log(marks) // how you would defines a var keyword
{
   const a = 65
   const b = 10
   let num = 500
   // the scope of the var variable lies inside afunction
   function add () {
       var a = 10
       var b = 20 
       var c = a + b
       console.log(c)
   }
   console.log(a)
   add()
   function multiply(){
   const c = a * b
    console.log("multiplication value is" + c )
   }
   multiply()

   console.log(a)
   function division() {
    const c = a / b
     console.log("division value is" + c )
   }
   division()
   console.log("post fix decrement"+ num-- )
   console.log("pre fix decrement"+ --num)
   console.log("post fix increment"+ num++)
   console.log("pre fix increment"+ ++num)
   console.log(num);
 let hello;
  // alert(!hello); // not -> logical operator //use doesnot //

  // AND operator
 alert(5 && 90 && 100); // and operator gives the bigger number

   // OR operator
  console.log(10 || 50 || 100) // OR operator gives smallest value 

  console.log(supri || supriya)

}


