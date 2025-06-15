function hi(){
    console.log("Hello");
}

let hi2 =()=>{
    console.log("Hello");
}

function add(a,b){
    return a+b;

}
hi();
console.log(10+20);


function hi3(name,message="this is default hi"){
    console.log(name + " " + message);
};

hi3("babal","says Satshiri Akal");
hi3("Ekam"); // this will use default