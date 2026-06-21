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


// ЗАДАЧА 10   Метод find() дозволяє знайти і повернути перший відповідний ЕЛЕМЕНТ масиву, що задовольняє умову (тобто коли колбек повертає true), після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу.
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає "undefined"



// .............................
// .............................


// ЗАДАЧА 10   Метод every() 
// Поелементно перебирає оригінальний масив
// Повертає true, якщо всі елементи масиву задовольняють умову
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає false


// // Усі елементи більші або дорівнюють нулю? - так
// console.log([1, 2, 3, 4, 5].every((value) => value >= 0))  // true

// // Усі елементи більші або дорівнюють нулю? - ні
// console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));  // false


// .............................
// .............................


// ЗАДАЧА 10   Метод every() з масивом об'єктів.
// Під час роботи з масивом об'єктів перевіряється значення якоїсь їхньої властивості. Наприклад, перебираючи масив об'єктів товарів, ми можемо перевірити, чи всі товари є в наявності.

// const products = [
// 	{ name: "apple", quantity: 2, online: true },
// 	{ name: "orange", quantity: 5, online: true },
// 	{ name: "plum", quantity: 0, online: true },
// ];

// console.log(products.every(product => product.online));  // true

// console.log(products.every(product => product.quantity > 0)); // false


// ...............


//          Метод some()
// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false


// .............................
// .............................


// ЗАДАЧА 11   Метод reduce()

// ...........
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату. 

// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

//  !!!!!!!  Якщо "initialValue" переданий - на початку циклу "previousValue" завжди дорівнює "initialValue". Кількість ітерацій = довжина масиву  !!!
//  !!!!!!!  Якщо "initialValue" НЕ переданий - на початку циклу "previousValue" завжди дорівнює першому елементу масиву і цикл буде на одну ітерацію менше  !!!

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек-функція з параметра редьюса очікує в свою чергу чотири параметри. Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:
// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.

// ............

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. 
// У змінній "players" зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. 
// У змінній "playtimes" зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. 
// У змінній змінна "totalPlayTime"  буде загальний час, проведений всіма гравцями в іграх.
// Значенням змінної "averagePlayTime" буде середній час, проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().


//  Мій варіант (короткий) :

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };

// const playtimes = Object.values(players);  // [1270, 468, 710, 244]

// const averagePlayTime = playtimes.reduce((previousValue, num) => {
// return previousValue + num;
//  }, 0) / playtimes.length;  //   2692 / 4 = 673

// console.log(averagePlayTime);  // 673


// ............


//  Варіант (по ТЗ) :

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };

// const playtimes = Object.values(players);  // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, num) => {
// return previousValue + num;
//  }, 0);  //   2692 

// const averagePlayTime = totalPlayTime / playtimes.length;  //   2692 / 4 = 673

// console.log(averagePlayTime);  // 673


// .............................
// .............................


// ЗАДАЧА 12   Метод reduce() і масив об'єктів


// Спочатку acc = {} (порожній об'єкт). 

// На ПЕРШІЙ ітерації
// В порожнему об'єкті створюемо нове ім'я (ключ) властивості :
//   user.id = 1 ... acc[user.id] ... acc[1]

// Далі присвоюємо значення властивості :
// acc[user.id] = user.name  або   acc[1] = "John"


// На ДРУГІЙ ітерації
// В порожнему об'єкті створюемо нове ім'я (ключ) властивості :
//   user.id = 2 ... acc[user.id] ... acc[2]

// Далі присвоюємо значення властивості :
// acc[user.id] = user.name  або   acc[2] = "Jane"



// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" }
// ];

// // reduce: перетворюємо масив → об'єкт
// const usersMap = users.reduce((acc, user) => {

//   acc[user.id] = user.name;
//   return acc;
// }, {});


// console.log(users);
// console.log("");
// console.log(usersMap);  // { 1: "John", 2: "Jane" }


// .............................
// .............................


// ЗАДАЧА 13   Метод reduce() і масив об'єктів
// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.


// ВАРІАНТ з reduce() :

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const total = students.reduce((prev, student) => 
// prev + student.score, 0);
// console.log(total);

// const result = total / students.length;
// console.log(result);

// ....................

// ВАРІАНТ з forEach() :

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// let sum = 0;
// students.forEach(item => sum += item.score);
// console.log(sum / students.length);


// .............................
// .............................


// ЗАДАЧА 14   У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
// return acc + player.playtime / player.gamesPlayed;  
// }, 0);

// або НЕЯВНЕ  повернення (implicit return)
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => 
// acc + player.playtime / player.gamesPlayed, 0);


// console.log(totalAveragePlaytimePerGame);


// .............................
// .............................


// ЗАДАЧА 15    Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// console.log(calculateTotalBalance(users));

// function calculateTotalBalance(users) {
// return users.reduce((sum, user) => 
// sum + user.balance, 0)  
// }


// .............................
// .............................


// ЗАДАЧА 16   Метод toSorted() -  для масиву ЧИСЕЛ
// Метод toSorted() сортує елементи масиву.
// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням
// Змінна releaseDates - це масив чисел, років видання книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання, за їх зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 7, 2008, 1984, 1973, 23, 2012, 1997];


// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(descendingReleaseDates);


// .............................
// .............................



// ЗАДАЧА 17   Метод toSorted() -  для масиву РЯДКІВ. Використовується метод рядків "localeCompare()" :

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students);

// //   Послідовність не змінюється (a - a) або (b - b) :
// console.log(1, students.toSorted((a, b) => a.localeCompare(a)));

// //   Сортування за зростанням (a - b) :
// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// console.log("");

// //   Сортування за спаданням (b - a) :
// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]


// .............................
// .............................


// ЗАДАЧА 18   Метод toSorted() -  Сортування ОБ'ЄКТІВ
// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати МАСИВ ОБ'ЄКТІВ за трьома різними сценаріями:
// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку


// За ЗРОСТАННЯМ для ЧИСЕЛ кількості балів :

//   Варіант 1: Сортувати сам МАСИВ ОБ'ЄКТІВ :

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const upArr = students.toSorted((a, b) => a.score - b.score);
// console.log(upArr);


// .................

//   Варіант 2: Отримати масив тільки балів і сортувати їх :

// Спочатку створити масив балів, потім його сортувати

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const scores = students.map(student => student.score);   //  [83, 59, 37, 94]
// console.log(scores);

// const upArr = scores.toSorted((a, b) => a - b);
// console.log(upArr);    //  Результат: [37, 59, 83, 94]


// .................


//   Варіант 3: Ланцюжок методів (найкоротший)

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const result = students.map(student => student.score).toSorted((a, b) => a - b);
// console.log(result);    // Результат: [37, 59, 83, 94]


// .................


// За СПАДАННЯМ для ЧИСЕЛ кількості балів :

//   Сортувати сам МАСИВ ОБ'ЄКТІВ :

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

//  const downArr = students.toSorted((a, b) => b.score - a.score);
//  console.log(downArr);
 

//  За ім'ям студента в АЛФАВІТНОМУ порядку :
//  Сортувати сам МАСИВ ОБ'ЄКТІВ :

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

//  const textArr = students.toSorted((a, b) => a.name.localeCompare(b.name));
//  console.log(textArr);


// .............................
// .............................



// ЗАДАЧА 19    Ланцюжки методів :
// У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного студента.
// Необхідно отримати МАСИВ ІМЕН, відсортованих за зростанням балів за тест.
// Для цього:
// Відсортуємо масив методом toSorted(),
// Після чого методом map() створимо масив значень властивості name з відсортованого масиву.


// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// отримати масив їхніх імен, відсортованих за зростанням балів за тест.

// const names = students.toSorted((a, b) => a.score - b.score).map(student => student.name);
// console.log(names);

// МІЙ ВАРІАНТ - Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом (filter МІЙ ВАРІАНТ) :
// const cours = students
// .flatMap(student => student.courses)
// .toSorted((a, b) => a.localeCompare(b))
// .filter((item, index, arr) => item !== arr[index - 1]);

// console.log(cours);

// ВАРІАНТ конспект :
// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

//   console.log(uniqueSortedCourses);



// .............................
// .............................


// ЗАДАЧА 20   Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Значення змінної MIN_BOOK_RATING - це число 8. Використовуй ланцюжок методів.

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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];


// Варіант 1 (правильний):
// filter → map → toSorted

// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(item => item.rating > MIN_BOOK_RATING)
//   .map(book => book.author)  
// .toSorted();


// ............

//  Варіант 2 (неефективний - Спочатку сортуємо ВСІ книги за рейтингом (навіть ті, що не підходять!)):
// toSorted → filter → map

// const MIN_BOOK_RATING = 8;

// const names = books
// .toSorted((a, b) => a.author.localeCompare(b.author))
// .filter(item => item.rating > MIN_BOOK_RATING)
// .map(item => item.author);

// console.log(names);


// ............


//  Варіант  БЕЗ ЛАНЦЮЖКА МЕТОДІВ :
// (неефективний - Спочатку сортуємо ВСІ книги за рейтингом (навіть ті, що не підходять!)):

// const MIN_BOOK_RATING = 8;

// const names = books.toSorted((a, b) => a.author.localeCompare(b.author));
// console.log(names);

// const filterRating = names.filter(item => item.rating > MIN_BOOK_RATING);
// console.log(filterRating);

// const namesResult = filterRating.map(item => item.author);
// console.log(namesResult);


// .............................
// .............................


// ЗАДАЧА U-1   Стрілочна функція
// явне / неявне повернення об'єкта:


// ЯВНЕ ПОВЕРНЕННЯ ОБ'ЄКТА :
// const obj = () => {
//     return {name: "Dima"}
// }

// console.log(obj());

// ........

// НЕПРАВИЛЬНЕ НЕявне повернення ОБ'ЄКТА :

// const obj = () => {name: "Dima"};

// console.log(obj());  // undefined

// ........

// ПРАВИЛЬНЕ НЕявне повернення ОБ'ЄКТА  (синтаксис  () - КРУГЛІ ДУЖКИ):

// const obj = () => ({name: "Dima"});

// console.log(obj());  // {name: 'Dima'}



// .............................
// .............................


// ЗАДАЧА U-2  Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції

// СТАРИЙ КОД :
// function logItems(items) {
//    console.log(items);
//    for (let i = 0; i < items.length; i += 1) {
//    console.log(`${i + 1} - ${items[i]}`);
//    }
// }

// console.log(logItems(["Mango", "Poly", "Ajax"]));
// console.log(logItems(["🟢", "🟡", "🟠", "🟣", "🟤"]));


// ..........

// РЕФАКТОРИНГ КОДУ :

// варіант 1 :
// const logItems = items => {
//    console.log(items);  
// items.forEach((item, index) => console.log(`${index + 1}: ${item}`));
// }

// або варіант 2 :
// function logItems(items) {
//    console.log(items);  

// items.forEach((item, index) => console.log(`${index + 1}: ${item}`));

// }

// console.log(logItems(["Mango", "Poly", "Ajax"]));
// console.log(logItems(["🟢", "🟡", "🟠", "🟣", "🟤"]));


// .............................
// .............................


// ЗАДАЧА U-3   Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції
 
// СТАРИЙ КОД :
// function printContactsInfo({ names, phones }) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//     }
// }

// printContactsInfo({
//     names: "Jacob,William,Solomon,Artemis",
//     phones: "89001234567,89001112233,890055566377,890055556300",
// });

// ..........

// РЕФАКТОРИНГ КОДУ :

// варіант 1  передача ОБ'єкта, як параметра функції :
// const  printContactsInfo = (obj) => {
//     const namesArr = obj.names.split(",");
//     const phonesArr = obj.phones.split(",");

// namesArr.forEach((name, ind)=> console.log(`${name}:  ${phonesArr[ind]}`));
// }

// printContactsInfo({
//     names: "Jacob,William,Solomon,Artemis",
//     phones: "89001234567,89001112233,890055566377,890055556300",
// });

// .........

// варіант 2  передача ОБ'єкта :

// const  printContactsInfo = ({ names, phones }) => {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

// namesArr.forEach((name, ind)=> console.log(`${name}:  ${phonesArr[ind]}`));
// }

// printContactsInfo({
//     names: "Jacob,William,Solomon,Artemis",
//     phones: "89001234567,89001112233,890055566377,890055556300",
// });


// .............................
// .............................


// ЗАДАЧА U-4   Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції

// СТАРИЙ КОД :
// function calculateAverage(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//     total += args[i];
//     }
//     return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));         // 2.5
// console.log(calculateAverage(14, 8, 2));           // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));   // 23.2


// ..........

// РЕФАКТОРИНГ КОДУ :

// const calculateAverage = (...args) => {

//     let total = 0;
// args.forEach(item => total += item);
// return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));         // 2.5
// console.log(calculateAverage(14, 8, 2));           // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));   // 23.2

// .............................
// .............................


// ЗАДАЧА U-5
// Нехай функція getModels повертає масив моделей (поле "model") всіх автомобілей


// Варіант 1  метод  "forEach" :

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
// ];

// const getModels = (arr) => {
// const sumModel =[];

// arr.forEach(item => {
//     sumModel.push(item.model)
// });

// return sumModel;
// }

// console.log(getModels(allCars));


// ............


// Варіант 2  метод  "map" :

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
// ];

// Запис із фігурними дужками (ЯВНЕ поверненя explicit return) :
// const getModels = (arr) => {return arr.map(item => item.model);};

// або в стрілках використовуємо запис без фігурних дужок (НЕЯВНЕ поверненя implicit return) :
// const getModels = arr => arr.map(item => item.model);

// console.log(getModels(allCars));


// .............................
// .............................


// ЗАДАЧА U-6
// Нехай функция "makeCarsWithDiscount" повертає НОВИЙ !!!   МАСИВ ОБ'ЄКТІВ із зміненим
// значенням властивості "price" залежно від переданої знижки "discount":

// Варіант 1   Мій :
// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
// ];


// Мій ВАРІАНТ копії об'єкта "{...item}"  (чат GPT робить висновок - 
// такий синтаксис ({...item}) в параметрах функції — це НЕТРИВІАЛЬНЕ ВИКОРИСТАННЯ):
// const makeCarsWithDiscount = (arr, discount) => arr.map(({...item}) => {

// const priceNew = item.price * (1 - discount);    
// item.price = priceNew;
// return item;
//     }
//     );  

// console.log(makeCarsWithDiscount(allCars, 0.2));
// console.log(allCars);


// ...............


// Варіант 2  (МІЙ + чат GPT) :
// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
// ];

// const makeCarsWithDiscount = (arr, discount) => arr.map(item => {

// const itemNew = {...item};
// const priceNew = itemNew.price * (1 - discount);    
// itemNew.price = priceNew;
// return itemNew;
//     }
//     );  

// console.log(makeCarsWithDiscount(allCars, 0.2));
// console.log(allCars);


// ...............


// Варіант 3  (Ментор урок на 2:00:00) :
// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
// ];

// const makeCarsWithDiscount = (cars, discount) => 
// {return cars.map(car => ({...car, price: car.price * (1 - discount)}));  
// };

// console.log(makeCarsWithDiscount(allCars, 0.2));
// console.log(allCars);


// .............................
// .............................


// ЗАДАЧА U-7   Збільшуємо кількість годин "timePlayed" гравця за "id"

// Варіант 1  (Мій) :
// const playerId = "player-3";
// const num = 50;

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true }
// ];

// console.log(players);

// const playersNew = players.map(player => ({...player, timePlayed: player.id === playerId ? player.timePlayed + num : player.timePlayed}));
    
//     console.log(playersNew);


// ...............


// Варіант 2  (Ментор урок на 2:08:08) :

// const playerId = "player-3";

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true }
// ];

//     const newArr = players.map((item) => {
//     if(item.id === playerId) {
//     return {
//     ...item,
//     timePlayed: item.timePlayed + 50
//     }
//     }
//     return item;
// })

// console.log(newArr);



// .............................
// .............................


// ЗАДАЧА U-8   
// 1)  Метод flat(Infinity) - для "розглажування" багатовимірного масиву (в на відміну методу flatMap(), 
// якій "розглажує" тільки один рівень) :
// 2)  Метод flat(num)  -  "розглажує" на різну глибину, наприклад на "2" рівня буде "arr.flat(2)"

// const arr = [1, 2, [3, [4, [5]]]];

// // Метод flat(Infinity) :
// console.log(arr.flat(Infinity));   //   [1, 2, 3, 4, 5]

// // Метод flat(num) :
// console.log(arr.flat(1));  //  [1, 2, 3, Array(2)]
// console.log(arr.flat(2));  //  [1, 2, 3, 4, Array(1)]
// console.log(arr.flat(3));  //  [1, 2, 3, 4, 5]



// .............................
// .............................


// ЗАДАЧА U-9   Метод filter(callback)
// Нехай функція "filterByPrice" повертає масив автомобілів ціна яких
// менше за значення параметра "threshold".


// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
// ];


// const filterByPrice = (arr, num) => arr.filter(item => item.price <= num);

// const threshold = 25000;

// console.log(filterByPrice(allCars, threshold));



// .............................
// .............................


// ЗАДАЧА U-10  Метод filter(callback)
// Нехай функція "filterByMake" повертає масив автомобілів за маркою :

// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 }
// ];

// const filterByMake = (arr, getMake) => arr.filter(item => item.make === getMake);

//  console.log(filterByMake(cars, "Ford"));

 
// .............................
// .............................


// ЗАДАЧА U-11   Метод find()
// Метод find(callback)  -  дозволяє знайти і повернути перший відповідний елемент, 
// що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну 
// від методу filter(callback), шукає до першого збігу.

// Шукаємо машину за моделлю

// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 }
// ];

// const getByModel = (arr, getModel) => arr.find(item => item.model === getModel);

//  console.log(getByModel(cars, "Tacoma"));
  

// .............................
// .............................


// ЗАДАЧА U-12   Метод filter() :
// Нехай функція getCarsWithType повертає масив автомобілів тип яких
//  збігається зі значенням параметра type.
 

// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 }
// ];

// const getCarsWithType = (arr, typeAvto) => arr.filter(item => item.type === typeAvto);

// console.log(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));


// .............................
// .............................


// ЗАДАЧА U-13   Метод reduce()

//  Рахуемо загальну зарплату
 
// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const arr = Object.values(salary);
// console.log(arr);    //   [100, 50, 150]

// const result = arr.reduce(((prev, item) => prev + item), 0);
// console.log(result);  //   840


// // або ланцюжок методів і без початкового значення акумулятора "0":
// const arr2 = Object.values(salary).reduce((prev, item) => prev + item);
// console.log(arr2);

// // ...............

// // Метод map() для порівняння :
// const arr3 = Object.values(salary);
// console.log(arr);

// let sum = 0;
// const result2 = arr3.map(item => sum += item);
// console.log(sum);


// .............................
// .............................


// ЗАДАЧА U-14    Порахувати загальну кількімть годин "timePlayed", 
// яку гравці програли в ігрі :

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//     { id: "player-5", name: "Chelsey", timePlayed: 80, online: true }
// ];

// const result = players.reduce((prev, item) => prev + item.timePlayed, 0);
// console.log(result);


// .............................
// .............................


// ЗАДАЧА U-15   Рахуємо загальну суму товарів кошика :
 
// const cart = [
//     { label: "Apples", price: 100, quantity: 2 },
//     { label: "Bananas", price: 120, quantity: 3 },
//     { label: "Lemons", price: 70, quantity: 4 },
// ];

// const sum = cart.reduce((prev, item) => prev + item.price * item.quantity, 0);
// console.log(sum);    //   840



// .............................
// .............................


// ЗАДАЧА U-16   Метод  -  toSorted((a, b) => a - b) / toSorted((a, b) => b - a)

// Сортування МАСИВУ ОБ'ЄКТІВ за ігровим часом "timePlayed" :

// Варіант  МІЙ (зробив сортування МАСИВУ ЦИФР):

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const sortedByTime = players.map(item => item.timePlayed);
// console.log(sortedByTime);  //   [310, 470, 230, 150, 80]

// console.log(sortedByTime.toSorted((a, b) => a - b));  //   [80, 150, 230, 310, 470]
// console.log(sortedByTime.toSorted((a, b) => b - a));  //   [470, 310, 230, 150, 80]

// console.log("");

// // ...........

// // або метод ланцюжків :
// const sortedByTime1 = players.map(item => item.timePlayed)
// .toSorted((a, b) => a - b);
// console.log(sortedByTime1);

// const sortedByTime2 = players.map(item => item.timePlayed)
// .toSorted((a, b) => b - a);
// console.log(sortedByTime2);



// Варіант  Ментор :

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const sortedByBestTime1 = players.toSorted((x, y) => x.timePlayed - y.timePlayed)  //  за ЗРОСТАННЯМ

// console.log(sortedByBestTime1);
// console.table(sortedByBestTime1);

// console.log("");

// const sortedByBestTime2 = players.toSorted((x, y) => y.timePlayed - x.timePlayed)  //  за СПАДАННЯМ

// console.log(sortedByBestTime2);
// console.table(sortedByBestTime2);


// .............................
// .............................


// ЗАДАЧА U-17   Ланцюжки методів :


// const numbers = [5, 2, 65, 1, 12, 8];

// const arr1 = numbers.filter(item => item > 6);
// console.log(arr1);                              //  [65, 12, 8]


// const arr2 = arr1.map(item => item * 3);
// console.log(arr2);                              //  [195, 36, 24]


// const arr3 = arr2.toSorted((x, y) => x - y);    //  [24, 36, 195]
// console.log(arr3);

// ........

// Те саме, тільки використовуємо  ЛАНЦЮЖКИ МЕТОДІВ :

// const numbers2 = [5, 2, 65, 1, 12, 8];

// const arr = numbers2
// .filter(item => item > 6)           //  [65, 12, 8]
// .map(item => item * 3)              //  [195, 36, 24]
// .toSorted((x, y) => x - y);         //  [24, 36, 195]

// console.log(arr);


// .............................
// .............................


// ЗАДАЧА U-18     ЛАНЦЮЖКИ МЕТОДІВ :

//  Нехай функція "getModelsOnSale" повертає масив моделей автомобілів,
//  але тільки тих, які зараз на розпродажі "onSale" :

// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24000, onSale: true },
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 20000, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 15000, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31500, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 42000, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 55000, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 35000, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 38000, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 18000, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 32000, onSale: false },
// ];

// const getModelsOnSale = (arr) => 
// arr
// .filter(item => item.onSale)
// .map(item => item.model);

// console.log(getModelsOnSale(allCars));


// .............................
// .............................


// ЗАДАЧА U-19     ЛАНЦЮЖКИ МЕТОДІВ :

// Нехай функція "getSortedCarsOnSale" повертає МАСИВ ОБ'ЄКТІВ автомобілів
// на розпродажі (Властивість onSale), відсортованих за зростанням цін :

// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24000, onSale: true },
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 20000, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 15000, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31500, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 42000, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 55000, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 35000, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 38000, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 18000, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 32000, onSale: false },
// ];

// Варіант МІЙ (повертаю ціни по зростоанню):
// const getSortedCarsOnSale = (arr) =>
// arr
// .filter(item => item.onSale)
// .map(item => item.price)
// .toSorted((a, b) => a - b);

// або Варіант Ментор без "map" (повертає МАСИВ ОБ'ЄКТІВ автомобілів):
// const getSortedCarsOnSale = (arr) =>
// arr
// .filter(item => item.onSale)
// .toSorted((a, b) => a.price - b.price);

// console.log(getSortedCarsOnSale(allCars));


// .............................
// .............................


// ЗАДАЧА U-20   Метод reduce() :


// Створення об'єкта за допомогою Метода reduce() де ключем має бути назва фрукту, а значенням іконка :

// Мій варіант :
// const arr = ["apple, 🍎", "orange, 🍊", "banana, 🍌", "lemon, 🍋"];

// const obj = arr.reduce((prev, item) => {

// const ind = item.indexOf(",");
//  prev[item.slice(0, ind)] = item[item.length - 1];
//  return prev;

// }, {}
// )
    
// console.log(obj);

// ...........

// Варіант  Ментор :


// const arr = [" apple, 🍎 ", "orange, 🍊", "banana, 🍌", "lemon, 🍋"];

// const obj = arr.reduce((prev, item) => {
// const arrNew = item
// .split(",")
// .map(item => item.trim())


// // Мій варіант :
// prev[arrNew[0]] = arrNew[1];
// console.log(prev);

// // Ментор
// // const key = arrNew[0];
// // const value = arrNew[1];
// // prev[key] = value;
// // console.log(key, value);

// return prev;
// }, {}
// )
    
// console.log(obj);


// .............................
// .............................


// ДОМАШНЄ ЗАВДАННЯ №5

// .............................
// .............................

// ЗАДАЧА DZ-1
// Задача 1. Імена користувачів

// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів. Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

// const getUserNames = (users) => users.map(item => item.name);

// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); 


// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]



// .............................
// .............................

// ЗАДАЧА DZ-2
// Задача 2. Користувачі з другом

// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.

// Поради:  
// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// const getUsersWithFriend = (users, friendName) => users.filter(item => item.friends.includes(friendName));

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// console.log(getUsersWithFriend(allUsers, "Adrian Cross" ));  // []   - поверне порожній масив


// .............................
// .............................


// ЗАДАЧА DZ-3

// Задача 3. Сортування за кількістю друзів

// Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// const sortByDescendingFriendCount = (users) => users.toSorted((a, b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );


// .............................
// .............................


// ЗАДАЧА DZ-4

// Задача 4. Загальний баланс

// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
//     перший параметр users — масив об’єктів користувачів,
//     другий параметр gender — рядок, що зберігає стать.

// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// const getTotalBalanceByGender = (users, gender) => users
// .filter(item => gender === item.gender)
// .reduce((prev, item) => prev + item.balance, 0);

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863



// .............................
// .............................


// ЗАДАЧА DZ-5