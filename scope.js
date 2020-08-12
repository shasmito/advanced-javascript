let bonus = 20;

function sum (first, second){
    let result = first + second + bonus ;
    if (result > 9){
        var mood = "happy";
        mood = 'funky';
        mood = "Cranky"
    }
    console.log(mood);
    return result;
}

// scope to Use Var, if use let or const its result error

const output = sum (3, 7);
console.log(output);