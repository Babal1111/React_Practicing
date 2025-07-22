function add(a,b){
    return a+b;
}

function square(a){
    return a*a;
}

function addTwqAndSquare(a,b){
    return square(add(a,b));
    // phle add kregea then square
}

console.log(addTwqAndSquare(2,8));
// agar akele akel

// 


function composeTwoFunction(f1,f2){
    return function(a,b){
       return f2(f1(a,b))
    }
}

const task = composeTwoFunction(add,square);
console.log(task(2,3));

function multiply(a,b){
    return a*b;
}
// agar hame phle multiply kran h or fir square krwana h
const task2 = composeTwoFunction(multiply,square);
console.log(task2(2,3));


//es6

const compse2 = (f1,f2)=>(a,b)=> f2(f1(a,b));
console.log(compse2(add,square)(2,3));

/// unlimited functions ko compose krwana

function composeU(...fns){
    return function (...values) // unlimited values ho skti 
    {
        fns.reduceRight((a,b)=>b(a), values) 
    }
}