// 1-Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function splitNumber(num) {
  const minNum = 0;
  const maxNum = 999;
  let unit = ["units", "tens", "hundreds", "thousands"];
  let splitNumberObj = {};
  let i = 0;
  if (num < minNum && num > maxNum) {
    return `${num} - число вне диапазона`;
  } else if (num === 0) {
    splitNumberObj[unit[i]] = num;
    return splitNumberObj;
  }

  while (num > 0) {
    splitNumberObj[unit[i]] = num % 10;
    i++;
    num = Math.trunc(num / 10);
  }
  return splitNumberObj;
}
console.log(splitNumber(0));

// 2-Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

let cartItems = [];
cartItems.push({ id: 125, name: "яблоко", price: 45, quantity: 3 });
cartItems.push({ id: 129, name: "груша", price: 11, quantity: 1 });
cartItems.push({ id: 159, name: "мандарин", price: 18, quantity: 14 });
cartItems.push({ id: 159, name: "ананас", price: 1100, quantity: 1 });
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(arrayProd) {
  let sumBasketPrice = 0;
  for (item of arrayProd) {
    sumBasketPrice += item.price * item.quantity;
  }
  return sumBasketPrice;
}
console.log(countBasketPrice(cartItems));

// 3-* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
