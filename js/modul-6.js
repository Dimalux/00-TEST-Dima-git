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


// ПОЯСНЕННЯ-1-1 
// Як правильно за допомогою методу call викликати функцію showName в контексті об’єкта user?

// function showName() {
// 	console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// showName.call(user);


// ............

// Яким буде результат, якщо викликати код вище?

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";   //  НЕ буде враховуватися

// const context = {
//   person: "Alice"
// };

// greet.call(context, "Bob");   //   Hello, Bob! I am Alice



// .............................
// .............................


// ПОЯСНЕННЯ-2  Метод apply()

// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає МАСИВУ, навіть якщо аргументи функції — це окремі значення.
// foo.apply(thisArg, [arg1, arg2, ...]) де
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.

// Тобто різниця між call і apply полягає лише у формі передачі аргументів. Вибір між call і apply залежить від того, як саме ти хочеш передавати аргументи до функції в конкретній ситуації. У всіх інших аспектах вони працюють ідентично: викликають функцію в контексті зазначеного об'єкта і передають їй аргументи.


// Приклад, де використаємо раніше оголошену нами функцію greet. Цього разу викликаємо її, використовуючи метод apply замість call.

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

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"


// .............................
// .............................


// ПОЯСНЕННЯ-3  Метод bind() і втрата контексту

// Методи call і apply викликають функцію «на місці», тобто одразу.
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

// Сигнатура методу bind() виглядає так:
// const boundFoo = foo.bind(thisArg, arg1, arg2, ...), де :
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику

// Як працює bind():

// const user = { name: "Анна" };

// function sayHello(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
// }

// // 1. bind() НЕ ВИКЛИКАЄ функцію, а СТВОРЮЄ нову
// const sayHelloToAnna = sayHello.bind(user);

// // 2. Цю нову функцію можна викликати пізніше
// sayHelloToAnna("Доброго ранку"); // "Доброго ранку, Анна!"
// sayHelloToAnna("Привіт");        // "Привіт, Анна!"


// .............................
// .............................


// ПОЯСНЕННЯ-3-1    Метод bind() - коли функція як МЕТОД ОБёЄКТА :

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"


// .............................
// .............................


// ПОЯСНЕННЯ-4  Метод bind() і колбеки :

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"


// .............................
// .............................


// ПОЯСНЕННЯ-5    this в ЗВИЧАЙНИХ ФУНКЦІЯХ :

// Глобальний контекст
// У визначенні значення this є важливий нюанс. Значення this визначається не на момент оголошення функції (за винятком стрілкових функцій), а на момент її виклику. Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.

// function foo() {
//   console.log(this);
// }
// foo(); // undefined (в суворому режимі 'use strict')   /   window (НЕ в суворому режимі)

// У глобальному контексті, якщо функція виконується НЕ в суворому режимі, this посилається на об'єкт "window". Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.
// У суворому режимі значення this у глобальному контексті завжди буде "undefined".


// .............................
// .............................


// ПОЯСНЕННЯ-6    this в СТРІЛОЧНИХ ФУНКЦІЯХ :



// Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window


// Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в момент її оголошення :

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window


// Стрілочні функції також ігнорують наявність суворого режиму !!!  ЗАВЖДИ буде "window" !
// Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі.

// "use strict";

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window


// Висновок : Що треба запам’ятати про this у стрілочних функціях?

// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

// .............................
// .............................


// ПОЯСНЕННЯ-7   Прототип об'єкта.
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.


// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4
// console.log(animal.rating);  //  undefined

// animal.legs = 10;   //  10
// animal.rating = 5;  //  5

// console.log(dog.legs);      //  10
// console.log(dog.rating);    //  5
// console.log(animal.name);   //  undefined
// console.log(dog.name);      // Mango


// .............................
// .............................


// // ПОЯСНЕННЯ-8   Перевірка прототипу :
// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().

// objA.isPrototypeOf(objB)

// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false


// const customer = {
// 	username: "Jacob"
// };

// const animal = { 
// 	legs: 4 
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false


// .............................
// .............................


// // ПОЯСНЕННЯ-8   Власні і невласні властивості :

// Використаємо вже знайомий нам приклад створення об'єкта dog з прототипом animal.

// const animal = {
//   legs: 4,
//   color: "red"
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// dog.rating = 7;

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// console.log(animal.hasOwnProperty("name"));
// console.log(animal.hasOwnProperty("color"));


// Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона називається невласною властивістю об'єкта dog. Невласна властивість об'єкта obj — це властивість його прототипу.

// Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.


// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false



// .............................
// .............................


// // ПОЯСНЕННЯ-9    Перебір власних властивостей - цикл for...in :
// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key);     // "name" "legs"
// }


// ...............

// ПОЯСНЕННЯ-9-1    Перебір власних властивостей - цикл for...in + метод "obj.hasOwnProperty(key)" :
// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом "obj.hasOwnProperty(key)". Цей метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його прототипу, в іншому разі — false.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key);    // "name"
// 	}
// }


// ...............


// ПОЯСНЕННЯ-9-2    Перебір власних властивостей - методи Object.keys(obj) і Object.values(obj) із циклом for...of.
//  замість цикла for...in + метод "obj.hasOwnProperty(key)"


// const animal = { 
// legs: 4,
// rating: 5,
// onLine: true
//  };
// const dog = Object.create(animal);
// dog.name = "Mango";
// dog.color = "blak";


// console.log(Object.keys(animal));     // (3) ['legs', 'rating', 'onLine']
// console.log(Object.values(animal));   // (3) [4, 5, true]

// console.log(Object.keys(dog));       // (2) ['name', 'color']
// console.log(Object.values(dog));     // ['Mango', 'blak']

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name" "color"
// }


// .............................
// .............................


// ПОЯСНЕННЯ-10  Ланцюжки прототипів - Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів :

// const objA = { a: "objC prop" };

// const objB = Object.create(objA);
// objB.b = "objB prop";

// const objC = Object.create(objB);
// objC.c = "objC prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: Object }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objA }
// console.log(objC); // { c: "objC prop", [[Prototype]]: objB }


// .............................
// .............................


// ПОЯСНЕННЯ-11    Класи, екземпляр класу, конструктор класу (Конструктор — це метод, який приймає "порожній", щойно створений об'єкт (this) і наповнює його початковими значеннями, роблячи з нього повноцінний екземпляр класу) :


// class User {
//     constructor(name, email) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com");
//   console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
  
//   const poly = new User("Poly", "poly@mail.com");
//   console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
  
 
// .............................
// .............................


// ПОЯСНЕННЯ-12   Об'єкт параметрів
// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
// До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт (наприклад ОБ'ЄКТ "params") з логічно іменованими властивостями, замість непов'язаного набору аргументів.

// class User {
//     constructor(params) {
//       this.name = params.name;     //  доступ до ЗНАЧЕННЯ властивості "name" об'єкта "params"
//       this.email = params.email;   //  доступ до ЗНАЧЕННЯ властивості "email" об'єкта "params"
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
  
//   console.log(mango);   //  { name: "Mango", email: "mango@mail.com" }

 
// .............................
// .............................


// ПОЯСНЕННЯ-13   Методи класу.  Конструктор (обов'язковий) + Додаткові методи (для функціоналу) = Повноцінний клас.
// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.
// Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (де вони розділяються комою), методи класу не розділені жодними спеціальними символами.



// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {                  //   Додаткові метод getEmail() класу User
//     return this.email;
//   }

//   changeEmail(newEmail) {       //   Додаткові метод changeEmail() класу User
//     this.email = newEmail;
//   }
// }


// !!!!  Методи класу додаються до спеціального об'єкта, який зберігається у властивості "prototype" самого класу.
// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}


// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail());       // "mango@mail.com"  -  результат роботи методу getEmail() класу User

// mango.changeEmail("new@mail.com");   //   робота методу changeEmail() класу User

// console.log(mango.getEmail());       // "new@mail.com"  


// .............................
// .............................


// ПОЯСНЕННЯ-14     