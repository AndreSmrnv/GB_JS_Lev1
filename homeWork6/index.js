// Продолжаем реализовывать модуль корзины:
// Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
function Item(id, name, price = 0, quantity = 1) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}
let catItems = [];
catItems.push(new Item(catItems.length, "яблоко", 45));
catItems.push(new Item(catItems.length, "груша", 11));
catItems.push(new Item(catItems.length, "мандарин", 18));
catItems.push(new Item(catItems.length, "ананас", 1100));

let cartItems = [];

// cartItems.push({ id: 125, name: "яблоко", price: 45, quantity: 3 });
// cartItems.push({ id: 129, name: "груша", price: 11, quantity: 1 });
// cartItems.push({ id: 159, name: "мандарин", price: 18, quantity: 14 });
// cartItems.push({ id: 159, name: "ананас", price: 1100, quantity: 1 });

function getBasketPrice(arrayProd) {
  let sumBasketPrice = 0;
  for (item of arrayProd) {
    sumBasketPrice += item.price * item.quantity;
  }
  return sumBasketPrice;
}
function getBasketQuantity(arrayProd) {
  let sumBasketQuantity = 0;
  for (item of arrayProd) {
    sumBasketQuantity += item.quantity;
  }
  return sumBasketQuantity;
}
console.log(getBasketPrice(cartItems));

function showCat() {
  catItems.forEach(function (item) {
    drawCatItem(item);
  });
}

function drawCatItem(item) {
  const $catList = document.querySelector("#catalog");
  const catItemHtml = `<div id="cat-item-${item.id}" class="cat-item">      
        <p class="cat-item__title">${item.name}</p>
        <button data-id="${item.id}" class="cat-item__btn">buy</button>
      </div>`;
  $catList.insertAdjacentHTML("beforeend", catItemHtml);

  $item = $catList.querySelector(`#cat-item-${item.id}`);
  $btnBuy = $item.querySelector("button");

  $btnBuy.addEventListener("click", function () {
    cartItems.push(new Item(item.id, item.name, item.price));
    showCart();
  });
}
showCat();
// Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
function showCart() {
  const $cart = document.querySelector("#cart");

  if (cartItems.length !== 0) {
    $cart.textContent = `в корзине ${getBasketQuantity(
      cartItems
    )} товаров, на сумму  ${getBasketPrice(cartItems)} рублей`;
  } else {
    $cart.textContent = "корзина пуста";
  }
}
showCart();
