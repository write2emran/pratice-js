// all are array function

// map -->  transform function

const prophets = ['Mohammed', 'Isa', 'Musa', 'Abraham'] ;

const mapping = prophets.map(function transform(prophet) {
    return prophet.toLocaleUpperCase()
});

console.log(mapping.sort());

const numbers = [25, 14, 76, 32, 8, 22, 45, ];
// const sorted = numbers.sort();
// console.log(sorted);

function compare(a,b) {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
}

const updatedSort = numbers.sort(compare);
console.log(updatedSort);

const filteredSection = numbers.filter(num => num > 30);
console.log('filter', filteredSection);


const obj = {};

Object.keys(obj).length && obj.constructor === Object;