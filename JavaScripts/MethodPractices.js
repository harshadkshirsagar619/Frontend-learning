let vowel = 0;
let consonent = 0;
function vowelCount(name){

    for(let i=0;i<=name.length-1;i++)
    {
        if(name[i] === "a" || name[i] === "e" || name[i] === "i" || name[i] === "o" || name[i] === "u")
        {
            vowel++;
        }else{
            consonent++;
        }
    }

    console.log("Vowels :",vowel);
    console.log("consonents :",consonent)
}

vowelCount("harshad");


//Arrow

const countvow = (names)=>{
    
    for(let i=0;i<=names.length-1;i++)
    {
        if(names[i] === "a" || names[i] === "e" || names[i] === "i" || names[i] === "o" || names[i] === "u")
        {
            vowel++;
        }else{
            consonent++;
        }
    }

    console.log("Vowels :",vowel);
    console.log("consonents :",consonent)
}

countvow("vivek");

