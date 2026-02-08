'use strict';


// ЗАДАЧА 1

// Напиши скрипт, який для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user у форматі ключ:значення використовуючі Object.keys() та for...of

// const user = {
//     name: "Alice",
//     age: 25,
//     hobby: "html",
//     premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userNew = Object.keys(user);

// for(const item of userNew) {
// console.log(`${item}: ${user[item]}`);
// }


// .............................

// ЗАДАЧА 2   Напиші функцію, щоб перевіряла си присутній такий товар в масиві storage

// Варіант-1 - відповідь (суворе порівняння)

// function foo(storage, item) {   
// if(storage.includes(item.toLowerCase())){
//     return `OK: ${item.toLowerCase()}`
// };
// return "Sorry, nothing found!"
// }

// console.log(foo(["apple", "plum", "pear"], "plum"));


// Варіант-2 - якщо користувач написав неповне слово

// function foo(storage, item) {   

// const itemTest = item.toLowerCase();

// Приводимо масив до рядка
// const storageNew = storage.join(" ");

// Застосовуємо метод  indexOf()  до рядка (перевірка першого входження підрядка (НЕПОВНОГО СЛОВА) в рядок). 
// Результат:
// - індекс першого входження (індекс першого символу) підрядка, якщо він знайдений;
//  або
// - "-1", якщо підрядок не виявлено.

// if(storageNew.indexOf(itemTest) !== -1){
//     return `OK: ${itemTest}`
// };

// Або 
// Метод includes() для перевірки ля перевірки наявності підрядка (НЕПОВНОГО СЛОВА) у рядку. 
// Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній.


// for(const itemArr of storage) {
// if(itemArr.includes(itemTest)) {
//     return `OK: ${itemArr}`
// };
// }

// return "Sorry, nothing found!"
// }

// console.log(foo(["apple", "plum", "pear"], "pe"));





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



