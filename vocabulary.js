const min = N => _N =>
    N < _N  ? N : 
    _N

const max = N => _N =>
    N > _N  ? N : 
    _N

const sum = N => _N =>
    N + _N

const prod = N => _N =>
    N * _N

const isDivisibleBy = Int => _Int => 
    _Int % Int === 0

const isDivisorOf = Int => _Int => 
    Int % _Int === 0

const half = Int => 
    parseInt(Int/2)

const randInt = Int => 
    parseInt(Math.random(Int)*10)

const isUndef = x => 
    x === undefined

const isEqual = x => y => 
    x === y 
