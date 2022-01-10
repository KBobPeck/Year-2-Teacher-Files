//! TYPE CASTING
const button = document.querySelector("#input"); //is an Element type
const button2 = document.querySelector("#input") as HTMLInputElement; //is an Input Element type
const button3 = <HTMLInputElement>document.querySelector("#input"); //is an Input Element type
const button4: HTMLInputElement = document.querySelector("#input")!; //is an Input Element type

const usernames: Array<string> = []; // string[]
// names[0].split(' ');

//you will get an error on older config files es2016 is best
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("10");
  }, 2000);

  reject();
});

promise.then((data) => {
  data.split(" ");
});

//! Generics ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//this is ok but there are limits sometimes, Object.assign can only have 2 objects
//if we use a non object like 30 it will not work but it will compile

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, 30 );

//to fix this
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//! you need to do it this way if you don't use the extends object
// const mergedObj: {name:string, hobbies:string[], age: number} = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
// const mergedObj = merge<{name:string, hobbies:string[]}, {age: number}>({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

//by saying that T extends lengthy we tell the type that it is guananteed to have a length
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe("Cooking"));

//errors because we don't know if there that key in the object
// function extractAndConvert(obj: object, key: string) {
//   return obj[key]
// }

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
): string {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

//storage is reserved
// class Storage {
//   private data = [];

//   addItem(item) {
//     this.data.push(item);
//   }
//   removeItem(item) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }
//you can add jsut a T on the things first

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push('Manu');
// names.pop();
