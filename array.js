const append = Arr => x => 
    [...Arr, x];

const insert = Arr => x =>
    [x, ...Arr];

const del = Arr => x =>
    Arr.filter(n => n != toDel);

const range = Int => 
    [...Array(Int).keys()] 

const list = Int => _Int => 
    range(_Int + 1).slice(Int)

const isPrime = Int => 
    Int <= 2   ? true : 
    list(2)(half(Int)).some(isDivisorOf(Int))
