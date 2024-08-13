// if the value can change, the object is called mutable,
// while if the value cannot change, the object is called immutable.

// all the primitive type are immutable like string, numbers, boolean, null, undefined
//  reference type are mutable like array and object.

//primitive varibales && Immutable
let x = 20;
let y = x;
y = y + 1;
// console.log(x);
// console.log(y);

//refernce type varibales && Mutable

// Ex.1 Array
let a = ['text1', 'text2', 'text3'];
let b = a;
b.pop();
console.log(a);
console.log(b);

// Ex.2 Object
let c = {
  name: 'Ajafi',
  city: 'UAE',
};

let d = c;
d.city = 'USA';
d.business = 'IT Service';

console.log(c.city);
console.log(d.city);

console.log(c);
console.log(d);

