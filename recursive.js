const fibo = Int => 
    Int < 2   ? Int: 
    fibo(Int - 1) + fibo(Int - 2)

const fact = Int => 
    Int < 2   ? Int : 
    Int * fact(Int - 1)

