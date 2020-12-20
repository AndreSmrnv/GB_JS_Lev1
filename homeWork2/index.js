// #1. Дан код:
//  var a = 1, b = 1, c, d;
//  c = ++a; alert(c);           // 2
//  d = b++; alert(d);           // 1
//  c = (2+ ++a); alert(c);      // 5
//  d = (2+ b++); alert(d);      // 4
//  alert(a);                    // 3
//  alert(b);                    // 3
//     Почему код даёт именно такие результаты?
/*
    3- преитерация на 1 (сначала итерация, потом действие) 
        с=2 
        а=2
    4- поститерация (сначала действие, потом итерация)
        d=1
        b=2
    5- преитерация (сначала итерация, потом действие)
        a=3
        c=5 (2+3)
    6-  поститерация (сначала действие, потом итерация)
        d=4 (2+2)
        b=3
    7- a=3
    8- b=3
*/

// #2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
/*
    Ответ: x = 5 (1+2*2)
*/

// #3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
//     Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
/*
var a = -2;
var b = 5;
if ( isPositiveNumber(a) && isPositiveNumber(b) ) {
    console.log(a-b); 
} else if ( !isPositiveNumber(a) && !isPositiveNumber(b) ) {
    console.log(a*b); 
} else {
    console.log(a+b);
}
function isPositiveNumber (x) {
    return (x >= 0) ? true : false; 
}
*/

// ### 4. Присвоить переменной а значение в промежутке[0..15].
//     С помощью оператора switch организовать вывод чисел от a до 15.
/*
var a = 0;
switch (a) {
  case 0:
    console.log(a++);
  case 1:
    console.log(a++);
  case 2:
    console.log(a++);
  case 3:
    console.log(a++);
  case 4:
    console.log(a++);
  case 5:
    console.log(a++);
  case 6:
    console.log(a++);
  case 7:
    console.log(a++);
  case 8:
    console.log(a++);
  case 9:
    console.log(a++);
  case 10:
    console.log(a++);
  case 11:
    console.log(a++);
  case 12:
    console.log(a++);
  case 13:
    console.log(a++);
  case 14:
    console.log(a++);
  case 15:
    console.log(a++);
    break;
  default:
    console.error("значение за диапазоном");
}
*/


// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//     Обязательно использовать оператор return.
/*
function valuesPlus(x, y) {
    return x + y;
}
function valuesMinus(x, y) {
    return x - y;
}
function valuesMultiply(x, y) {
    return x * y;
}
function valuesDivide(x, y) {
    return x / y;
}
var a = 2;
var b = 4;
console.log(`Сумма ${a} и ${b} = ${valuesPlus(2,4)}`);
console.log(`Разность ${a} и ${b} = ${valuesMinus(2, 4)}`);
console.log(`Произведение ${a} на ${b} = ${valuesMultiply(2, 4)}`);
console.log(`Деление ${a} на ${b} = ${valuesDivide(2, 4)}`);

*/


// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//     где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//     В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3)
//     и вернуть полученное значение(использовать switch).
/*
var a = 2;
var b = 4;
console.log(calculateAB(a, b, 'plus'));
console.log(calculateAB(a, b, 'minus'));
console.log(calculateAB(a, b, 'multiply'));
console.log(calculateAB(a, b, 'divide'));

function calculateAB (x, y, oper) {
    switch (oper) {
        case 'plus':
            return x + y;
        case 'minus':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return x / y;
    }
}
*/




// ### 7) * Сравнить null и 0. Попробуйте объяснить результат.
/*

*/

// ### 8) * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень.
/*

*/
