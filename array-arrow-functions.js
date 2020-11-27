// Interation with elements
const min = arr => arr.reduce( 
    (head, next) => head < next ? head : next
); 

const max = arr => arr.reduce( 
    (head, next) => head > next ? head : next
);

const sum = arr => arr.reduce(
    (head, next) => head + next
);

const prod = arr => arr.reduce(
    (head, next) => head * next
);

// Manipulation of elements
const del = (arr, toDel) => arr.filter(
    n => n != toDel
);

const change = (arr, toChange, value) => arr.map(
    n => n == toChange ? value : n
);


// TEST
// const randInt = n => Math.floor(Math.random()*n);
// let l = [...Array(5).keys()].map(n => randInt(10)); // random array
let l = [...Array(5).keys()].filter(n => n > 0);

console.log('array -> [', ...l, `]`)
console.log('min: '+ min(l));
console.log('max: '+ max(l));
console.log('sum: '+ sum(l));
console.log('prod: '+ prod(l));
console.log('del 3: '+ del(l, 3));
console.log('change 3 0: '+ change(l, 3, 0));
