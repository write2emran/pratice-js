//REST parameter accepts indefinite number of arguments as an array

// before ES6 we've (arguments)

// after ES6 - rest parameter


// Ex1

function sum(...values) {
    let sum = 0;
    values.map(val => sum+= val)
    console.log('sum', sum);
}

sum(1,2,3);
sum(1,7);
sum(0,9,8,2,3,4)

