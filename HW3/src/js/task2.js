let firstSide = +(prompt('Введіть довжину сторони А'));
let secondSide = +(prompt('Введіть довжину сторони Б'));
let angle = +(prompt('Ввдедіть значення кута'));

function lengthB(firstSide, secondSide, angle) {
    const radian = 180;
    if (firstSide <= 0 || secondSide <= 0) {
        return 'Invalid data'
    } else {
        let side = Math.floor(Math.sqrt((Math.pow(firstSide, 2) + Math.pow(secondSide, 2)) - (2 * firstSide * secondSide * Math.cos(angle * Math.PI / radian))) * 100) / 100;
        let square = Math.round(1 / 2 * firstSide * secondSide * Math.sin(angle * Math.PI / radian));
        let perimeter = firstSide + secondSide + side;

        return {
            triangleLengthC: side,
            triangleSquare: square,
            rianglePerimeter: perimeter
        };

    }

}
console.log(lengthB(firstSide, secondSide, angle))