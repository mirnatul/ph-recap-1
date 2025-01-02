const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: true,
    availableIn: ['USA', 'UK', 'Australia'],
    'fav age': '18-30'
}

console.log(bottle.availableIn[1]); // can't access all like -, space
console.log(bottle['brand']); // we can use variable name in []

console.log(bottle);