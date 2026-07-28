const student = {
     fullName : "Harshad",
     marks : 94,
     printMarks : function() {
        console.log("masks",this.marks);
     },
};

const emp = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 40600,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__=emp;