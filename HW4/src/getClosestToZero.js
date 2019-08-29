function getClosestToZero(a, ...b) {
    let number = [a, ...b];
    return number.sort((a, b) => Math.abs(0 - a) - Math.abs(0 - b))[0];
}
console.log(getClosestToZero(-5, 4, 9, 2, -1, 5, 12, -0.5));