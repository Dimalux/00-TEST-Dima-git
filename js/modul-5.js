'use strict';


// ПОЯСНЕННЯ-1   Колбек-функції. 
// Оголосимо дві функції greet і notify, які приймають ім'я користувача і виводять різні повідомлення. Далі оголосимо ще одну функцію registerGuest, яка прийматиме два параметри. "name" — ім’я користувача "callback" — посилання на функцію, яку треба викликати в тілі.


// function greet(name) {
//     console.log(`\nHELLO ${name}`);    
// }


// function notify(name) {
//     console.log(`\nGood nigth ${name}`);    
// }


// function registerGuest(name, callback) {
//   console.log(`\nWelcome ${name}!`);
//   callback(name);
// }

// registerGuest("Dima", greet);
// console.log("");

// registerGuest("Dima", notify);



// .............................
// .............................


// ПОЯСНЕННЯ-2  Інлайн-колбеки
// Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Такі функції називаються інлайн-колбеки. Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // 1)  Викликаємо функцію registerGuest() :

// // Передаємо інлайн-функцію "greet" у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// console.log("");

// //...................

// // 2)  Викликаємо функцію registerGuest() :

// // Передаємо інлайн-функцію "notify" у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// .............................
// .............................


// ПОЯСНЕННЯ-3  Метод forEach(callback) . ПЕРЕБОР МАСИВУ.

// 1) спосіб перебору масиву з використанням циклу " for" :


// const numbers = [5, 10, 15, 20, 25];
// for(let i = 0; i < numbers.length; i += 1) {
// console.log(`Value ${i + 1}: ${numbers[i]}`);
// }

// console.log("");

// ...............

// 2) спосіб перебору масиву з використанням циклу " for...of" :

// const numbers = [5, 10, 15, 20, 25];
// for(const number of numbers) {
// console.log(`Value ${number}`);
// }

// console.log("");

// ...............

// 3) спосіб перебору масиву методом  "forEach(callback)" (Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів "for" і "for...of". Єдиний випадок, коли варто використовувати цикли "for" або "for...of" для перебирання масиву, — це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця. Метод forEach(callback) повертає "undefined", навіть якщо явно задати вираз після return):
// можна оголошувати такі параметри (імена параметрів "element, index, array" може бути довільна):
// або  -  callback(element),
// або  -  callback(element, index),
// або  -  callback(element, index, array)


// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function callback(element, index, array) {
// console.log(`Value ${index + 1}: ${element} - ${array}`);
// return `${element}`;
// })


// Метод forEach(callback) повертає "undefined"
// const text = numbers.forEach(function callback(element, index, array) {
// console.log(`Value ${index + 1}: ${element} - ${array}`);
// })

// console.log(text);


// .............................
// .............................

// ЗАДАЧА 1      
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.


// function calculateTotalPrice(orderedItems) {

// let totalPrice = 0;

//   orderedItems.forEach(function callback(item) {
// totalPrice += item  
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));  // 138
// console.log(calculateTotalPrice([164, 48, 291]));   // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  // 1116


// .............................
// .............................


// ЗАДАЧА 2

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.      



// function filterArray(numbers, value) {

// const arr = [];

// numbers.forEach(function (item) {
//   if(item > value) {arr.push(item)} 
// })  
// return arr;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3) );  //  [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));   //  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));   //  []
// console.log(filterArray([12, 24, 8, 41, 76], 38) );  // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));   // [24, 41, 76]


// .............................
// .............................

// ЗАДАЧА 3-1  Оголошена змінна filterArray. Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value). Для перебирання масиву numbers використаний метод forEach. Колбек для методу forEach - це стрілочна функція. 
// Умова функція має повернути новий масив з елементами, індекс якіх починається з "value" :


// const filterArray = (numbers, value) =>
// {
// let result = [];
// numbers.forEach((element, index) => {

//  if(index >= value) {
// result.push(element)   
// } 
// })
// return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3) );  // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4) );  //  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 3) ); // [41, 76]

// ..................

// ЗАДАЧА 3-2  
// Умова функція має повернути новий масив з елементами, білших за число "value" :


// const filterArray = (numbers, value) =>
// {
// let result = [];
// numbers.forEach(element => {

//  if(element > value) {
// result.push(element)   
// } 
// })
// return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3) );  // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4) );  //  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38) ); // [41, 76]


// .............................
// .............................



