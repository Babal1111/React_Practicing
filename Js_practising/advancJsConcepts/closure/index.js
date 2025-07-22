
let btn = document.getElementById('btn1');


function outer(){
    let count = 0;
    console.log("in counter fnct")
    return inner(){
        count++;
        console.log(count);
    }
}

const counter = outer();
btn.addEventListener('click',counter);

//Here, inner() is a closure because it remembers count from outer() even after outer() has finished.


