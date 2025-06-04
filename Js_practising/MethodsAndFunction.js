
let arr = [1,2,3,4,5];

// we want to find average of all element, ie firs will find sum

let sum = arr.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(sum);

const avg = sum/arr.length ;
console.log(avg);


let arr2 = [10,20,30,40,50];
console.log(`arr 2 starts : ${arr2} `);
let temp = arr2.reduce((prev,curr,currIdx,arr)=>{
    console.log(currIdx);
    // console.log(arr);
    
    return prev+curr;
})
console.log(temp);



let marks = [110,20,40,120,90,50,130];

let toppers = marks.filter((val)=>{
    if(val>90) return val;
})
console.log("filtered results : "+toppers);


let studens = [
      {
        name : "Rahul",
        age : 20,
        marks : 90,
      },{
        name : "babal",
        age : 21,
        marks : 100,
      },{
        name : "dhillon",
        age : 22,
        marks : 110,
      },
      
    ]


let names = studens.filter((stu)=>{
    if(stu.marks>90){
        console.log(stu.name);
        return stu.name;
    }
})
// let names2 = JSON.stringify(names);
console.log('students with marks greater than 90 are '+names);
// he issue is that .filter() always returns an array of the original objects, not a transformed array.
// In .filter(), you’re returning stu.name, which is a string, but .filter() itself does not change the structure of the array—it simply keeps the elements that meet the condition


let result = [];
studens.filter((stu)=>{
    if(stu.marks>90){
        console.log(stu.name);
        result.push(stu.name);
        // return stu.name;
    }
})

console.log(result);

let result2 = studens.filter( stu => stu.marks>90);
let result3 = result2.map(st =>st.name);
console.log(result2); //array of objects, as filter keep the sturcture as original arr
console.log(result3);

// or
let result4 = studens.filter( stu => stu.marks>90).map(stu => stu.name);
console.log(result4);


let num = [1,2,3,4,5];
console.log(num);
num.splice(2);

console.log(num);


let hi = (a,b)=>{
    console.log("this is a type of function");
    console.log(a+b);
}

hi(10,20);
console.log(hi);
