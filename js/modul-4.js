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


// .............................

// ЗАДАЧА 3

