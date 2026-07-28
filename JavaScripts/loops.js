
let sum =0;
for(let i = 1;i<=5;i++)
{
    sum = sum + i;
}
    console.log("Sum :",sum);

// while loop

let i = 1;
while(i<=6)
{
    console.log("While loop :",i);
    i++;
}

// do while

let y = 1; 
do{
    console.log(y);
    y++;
}while(y>5);

// for of loop

let str = "harsh";
for(let val of str)
{
    console.log(val);
}


// for in loop

let student = {
    name : "Rahul kumar",
    age : 23,
    cgpa : 7.0,
    isPass : true
};

for(let val in student)
{
    console.log("key :",val," val:",student[val]);
}

