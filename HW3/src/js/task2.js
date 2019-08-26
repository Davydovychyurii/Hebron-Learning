let a = parseFloat(prompt('Введіть довжину сторони А'));
let b = parseFloat(prompt('Введіть довжину сторони Б'));
let c = parseFloat(prompt('Ввдедіть значення кута'));

function lengthB(a, b, c) {
    if (a <= 0 || b <= 0) {
        return 'Invalid data'
    } else {
        let side = Math.floor(Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)) - (2 * a * b * Math.cos(c * Math.PI / 180))) * 100) / 100;
        let square = Math.round(1 / 2 * a * b * Math.sin(c * Math.PI / 180));
        let perimeter = a + b + side;

        return {
            triangleLengthC: side,
            triangleSquare: square,
            rianglePerimeter: perimeter
        };

    }

}
console.log(lengthB(a, b, c))