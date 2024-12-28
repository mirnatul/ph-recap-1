const number = [4, 9, 16, 25, 29];
let first = number.find(firstVoter);
console.log(first);

function firstVoter(value, index, itself) {
    return value > 18;
}

// Another way
const number3 = [4, 9, 16, 25, 29];
let first3 = number3.find(value => value > 18);
console.log(first3);