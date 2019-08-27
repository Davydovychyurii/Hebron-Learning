let price = +(prompt('Введіть суму'));
let discount = +(prompt('Введіть зачення знижки'));

function discont(price, discount) {
    return price <= 0 ? 'Invalid data' : Math.floor(((price * (1 - (discount / 100))) * 100)) / 100;
}
console.log(discont(price, discount));