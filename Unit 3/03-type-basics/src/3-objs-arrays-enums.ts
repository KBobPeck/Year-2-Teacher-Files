// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

//! You can define allowed values by hand like this but that is time consuming
//! instead you can use enums. variables that represent a value in your code
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//!enum is a custom type and should they should always be written with caps

//! this enum is written with no values and will be equal to 0, 1, 2 (the indexes)
// enum Role {
//   ADMIN ,
//   READ_ONLY ,
//   AUTHOR ,
// }

//! since admin = 5 the other 2 values will automatically be updated to 6 and 7
// enum Role {
//   ADMIN = 5,
//   READ_ONLY ,
//   AUTHOR ,
// }

//! you can also add any values or numbers that you want, you are not resticted in anyway
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 0,
  AUTHOR = 100,
}

let product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//! push does not cause an error even though there should only be 2 values in that variable
//! There is not fix to this, ts cannot detect this 
// person.role.push('admin');

//! this will not work since the value at index 1 should be a string
// person.role[1] = 10;

//! this will also throw an error since there are more values that the tuple allows
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

