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

// ЗАДАЧА 3   Варіанти отримання значення властивості з об'єкта 

// const item = "title";

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };


// console.log(book.title); 
// console.log(book["title"]); 
// console.log(book[item]);



// .............................

// ЗАДАЧА 4    Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];


// for (const product of products) {

// if(product.name === productName) {
//  return product.price * product.quantity;
// } 
// }
// return `Product ${productName} not found!`;
// } 
   

// console.log(calculateTotalPrice("Droid"));  // 2800

// console.log(calculateTotalPrice("Grip"));  // 10800

// console.log(calculateTotalPrice("Scanner"));  // 8100

// console.log(calculateTotalPrice("Blaster"));  // "Product Blaster not found!"


// .............................

// ЗАДАЧА 5  Додамо метод getAverageRating(), який повертатиме середній рейтинг книг.


// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
//   getAverageRating() {
// let result = 0;
//     for(const book of this.books) {
// result += book.rating;
//     }
//     // return result / this.books.length;

//     // return Math.round(result / this.books.length);

//     return (result / this.books.length).toFixed(2);

//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 8});

// console.log(bookShelf.getAverageRating());



// .............................

// ЗАДАЧА 6  Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {

// let sum = 0;
// for(const potion of this.potions) {
// sum += potion.price;
// }
// return sum
//     },    

// };

// console.log(atTheOldToad.getTotalPrice());


// .............................

// ЗАДАЧА 7   Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

//   function addOverNum(value, ...rest) {
// let sum = 0;
//       for(const res of rest) {
//         if(res > value) {
// sum += res;          
//         }         
//       }      
//       return sum;
//     }

//     console.log(addOverNum(15, 32, 6, 13, 19, 8));
    