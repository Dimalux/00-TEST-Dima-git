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



// .............................


// ЗАДАЧА 8   Метод об'єкта + "THIS"

// const playList1 = {
// name: "Music 01",
// rating: 8,
// track: ["track 01", "track 02", "track 03"],
// nameNew(change) {
//     this.name = change;
// },
// addTrack(newTrack) {
// this.track.push(newTrack);
// }
// };

// console.log(playList1.name);
// playList1.nameNew("Music 01 - NEW !!!");
// console.log(playList1.name);

// console.log(""); // для розділення логів - пустий рядок в консолі

// console.log(playList1.track);
// playList1.addTrack("TRACK-4");
// console.log(playList1.track);


// const playList2 = {
// name: "Music 02",
// rating: 8,
// track: ["track 04", "track 05", "track 06"],
// };

// playList2.nameNew = playList1.nameNew;

// console.log(""); // для розділення логів - пустий рядок в консолі

// console.log(playList2.name);
// playList2.nameNew("Music 02 - NEW HELp!!!");
// console.log(playList2.name);


// .............................


// ЗАДАЧА 9   

// spread оператор "foo(...sumNum)" і
// rest оператор "function foo(...num)" 

// const sumNum = [1,2,3,4,5,6,7,8,9]

// function foo(...num) {
//     console.log(num);     
// }

// foo(...sumNum);


// .............................


// ЗАДАЧА 10      БАНКівські послуги і операції


//  Типів транзакцій всього два.
//  Можна покласти чи зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: "deposit",   //  користувач може ПОКЛАСТИ гроші на свій рахунок
//   WITHDRAW: "withdraw",  // користувач може ЗНІМАТИ гроші зі свого рахунку
// };


//  Кожна транзакція це об'єкт із властивостями: id, type та amount

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
// transactions: [],


// .............
//  Метод створює та повертає об'єкт транзакції.
//  Приймає суму та тип транзакції.

// createTransaction(amount, type) {},

// .............
//  Метод, що відповідає за додавання суми до балансу.
//  Приймає суму транзакції.
//  Викликає createTransaction для створення об'єкта транзакції
//  після чого додає його до історії транзакцій

// deposit(amount) {},

// .............
//  Метод, що відповідає за зняття суми з балансу.
//  Приймає суму транзакції.
//  Викликає createTransaction для створення об'єкта транзакції
//  після чого додає його до історії транзакцій.
 
//  Якщо amount більше ніж поточний баланс, виводь повідомлення
//  про те, що зняття такої суми не можливе, недостатньо коштів.

// withdraw(amount) {},

// ............. 
//  Метод повертає поточний баланс
 
// getBalance() {},
// 

// .............
//  Метод шукває та повертає об'єкт транзакції no id
 
// getTransactionDetails(id) {},


// .............
//  Метод повертає кількість коштів
//  певного типу транзакції з усієї історії транзакцій
 

// getTransactionTotal(type) {},

//    };


//    const Transaction = {
//   DEPOSIT: "deposit",   //  користувач може ПОКЛАСТИ гроші на свій рахунок
//   WITHDRAW: "withdraw",  // користувач може ЗНІМАТИ гроші зі свого рахунку
// };


//  Кожна транзакція це об'єкт із властивостями: id, type та amount



// БУЛО до завдання:

// const account = { 
// balance: 0, 
// transactions: [],
// createTransaction(amount, type) {},
// deposit(amount) {},
// withdraw(amount) {}, 
// getBalance() {},
// getTransactionDetails(id) {},
// getTransactionTotal(type) {},
// };


// ........................

// готовий КОД  ПІСЛЯ виконання завдання:

// ЗАДАЧА 10      БАНКівські послуги і операції

// const Transaction = {
//   DEPOSIT: "deposit",   //  користувач може ПОКЛАСТИ гроші на свій рахунок
//   WITHDRAW: "withdraw",  // користувач може ЗНІМАТИ гроші зі свого рахунку
// };

// const account = { 

// balance: 0, 
// transactions: [],

// createTransaction(amount, type) {
//  const obj = {
// id: amount,
// amount,
// type,
// };
// return obj;
// },

// deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);  // Історія транзакцій
// },

// withdraw(amount) {
// if(amount > this.balance) {
// return console.log("Зняття такої суми не можливе, недостатньо коштів");
// }
// this.balance -= amount;
// const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
// this.transactions.push(transaction);
// },

// getBalance() {
//     return this.balance;
// },

// getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
// if(id === transaction.id) {
// return transaction;
// } else {return "Такой транзакції НЕ ЗНАЙДЕНО !!!"};
//     }
// },

// getTransactionTotal(type) {
//     let sum = 0;
// for(const transaction of this.transactions) {
// if(transaction.type === type) {
// sum += transaction.amount;
// }
// }
// return sum;
// },
// };

// // хочу ВНЕСТИ депозит 300 грн:
// account.deposit(300);
// // ще ВНЕСТИ депозит 200 грн:
// account.deposit(200);

// // хочу ЗНЯТИ гроші:
// account.withdraw(600);
// account.withdraw(150);

// // хочу ОТРИМАТИ поточний БАЛАНС:
// console.log(account.getBalance());


// // отримати ТРАНСАКЦІЮ по ID:
// console.log(account.getTransactionDetails(300));

// console.log("");

// // Отримати кількість коштів певного типу транзакції :
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));  // по ДЕПОЗИТУ
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));  // по ЗНЯТИХ коштах


// // отримати весь об'єкт:
// console.log(account);

// .............
//  1)  Метод створює та повертає об'єкт "return obj" транзакції для ІСТОРІІ ТРАНСАКЦІЙ "transactions: []".
// В об'єкті має бути: 
// -  id, якій відповідає сумі "amount", яку ми поклали грощі);
// -  сума "amount" де відбулася операція. Використовуємо короткий синтаксис (коли ім'я ключа і ім'я змінної, значення якої зберігається під цим ключем співпадають !!!). Замість "amount: amount," пишемо просто "amount,";
// -  тип операції "type", яка була створена. Також використовуємо короткий синтаксис !!!
// Тип операції "type" може бути Transaction.DEPOSIT або Transaction.WITHDRAW

//  Приймає суму та тип транзакції.
// createTransaction(amount, type) {},

// createTransaction(amount, type) {
//  const obj = {
// id: amount,
// amount,
// type,
// };
// return obj;
// },


// .............
//  2) Метод, що відповідає за додавання суми до балансу.
//  Приймає суму транзакції.
//  Викликає createTransaction для створення об'єкта транзакції
//  після чого додає його до історії транзакцій
// deposit(amount) {},

// deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);  // Історія транзакцій
// },


// .............
//  3) Метод, що відповідає за зняття суми з балансу.
//  Приймає суму транзакції.
//  Викликає createTransaction для створення об'єкта транзакції
//  після чого додає його до історії транзакцій.
 
//  Якщо amount більше ніж поточний баланс, виводь повідомлення
//  про те, що зняття такої суми не можливе, недостатньо коштів.

// withdraw(amount) {},

// withdraw(amount) {
// if(!(amount > this.balance)) {
// return "Зняття такої суми не можливе, недостатньо коштів";
// }
// this.balance -= amount;
// const transaction = this.createTransaction(amount, transaction.WITHDRAW);
// this.transactions.push(transaction);
// },


// ............. 
//  4) Метод повертає "return this.balance" поточний баланс:
// getBalance() {},


// getBalance() {
//     console.log(this.balance);    
// },


// .............
//  5) Метод шукває та повертає об'єкт транзакції no id
 
// getTransactionDetails(id) {},

// getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
// if(id === transaction.id) {
// return transaction;
// } else {return "Такой транзакції НЕ ЗНАЙДЕНО !!!"};
//     }
// },



// .............
// 6) Метод повертає кількість коштів
//  певного типу транзакції (Тип операції "type" може бути Transaction.DEPOSIT або Transaction.WITHDRAW) з усієї історії транзакцій :
// getTransactionTotal(type) {},


// getTransactionTotal(type) {
//     let sum = 0;
// for(const transaction of this.transactions) {
// if(transaction.type === type) {
// sum += transaction.amount;
// }
// }
// return sum;
// },

// .....................................................




