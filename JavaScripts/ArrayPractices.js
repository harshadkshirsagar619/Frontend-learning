
let marks=[49,89,90,67,80];

let sum = 0;
let count = 0;
for(let i = 0; i <= marks.length-1;i++)
{
    sum=sum+marks[i];
    count++;
}

console.log("Sum :",sum ,"Count :",count);
let avg = sum/count;
console.log("Avg :",avg);


let company = ["Bloomberg","microsoft","uber","google","ibm","netflex"];

company.shift()
company.splice(2,0,"Ola");
company.push("amazon");
company.splice(2,1);
company.splice(3,0,"tcs");

console.log(company)

