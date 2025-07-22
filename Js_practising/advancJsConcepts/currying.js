function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

// es6 version
const add2 = (a)=>(b)=>(c) => a+b+c;

console.log(add());
console.log(add(10));
console.log(add(10)(20));
console.log(add(10)(20)(30)); //only execulets when all three parms are there
console.log(add2(100)(200)(300));

function send(to){
    return function(subject){
        return function(body){
            console.log(`sending email to ${to} subject: ${subject} body : ${body}`)

        
        }
}
}

let step1 = send("babalp@gmail.com"); //ek bande ne step  kr liya
let step2 = step1("to enquire"); // ek bande ne step1 ki ek or info gather kr ke step 2 bna diya

step2("bhai tere room ka kya rent hai");// step3 body lik di ie 3 param mil gya abh run

// let step3 = step2("bhai tere room ka kya rent hai");
// step3();  wrong

send("johny@gmail.com")("to fees mafi")("paise haini pra");

// es6 version ke bbad
const send2 = (to)=>(subject)=>(body)=>`sending email to ${to} subject: ${subject} body : ${body}`;console.log(send2("qwwer@gmail.com")("to fees mafi")("es6 version currying"));
