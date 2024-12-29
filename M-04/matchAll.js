let text = "The rain in SPAIN stays mainly in the plain";
let res = text.matchAll(/ain/g);

const mkArr = Array.from(res)
console.log(mkArr);

for (const i of res) {
    // console.log(i);
}

// console.log(res);