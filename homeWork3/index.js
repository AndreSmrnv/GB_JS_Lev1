// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let n = 100;
let i = 0;

while (i <= n) {
  let simpleNumber = true;
  for (let c = 2; c < i; c++) {
    if (i % c == 0) simpleNumber = false;
  }
  if (simpleNumber) {
    console.log(i);
  }
  i++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;

let cartPrices = [256, 587, 746, 32, 51, 49, 82, 64, 72];

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(arrayPrice) {
  let sumBasketPrice = 0;
  for (item of arrayPrice) {
    sumBasketPrice += item;
  }
  return sumBasketPrice;
}
console.log(countBasketPrice(cartPrices));

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (let i = 0; i <= 9; console.log(i++)) {}

// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let piramida = ["x"];
for (let i = 0; i < 20; i++) {
  console.log(...piramida);
  piramida.push("x");
}
