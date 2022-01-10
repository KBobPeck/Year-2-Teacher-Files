
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

// ! this creates a decorator that will automatically bind any method to the class that it is used on
// ! recall this is a method desc. 
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = 'This works!';
  
  @Autobind
  // ! without the autobind this would show undefined because there is no constructor to place the message into this.message
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

//! alternative to all the autobind stuff
// button.addEventListener('click', p.showMessage.bind(p));
