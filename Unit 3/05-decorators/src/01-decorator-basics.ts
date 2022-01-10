// ! this will break since there is no argument being passed through
// function Logger() {
//   console.log("logging");
// }

// ! you can make any parameter _ if there is a required argument but you know that you aren't going to use it
// function Logger(_: Function) {
//   console.log("logging");
// }

// ! decorators on classes use 1 arg, the constructor and that is it
// function Logger(constructor: Function) {
//   console.log(constuctor);
// }

// ! this is a decorator factory for logger
function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  // This is what we made above but now it can be used over and over for different things
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// TODO add a div of id = "app" 
//! this creates a decorator that will add the template string to whatever hookId we pass through as long as that ID exists on the page

// function WithTemplate(template:string, hookId:string){
//   return function (_:Function) {
//     const hookEl = document.getElementById(hookId);
//     if(hookEl){
//       hookEl.innerHTML = template
//     }
//   }
// }

// ! you can also create a template that uses a prop from the class that it is decorating
function WithTemplate(template:string, hookId:string){
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor()
    if(hookEl){
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

//! adding a decorator will always pass back arguments if there are any
//! since this is tied to a class there will be 1 argument, that argument is the target
// @Logger

//! below we created a "Logger" decorator that works on a class, the string in this is just an addition that lets us log where this is working or why
@Logger("LOGGING - PERSON")
//! again, this is created when the class is defined, not when we initialize it
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
