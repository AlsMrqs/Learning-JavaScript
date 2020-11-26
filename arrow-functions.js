const min = arr => arr
    .reduce( (head, next) => 
        head = head < next ? head : next
    );

const max = arr => arr
    .reduce( (head, next) =>
        head = head > next ? head : next
    );

const fibo = n => 
    n < 2 ? n : fibo(n - 1) + fibo(n - 2);

const fact = n => 
    n < 2 ? n : fact(n - 1) * n;

const randInt = n => Math.floor(Math.random()*n);

// let l = [...Array(10)].map(n => n = randInt(10));
let l = [...Array(10).keys()];
let n = 10;

console.log('array -> [',...l,']\n');

console.log(`min: ${min(l)}`);
console.log(`max: ${max(l)}\n`);

console.log(`fibo(${l[0]}): ${fibo(l[0])}`);
console.log('array.map(fibo) -> [',...l.map(fibo),']\n');

console.log(`fact(${l[0]}): ${fact(l[0])}`);
console.log('arrya.map(fact) -> [',...l.map(fact),']\n');

