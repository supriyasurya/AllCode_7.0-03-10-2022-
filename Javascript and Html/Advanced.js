//Encapsulation
//Inheritance
//Polymorphism
// Abstraction

 class Employee {
    setEmployee(name,id, position) {
        this.name = name;
        this.id = id
        this.position = position
    }
    getEmpolyeeName() {
        return this.name;
    }
     getEmployeeId() {
        return this.Id
     }

     getEmployeeposition() {
        return this.position;
     }

 } // how to create class in js
 let emp1 = new Employee("Supriya", 120, "SoftwareEngineer")
 let emp2 = new Employee();
 emp1.setEmployee()
 emp2.setEmployee()

 console.log(emp1.getEmployeeId());
 console.log(emp1.getEmpolyeeName())
 console.log(emp1.getEmployeeposition());
