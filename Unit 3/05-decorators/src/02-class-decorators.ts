// ! property decorators get 2 args
// * target which is the constructor
// * name of the property where it is being used

function PropLog(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// ! Accessor decorators get 3 args
// * target which is the constructor
// * the name of the accessor (this refers to a getter/setter)
// * the description on the accessor, the type of data, what created it, is there a partner set/get etc...
function AccLog(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ! Method decorators get 3 args
// * target which is the constructor
// * the name of the Method (this refers to a getter/setter)
// * the description on the Method, the type of data, what created it, is there a partner set/get etc...
function MethLog(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ! Parameter decorators get 3 args
// * target which is the constructor
// * the name of the Parameter variable
// * the index position that is it in the args list
function ParaLog(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropLog
  title: string;
  private _price: number;

  @AccLog
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethLog
  getPriceWithTax(@ParaLog tax: number) {
    return this._price * (1 + tax);
  }
}