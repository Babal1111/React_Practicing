// function main(){
//     var name = "babal";

//     function display(){
//         console.log(name);
//     }
//     display();
// }

// main();

// function main(){
//     var name = "babal";

//     function display(){
//         console.log(name);
//     }
//     return display;
// }

// main(); // console.logs nothing

// let f1 = main();
// f1(); //
// console.log(f1);




function adder(num){
    function add(b){
        console.log(num +b) ;
    }
    return add;
}

const addTo5 = adder(5);
addTo5(2);


function send(to) {
    return function(subject) {
        return function(body) {
            console.log(`sending email to ${to} subject: ${subject} body : ${body}`);
        };
    };
}

// Here, each returned function closes over the variables to and subject. Even after send() has finished running, the inner functions still remember those values. That’s closure in action.
