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

// const numbers = [5, 10, 15, 20, 25];

// 1) спосіб перебору масиву з використанням циклу " for" :

// for(let i = 0; i < numbers.length; i += 1) {
// console.log(`Value ${i + 1}: ${numbers[i]}`);
// }

// console.log("");

// ...............

// 2) спосіб перебору масиву з використанням циклу " for...of" :

// for(const number of numbers) {
// console.log(`Value ${number}`);
// }

// console.log("");

// ...............

// 3) спосіб перебору масиву методом  "forEach(callback)" :
// можна оголошувати такі параметри (імена параметрів "element, index, array" може бути довільна):
// або  -  callback(element),
// або  -  callback(element, index),
// або  -  callback(element, index, array)

// numbers.forEach(function callback(element, index, array) {
// console.log(`Value ${index + 1}: ${element} - ${array}`);
// })


// .............................
// .............................


