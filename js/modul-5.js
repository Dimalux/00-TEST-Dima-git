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
// const result = [];
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


// ЗАДАЧА 4    Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, ДОДАЮЧИ до нього значення параметра "value", який точно є числом.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers


// function changeEven(numbers, value) {

//   const newNumbers = [];

// numbers.forEach(number => {
// number % 2 !== 0 ? newNumbers.push(number) : newNumbers.push(number + value);
// }
// )
//   return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));  //  [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));  //  [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100) );  //  [17, 124, 168, 31, 142]
// console.log( changeEven([44, 13, 81, 92, 36, 54], 100));  //  [144, 13, 81, 192, 136, 154]


// .............................
// .............................


// ЗАДАЧА 5    Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(item => item.title);
// console.log(titles);


// .............................
// .............................


// ЗАДАЧА 6    Доповни стрілочну функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = elements => {
//     return  elements.map(element => element.email); 
// };

// console.log(getUserEmails(users));


// .............................
// .............................


// ЗАДАЧА 7   У масиві students зберігається колекція студентів зі списком предметів, які відвідує студент у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що навіть повторюваних.


// Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. 
// Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність) - на ОДИН РІВЕНЬ ВКЛАДЕННОСТІ !!! Цей розгладжений (плоский) масив і є результатом роботи flatMap().


// const students = [
//   { name: "Mango", courses: ["mathematics", "physics", ["mathematics", "physics", "physics", "biology"]] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const studentsNew1 = students.flatMap(student => student.courses);
// console.log(studentsNew1);

// console.log(studentsNew1.flatMap(student => student));


// .............................
// .............................


// ЗАДАЧА 8   Метод filter() 

// const values = [51, -3, 27, 21, -68, 42, -37];
// console.log(values);
// console.log("");

// //  всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0 :
// console.log(values.filter(value => value >= 0));
// console.log("");

// //  всі елементи масиву values, які задовольнили умову колбека, тобто були < 0 :
// console.log(values.filter(value => value < 0));
// console.log("");

// //  всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000 :
// console.log(values.filter(value => value > 1000));
// console.log("");

// //  масив парних чисел :
// console.log(values.filter(value => value % 2 === 0));
// console.log("");

// //  масив НЕпарних чисел :
// console.log(values.filter(value => value % 2 !== 0));
// console.log("");


// //  Оригінальний масив values не змінився НЕ ЗМІНИВСЯ :
// console.log(values);


// .............................
// .............................


// ЗАДАЧА 9   Метод filter() на масиві об'єктів
// Є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:
// високі бали (від 80 (включно)),
// низькі бали (нижче 50),
// середні бали (від 50 (включно) до 80).

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// console.log(students.map(student => student.name));

// // високі бали (від 80 (включно)) :
// console.log(students.filter(student => student.score >= 80));

// // низькі бали (нижче 50) :
// console.log(students.filter(student => student.score < 50));

// // середні бали (від 50 (включно) до 80) :
// console.log(students.filter(student => student.score >= 50 && student.score < 80));


// .............................
// .............................


// ЗАДАЧА 10 


