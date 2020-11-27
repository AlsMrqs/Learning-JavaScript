const fibo = n => n < 2 ? n : fibo(n - 1) + fibo(n - 2);

const fact = n => n < 2 ? n : fact(n - 1) * n;



// TEST
const randInt = n => Math.floor(Math.random()*n);
let n = randInt(10);

console.log(`randInt: ${n}`);
console.log(`fibo(${n}): ${fibo(n)}`); 
console.log(`fact(${n}): ${fact(n)}`);
console.log(`isPrime(${n}): ${isPrime(n)}`);
