'use strict';


// ЗАДАЧА 1
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const value = "10 10";

// const arrs = value.split(" ");
// console.log(arrs);

// let arrNew = [];

// for (const arr of arrs) {
//     arrNew.push(Number(arr));        
//     }
//     console.log(arrNew);

//     console.log(arrNew[0] * arrNew[1]);
    
    
// ........................

// ЗАДАЧА 2 -1 

// Напиши скрипт для перебору масиву fruits.
// Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.

// const fruits = [
//     "🍎", "🍐", "🍓", "🍏", "🍊", "🍉"
// ];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(i + 1, fruits[i]);    
// }

// ................

// ЗАДАЧА 2 - 2   Якщо в нас нам треба 2-а різних масива, то для кожного масиву треба писати 
// той самий цикл, щоб перебрати ці масиви. Щоб уникнути дублювання коду - використовуємо функцію 
// і викликаємо її з аргументом любого масива. Тобто поклали наш цикл for у функцію.

//   Напиши функцію logItems(items), яка отримує масив та використовує цикл,
//  який для кожного елемента масиву буде виводити в консоль повідомлення
//  у форматі <номер елемента> - <значення елемента>. Нумерація елементів
//  повинна починатися з 1.
//  Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
//  індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax
 

// function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`);        
//     }
// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍐", "🍓", "🍏", "🍊", "🍉"]);
// logItems([10, 20, 5, 40]);

// ..............................


// ЗАДАЧА 3

// Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
// javascript

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let sum = 0;

// for (const number of numbers) {    
//    if (number % 2 === 0) {
// sum += number;
//    }    
// }

// console.log(sum);

// Варіант 2
// for (const number of numbers) {    
//    if (!(number % 2)) {
// sum += number;
//    }    
// }


// Варіант 3
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let sum = 0;

// for (const number of numbers) {    
//    if (number % 2) {     
//       continue;
//          }           
//          sum += number;     
// }

// console.log(sum);

// ............................


// ЗАДАЧА 4
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача

// Варіант МІЙ
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "380012345671,380011122334,380055566377,380055566300";

// const arr1 = names.split(",");
// const arr2 = phones.split(",");

// console.log(arr1);
// console.log(arr2);

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// for (let i = 0; i < (arr3.length / 2); i++) {
//    console.log(`${arr3[i]}: ${arr3[i + (arr3.length / 2)]}`);      
// }



// Варіант МЕНТОР
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "380012345671,380011122334,380055566377,380055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// console.log(namesArr);
// console.log(phonesArr);


// for (let i = 0; i < namesArr.length; i++) {
//    console.log(`${namesArr[i]}: ${phonesArr[i]}`);      
// }


// ....................................


// ЗАДАЧА 5

// Напиши скрипт, який виводить у консоль усі слова рядка
// крім першого і останнього. Результуючий рядок не повинен починатися
// або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь-якого рядка.


// Варіант МІЙ
// const string = "   Welcome to the future    ";

// const arr = string.trim().split(" ");
// console.log(arr);

// let arrRes = [];
// for (let i = 0; i < (arr.length - 2); i++) {
    
//     arrRes.push(arr[i + 1]);     
// }

// console.log(arrRes);
// const result = arrRes.join(" ");
// console.log(result);




// Варіант МЕНТОР
// const string = "   Welcome     to the       future    ";
// const arr = string.trim().split(" ");
// console.log(arr);

// const arrRes = arr.slice(1, arr.length -1).join(" ").trim();

// console.log(arrRes);


// .............................


// ЗАДАЧА 6


//  Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
//  для будь-якого масиву чисел. Використовуй цикл для розв'язання завдання.
 
// Варіант МЕНТОР
// const values = [2, 17, 94, -2, 1, 23, 37];

// let min;

// for(let i = 0; i < values.length - 1; i++) {
// if(i === 0) {
//     min = values[i];
// } else if(values[i] < min) {
//   min = values[i];
// }
// }

// console.log(min);



// ...............................


// ЗАДАЧА-7    Псевдомасив arguments - це колекція схожа на масив, але насправді є псевдомасивом, тобто:
    // у неї є деякі властивості масивів, наприклад length;
    // у неї є можливість звернутися до елемента за індексом;    
    // її можна перебирати за допомогою циклів;
    // у неї НЕмає методів для роботи з масивом.


// function foo() {

// для порівняння створимо звичайний масив:

// const arr = [1, 2, 3];
// console.log(typeof arr);
// console.log(typeof arguments);

// // Перевірка на "МАСИВ"
// console.log(Array.isArray(arr));
// console.log(Array.isArray(arguments));

// // Для перетворення Псевдомасиву arguments в звичайний массив:

// const arg = Array.from(arguments);
// console.log(arg);
// console.log(Array.isArray(arg));


// let sum = 0;
// for(const argument of arguments) {
// sum += argument;
// }
// return sum;
// }

// console.log(foo(0, 2, 4, 3));


// ................................


// ЗАДАЧА-8
// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.


// Варіант-1
// метод масиву  toReversed()  повертає новий масив зі зворотним порядком, не чіпаючи оригінальний !!!

// function createReversedArray() {
// const args = Array.from(arguments);
// return args.toReversed();  
// }
// console.log(createReversedArray(12, 85, 37, 4));


// Варіант-2
// метод масиву  reverse()  змінює оригінальний масив !!!

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.reverse(); 
// }
// console.log(createReversedArray(12, 85, 37, 4));


// Варіант-2
// function createReversedArray() {
// const args = Array.from(arguments);
// let result = [];
//   for (let i = args.length - 1; i >= 0; i--) {
//     result.push(args[i]);    
//   }
// return result;  
// }

// console.log(createReversedArray(12, 85, 37, 4));


// ....................

// ЗАДАЧА-9
// Напиши функцію add для складання довільної кількості аргументів (чисел)

// Варіант-1  - оголешення звичайної ф-ії (function declaration):

// function add() {
//     let sum = 0;
// const num = Array.from(arguments);
// for (const args of arguments) {
//     sum += args;
// }
// return sum;
// }

// console.log(add(1, 2));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5, 6, 7));


// Варіант-2  - Функціональний вираз (function expression). Коли функція присвоюється у змінну, ім'я для цієї функції НЕ дається:

// const add = function() {
//     let sum = 0;
// const num = Array.from(arguments);
// for (const args of arguments) {
//     sum += args;
// }
// return sum;
// }

// console.log(add(1, 2));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));


// ....................

// ЗАДАЧА-9
// Напиши функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// Варіант-Мій
// function calAverage() {
// const args = Array.from(arguments);
// let result = 0;
// for(const arg of args) {
// result += arg;
// }
// return result / args.length;
// }

// console.log(calAverage(1, 2));
// console.log(calAverage(1, 2, 3));
// console.log(calAverage(1, 2, 3, 4));    


// Варіант-Ментор: без перетворення псевдомасиву arguments до звичайного масиву.
// function calAverage() {    
//     let result = 0;
//     for(let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//     }
//     return result / arguments.length;
//     }
    
//     console.log(calAverage(1, 2));
//     console.log(calAverage(1, 2, 3));
//     console.log(calAverage(1, 2, 3, 4));  


// ....................

// ЗАДАЧА-10

//  Напиши функцію printInfo(names, phones) яка виводить
//  у консоль ім'я та телефонний номер користувача. У параметри
//  names та phones будуть передані рядки імен та телефонних номерів,
//  розділені комами. Порядковий номер імен та телефонів у рядках
//  вказують на відповідність. Кількість імен та телефонів
//  гарантовано однакова.
 
// function printInfo(names, phones) {
// const name = names.split(",");
// const phone = phones.split(",");

// for(let i = 0; i < name.length; i++) {
// console.log(`${name[i]} - ${phone[i]}`);
// }
// }

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
// )

// printInfo(
//     "Dima,Yura,Kat",
//     "2541,2654,446466"
// )



// ....................

// ЗАДАЧА-11

//  Напиши функцію formatTime(totalMinutes) яка переведе значення
//  totalMinutes (кількість хвилин) у рядок у форматі годин
//  та хвилин HH:MM.

// function formatTime(totalMinutes) {
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// Варіант МЕНТОР Форматуємо до двох цифр з ведучими нулями
//     const Hours = String(hours).padStart(2, '0');
//     const Minutes = String(minutes).padStart(2, '0');

//   // Варіант чат GPT Форматуємо до двох цифр з ведучими нулями
//     // const formattedHours = hours.toString().padStart(2, '0');
//     // const formattedMinutes = minutes.toString().padStart(2, '0');

// return `${Hours}:${Minutes}`
// }

// console.log(formatTime(70));   // "01:10"
// console.log(formatTime(460));  // "07:40"
// console.log(formatTime(1441)); // "24:01"


// ....................

// ЗАДАЧА-12

//  Створити функцію яка буде розбивати початковий масив
//  на потрібну кількість елементів розділяючи на декілька
//  масивів. Функція приймає 2 параметри:
//  1 - масив значень
//  2 - потрібну кількість елементів в масиві
//  Функція повертає масив масивів







// Варіант МЕНТОР

// function foo(arr, num) {
//     let result = [];
// for(let i = 0; i < arr.length; i += num) {      
//     result.push(arr.slice(i, i + num));
// }
// return result;
// }

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(foo(data, 4));


// Варіант МІЙ + чат GPT

// function foo(arr, num) {
//     let arrResult = [];
//     let arrAdd = [];

//     for (let i = 0; i < arr.length; i += 1) {
//         arrAdd.push(arr[i]); // Завжди додаємо поточний елемент
        
//         if (arrAdd.length === num || i === arr.length - 1) {
//             arrResult.push(arrAdd);
//             arrAdd = []; // Створюємо новий підмасив
//         }
//     }
    
//     return arrResult;
// }


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(foo(data, 4));



// ....................

// ЗАДАЧА-