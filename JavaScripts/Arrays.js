let marks=[49,89,90,67];

console.log(marks);

console.log(marks[1]);

console.log(marks.length);

for(let m of marks)
{
    console.log(m);
}

marks[2]=89890;
console.log(marks);

console.log("USing loops");

let names = ["harsh","vipul","kumar","Ram","Sham"];
for(let i =0;i<=names.length-1;i++)
{
    if(names[i] === "kumar")
    {
        names[i] = "Ravi";
    }
}
console.log(names);