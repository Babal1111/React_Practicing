
let state2 = {
    count:0
}
 
let prevState2 = state2;

function incriment2(){
    //mutating state
state2.count = state2.count+1;
    
 }

incriment2();
console.log(state2);
incriment2();
console.log(state2);
incriment2();
console.log(state2);

console.log(prevState2);

console.log("PREV === STATE",prevState2===state2);

console.log("--------------------------");

let state = {
    count:0
}
 
let prevState = state;

function incriment(){
  // non mutation 
   state = {
    count : state.count + 1
   }
}

incriment();
console.log(state);
incriment();
console.log(state);
incriment();
console.log(state);

console.log(prevState);
console.log("PREV === STATE",prevState===state);
console.log("-----------------------------");

//we have multiple states but want to update only one
let state3 = {
    name:"babal",
    age:30,
    count:0
}

const inc =()=>{
    state3 = {...state3,count : state3.count+1}
}
inc();
console.log(state3);
inc();
console.log(state3);
inc();
console.log(state3);
