function reverseNumber(n) {
    return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
}
console.log(reverseNumber(123));