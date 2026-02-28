'use strict';

// ПОЯСНЕННЯ-1   Метод call()

// foo.call(thisArg, arg1, arg2, ...)
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

// Приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.


// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

// foo.call(thisArg, arg1), де :
// thisArg: mango / poly  (об'єкти, в яких викликаємо ф-ію "greet")
// arg1: str - "Welcome"

// greet.call(mango, "Welcome");   // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha");      // "Aloha, Poly, your room is 191!"



// .............................
// .............................


// ПОЯСНЕННЯ-2  