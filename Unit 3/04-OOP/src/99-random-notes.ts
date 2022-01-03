// class Employee {
//   public empName: string;
//   protected empCode: number;

//   constructor(name: string, code: number){
//       this.empName = name;
//       this.empCode = code;
//   }
// }

// class SalesEmployee extends Employee{
//   department: string;
//   public checkCode = () => console.log(this.empCode);
  
//   constructor(name: string, code: number, department: string) {
//       super(name, code);
//       this.department = department;
//   }
// }

// let empObj = new SalesEmployee("John Smith", 123, "Sales");
// // empObj.empCode; //Compiler Error

class Employee {
  readonly empCode: number;
  empName: string;
  
  constructor(code: number, name: string)     {
      this.empCode = code;
      this.empName = name;
  }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; 

class Circle {
  static pi: number = 3.14;
  static findArea = (rad:number) => Circle.pi * rad ** 2
}

Circle.pi // 3.14
Circle.findArea(10) // 314

let math = new Math()
Math.PI
Math.min()

abstract class Person {
  abstract name: string;
}

class Employee extends Person { 
  name: string;
  constructor(name: string) { 
    super(); // must call super()
  }
}

let emp: Person = new Employee("James", 100);
