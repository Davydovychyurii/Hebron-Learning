let a = parseFloat(prompt('Введіть суму'));
let b = parseFloat(prompt('Введіть зачення знижки'));

function discont(a, b) {
    return a <= 0 ? 'Invalid data' : Math.floor(((a * (1 - (b / 100))) * 100)) / 100;
}
console.log(discont(a, b));