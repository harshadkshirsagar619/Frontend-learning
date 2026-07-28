/*
let name = prompt("hello");
console.log(name); */

/*
let num = prompt("Enter the Number : ");
if(num % 5 === 0 ){
    console.log(num,": num is multiple of 5");
}else{
    console.log(num," : number is not multiple of 5");
} */


let marks = prompt("enter the student marks..");
let grade;
if(marks >= 80)
{
    grade = "A";
    console.log("Grade : ",grade);
} else if(marks >= 70) {
    grade = "B";
    console.log("Grade : ",grade);
} else if(marks >= 60){
    grade = "C";
    console.log("Grade : ",grade);
}else if(marks >= 50)
{
    grade = "D";
    console.log("Grade : ",grade);
}else{
    grade="F";
    console.log("Grade : ",grade);
}