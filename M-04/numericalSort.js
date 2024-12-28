const num = [40, 100, 1, 5, 25, 10]
console.log(num);
// num.sort(function (a, b) { return a - b })
num.sort((a, b) => a - b)
console.log(num);