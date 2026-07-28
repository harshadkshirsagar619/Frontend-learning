
function myfunction()
{
    console.log("Welcome to Apna Collage");
    console.log("Learning JS....")
}

myfunction();

//function para

function demo(msg)
{
    console.log(msg);
}

demo("I am learning java");

// sum

function sum(a,b)
{
    console.log("sum :",a+b);
}
sum(10,9);

// return
function add(a,b)
{
    s=a+b;
    return s;
}

console.log(add(10,10));

// arrow fuctions 

const sum1 = (a,b) => {
    return a+b;
}

console.log(sum1(12,78));

const mul = (a,b) => {
    return a*b;
}

console.log(mul(12,78));


// for Each loop


function abc()
{
    console.log("hello");
}

function myfun(abc)
{
    return abc;
} 
myfun();

let arr =[1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
})

arr.forEach((val) => {
    console.log(val);
})

let arr1 = ["pune","delhi","mumbai","jaipur"];

arr1.forEach((val,idx)=>{
    console.log(val.toUpperCase(),idx,arr1);
})

// square

arr.forEach((val)=>{
    console.log(val*val);
})

// map

let demos =[2,4,5,6,7,8];
console.log("map : ")

demos.map((val)=>{
    console.log(val);
})

let newArr = demos.map((val) =>{
    return val * val;
})

console.log(newArr);

//filter

let a  = [2,3,4,5,6,7,8];

let my = a.filter((val)=>{
    return val % 2 == 0;
})

console.log(my);

// reduce

let reduces = [1,3,5];

let op = reduces.reduce((result,current) =>{
    return result+current;
});

console.log(op);