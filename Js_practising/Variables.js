let name = "babal";

console.log(name);

name= "babalpreet";
console.log(name);



{
    let name = "b";
    console.log(name);

    let age = 20;
}
// console.log(age); // not defined , let blocked scope

// console.log(car); // hoisted ,buterror cant access before inittalition
let car ="Innova";


///////////////////////
console.log("now var starts :");

var name1 = "babal";
var name1 = "preet";

console.log(name1);// can be redeclared in same scope, mtlb outer m to let bhi tha, VAR ko khi bhi re declared, reassign kr skte,  but remmomber only functional scope


function test(){
    console.log(x);// hoisting- undefined
    var x =10;
    console.log(x);

}
test();

var n= 100;
function test2(){
    console.log(n);
}
test2();

let a = 100;
function test3(){
    console.log(a);
}

test3();

{
    let b = 100+"b";
    {
        console.log(b);
        let b2 = 100+"b2";
    } // let block scope
    // console.log(b2); // error
}

