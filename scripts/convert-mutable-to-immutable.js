// lets converting mutable to immutable

let oriArray = ['Azar', 'Imran', 'Jafar'];

let dupArray = [...oriArray]; // spread operator
dupArray.pop();

console.log(oriArray);
console.log(dupArray);

let obj = {
  name: 'Ajafi',
  location: 'america'
}

// let myObj = Object.assign({}, obj);
let myObj = {...obj }; //Spread operator
myObj.age = 54;

console.log(obj);
console.log(myObj);