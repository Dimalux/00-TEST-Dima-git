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


// ПОЯСНЕННЯ-14     Приватні властивості

// "Для чого її робити приватною, якщо ми все одно додаємо методи?" :
// Приватність — це не про "неможливість доступу", а про "контрольований доступ".
// Ти не забороняєш доступ до email — ти створюєш єдині офіційні ворота (getEmail, changeEmail), через які цей доступ відбувається. І в цих воротах можна поставити охорону (перевірки, логування, валідацію).

// Для того щоб отримати або змінити значення приватної властивості використовуються ПУБЛІЧНІ МЕТОДИ :


// class User {
//   name;    // Необов'язкове оголошення ПУБЛІЧНОЇ властивості
//   #email;  // Обов'язкове оголошення ПРИВАТНОЇ властивості

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {                //   ПУБЛІЧНИЙ метод для отримання електронної пошти
//     return this.#email;
//   }

//   changeEmail(newEmail) {     //   ПУБЛІЧНИЙ метод для зміни електронної пошти
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"


// .............................
// .............................


// ПОЯСНЕННЯ-15     Приватні методи

// Іноді потрібно не просто отримувати або змінювати адресу електронної пошти, але й проводити певні дії, які мають бути приховані від "зовнішнього світу".
// Скажімо, кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
// Це можна зробити за допомогою ПРИВАТНИХ МЕТОДІВ. Додаючи до назви методу на початку символ #, ми робимо його приватним.

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // ПУБЛІЧНИЙ метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }


// // ВАРІАНТ-1  методи changeEmail() і #validateEmail() :

//   // ПУБЛІЧНИЙ метод для зміни електронної пошти
//   // changeEmail(newEmail) {
//   //   if (this.#validateEmail(newEmail)) {
//   //     this.#email = newEmail;
//   //   } else {
//   //     console.log('Invalid email format');
//   //   }
//   // }

//   // ПРИВАТНИЙ метод для валідації електронної пошти
// //   #validateEmail(email) {
// //     return email.includes('@');
// //   }
// // }

// // ВАРІАНТ-2  один метод метод changeEmail() замість 2-х -  changeEmail() + #validateEmail() :

// // changeEmail(newEmail) {

// // if(newEmail.includes("@")) {
// // return this.#email = newEmail;
// // }
// // return `email "${newEmail}" - invalid !!!`
// // }


// // ВАРІАНТ-3  один метод changeEmail() замість 2-х - ТЕРНАРНИЙ оператор :

// // changeEmail(newEmail) {
// // return newEmail.includes("@") ? this.#email = newEmail : console.log(`email "${newEmail}" - invalid !!!`);
// // ;
// // }

// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// // mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// // mango.#validateEmail('test'); // Помилка


// .............................
// .............................

// Навіщо використовуються приватні властивості та приватні методи ???

// Приватні властивості та приватні методи використовуються, щоб приховати деталі реалізації класу. Це дозволяє ізолювати (ІНКАПСУЛЮВАТИ) внутрішню реалізацію класу від зовнішнього коду й забезпечити контроль доступу до деяких властивостей і методів, щоб гарантувати безпеку та стабільність програми.


// .............................
// .............................


// ПОЯСНЕННЯ-16   Геттери і сеттери

// Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють взаємодіяти з іншими властивостями зручнішим способом.

// Також вважається гарною практикою називати геттери і сеттери так само, як і властивість, з якою вони працюють. 
// Геттер і сеттер повинні називатися однаково. 
// Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють. Геттер може існувати без сеттера, так само як і сеттер без геттера.


// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email   ВАРІАНТ-1 :
//   set email(newEmail) {
//     this.#email = newEmail;
//   }

// // Сеттер email   ВАРІАНТ-2 (з додатковою перевіркою) :
//   // set email(newEmail) {
//   //   if(newEmail === "") {
//   //     console.log("Помилка! Пошта не може бути порожнім рядком!");
//   //     return;
//   //   }  
//   //   this.#email = newEmail;
//   // }

//   }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com


// .............................
// .............................


// ПОЯСНЕННЯ-17   Статичні властивості :

// Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості. Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. 
// Вони корисні для зберігання інформації, що стосується класу.
// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово "static". Статичні властивості можна використовувати як у методах класу, так і поза класом.
// У екземпляра НЕмає доступу до статичних властивостей класу.

// ........

// Задача :     Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.
// Додай сеттеру price перевірку значення параметра newPrice, що передається. 
// Якщо воно більше за maxPrice, сеттер нічого не робить, 
// а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// class Car {
// static maxPrice = 50000;
// #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
// if(newPrice > Car.maxPrice) {   // Правильне звертання через клас "Car" до статичної властивості
//  return; 
// };    
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000   ПЕРЕЗАПИСАЛИ

// audi.price = 49000;
// console.log(audi.price); // 49000   ПЕРЕЗАПИСАЛИ

// audi.price = 51000;
// console.log(audi.price); // 49000   НЕ ПЕРЕЗАПИСАЛИ  (51000 > 49000)


// .............................
// .............................


// ПОЯСНЕННЯ-18   Статичні методи :

// У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи. Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні.

// Особливість статичних методів :
// Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра.

// Задача-1 :    Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. 
// Метод повинен порівняти значення параметра "price" і приватної статичної властивості "maxPrice".
// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".


// class Car {
// static #maxPrice = 50000;
// static checkPrice(price) {   
//     return price > this.#maxPrice ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
// }

// constructor(params) {
//     this.price = params.price
// }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// ................


// // Задача-2 :   Додамо у клас User:
// - статичну властивість "takenEmails" (список зайнятих поштових адресів) для зберігання зайнятих (доступних) пошт користувачів
// - статичний метод "isEmailTaken", який перевіряє, чи доступна (true) пошта

// Під час ініціалізації екземпляра в конструкторі класу будемо додавати пошту до масиву "takenEmails" зайнятих (доступних true).


// class User {

//     #email;
//     static #takenEmails = [];

//     static isEmailTaken(emailTest) {

//         return this.#takenEmails.includes(emailTest);
        
//     }

//     constructor(params) {

//         this.#email = params.email;
//         User.#takenEmails.push(this.#email)
//     }

// }

// const mango = new User({email: "mango-1@ghj.hj"});
// const mango2 = new User({email: "mango-2@ghj.hj"});


// console.log(User.isEmailTaken("mango-1@ghj.hj"));     //  true
// console.log(User.isEmailTaken("mango-NEW@ghj.hj"));   //   false

// console.log(User.isEmailTaken("mango-2@ghj.hj"));     //   true


// .............................
// .............................


// ПОЯСНЕННЯ-19   Наслідування класів  (extends) :
// "extends" дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).

// Задача :   У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.
// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}


// class User {
// #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Admin extends User {
// static role = {BASIC: "basic", SUPERUSER: "superuser"};
// }

// const admin = new Admin("admin@example.com");
// console.log(admin.email); // "admin@example.com"

// admin.email = "newadmin@example.com";
// console.log(admin.email); // "newadmin@example.com"

// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // "superuser"

// // Спробуємо прямий доступ до приватного поля:
// // console.log(admin.#email); // ПОМИЛКА! Приватне поле не доступне ззовні


// .............................
// .............................


// ПОЯСНЕННЯ-20   Конструктор дочірнього класу

// У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.
// В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.
// Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// Правило просте:
// Немає constructor() у дочірньому класі → super() викликається автоматично
// Є constructor() у дочірньому класі → super() має бути викликаний вручну, навіть якщо ви не використовуєте this

// Чому таке правило?
// Тому що написання constructor() — це сигнал JavaScript: "Я сам керую створенням об'єкта". І JavaScript вимагає, щоб ви спочатку викликали батьківський конструктор для створення базової частини об'єкта.



// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
    
//     super(params.email);        // Виклик конструктора батьківського класу "User", щоб заповнити "email"

//     this.posts = params.posts;  // Додаємо до дочірнього класу "ContentEditor" специфічну властивість  "posts"
//   }
// }

// // editor — це ОДИН об'єкт, який містить:
// // - email (від User)
// // - posts (від ContentEditor)

// const editor = new ContentEditor({ 
// 	email: "mango@mail.com", 
// 	posts: [] 
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"



// .............................
// .............................


// ПОЯСНЕННЯ-21     Конструктор дочірнього класу (продовження) :

//  // Задача-2 :  Додай класу Admin метод constructor, який приймає один параметр params - об'єкт налаштувань з двома властивостями "email" і "access". Додай класу "Admin" публічну властивість "access", значення якої буде передаватися під час виклику конструктора.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }


// //  Оголошений клас "Admin"
// // Клас "Admin" наслідує від класу "User"
// // Клас "Admin" містить публічну статичну властивість "role"
// // Клас "Admin" містить метод "constructor" з параметром "params"
// // В класі "Admin" в конструкторі для властивості "email" використовується звернення до конструктора батьківського класу

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   access;   // Можна просто прибрати цей рядок. Властивість все одно створиться "this.access = params.access"

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"


// .............................
// .............................


// ПОЯСНЕННЯ-22    Методи дочірнього класу

// Дочірній клас може використовувати методи та властивості батьківського класу. Крім цього, у дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.


// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// class ContentEditor extends User {

// constructor(params) {           //   Конструктор дочірнього класу
//     super(params.email);
//     this.posts = params.posts;
// }

// addPost(post) {                //   Метод дочірнього класу
//     this.posts.push(post);
// }
// }

// const editor = new ContentEditor (      //  Створюємо екземпляр класу "ContentEditor"
// {email: "mango@mail.com",  posts: []}
// );


// console.log(editor);   // { #email: "mango@mail.com", posts: [], addPost: f }

// //   Викликаємо метод "addPost" дочірнього класу "ContentEditor" :
// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']


// У прикладі бачимо, що ContentEditor успадковує клас User.
// User — це базовий клас, який має приватну властивість #email.
// ContentEditor розширює клас User і має власну властивість posts. Клас ContentEditor також має метод addPost, який дозволяє додавати нові повідомлення до posts.
// Метод addPost — це метод дочірнього класу ContentEditor . Він буде доступний тільки екземплярам ContentEditor.


// ...............



// Задача-1 :     Додай до дочірнього класу Admin метод "constructor", який приймає один параметр "params" - об'єкт налаштувань з двома властивостями "email" і "access". Додай класу "Admin" публічну властивість "access", значення якої буде передаватися під час виклику конструктора.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }


// // Оголошений дочірній клас Admin
// // Клас Admin наслідує від класу User
// // Клас Admin містить публічну СТАТИЧНУ властивість "role"
// // Клас Admin містить метод constructor з параметром "params"
// // В класі Admin в конструкторі для властивості "email" використовується звернення до конструктора батьківського класу
// // Звернення до Admin.role.BASIC повертає рядок "basic"
// // Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// class Admin extends User {
//  static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

// access;   // Можна просто прибрати цей рядок. Властивість все одно створиться "this.access = params.access"
// constructor(params) {
// super(params.email);
// this.access = params.access;
// }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"



// .............................
// .............................


// ПОЯСНЕННЯ-23    ПОВТОРЕННЯ:  4. Mодуль 4. Об'єкти.   Синтаксис "spread" і "rest"

// Операція "...spread" дозволяє створити копію об'єкта (або масиву) :

// ВАРІАНТ-1    копія посилання на об'єкт :
// const obj1 = {
// name: "Dima",
// color: "red",
// rating: 10
// };

// const obj2 = obj1;

// console.log(obj2 === obj1);   // true

// // ......


// // ВАРІАНТ-2    копія об'єкта - новий об'єкт (різні посилання) :

// const obj3 = {...obj1};

// console.log(obj3 === obj1);   // false



// .............................
// .............................


// ПОЯСНЕННЯ-24   Контекст у callback-функциях  (Урок-1 Модуль 6. ООП. Класи  57:30) :

// const user = {
//     name: "Petya",
//     showThis() {
//     console.log("showThis", this);
//     }
// }

// function foo(callback) {
//     console.log(callback);

// // Під час виклику колбеку ЗЛІВА нічого не стоїть - тому буде або "window" або "undefined" (при "use strict")
//     callback();
// }

// // якщо метод об'єкту передається як колбек функція, він втраяає свій контекст (свій this)
// foo(user.showThis);



// .............................
// .............................


// ПОЯСНЕННЯ-25 


// const user = {
//     userName: "Alice",
//     showThis() {
//     console.log(this);
//     },
//     showName() {
//     console.log(this.userName)
//     }
// }

// // user.showThis()

// const foo = user.showThis;
// foo();  //  "undefined"   (тому що "use strict")

// const foo1 = user.showName;
// foo1();   //  помилка ("use strict"), без "use strict" буде "undefined" (тому що в об'єкті "window" властивості user.showName НЕ МАЄ)



// .............................
// .............................


// ПОЯСНЕННЯ-26

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості stones.

// Варіант-1  (МІЙ) :

// const chopShop = {
//     stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//     ],

// calcTotalPrice(stoneName) {
//     let result = 0;

// this.stones.map(stone => {
//     if(stoneName === stone.name) {
// result = stone.price * stone.quantity;
// }
// }
// )
// return result
// }

// };

// console.log(chopShop.calcTotalPrice("Ruby"));      // 1600
// console.log(chopShop.calcTotalPrice("Emerald"));   // 5200
// console.log(chopShop.calcTotalPrice("Sapphire"));  // 9800
// console.log(chopShop.calcTotalPrice("Diamond"));   // 8100


// .............


// Варіант-2  (чат GPT) :

// const chopShop = {
//     stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//     ],

// calcTotalPrice(stoneName) {
//     const stone = this.stones.find(stone => stone.name === stoneName);
//     return stone.price * stone.quantity;
// }

// };

// console.log(chopShop.calcTotalPrice("Ruby"));      // 1600
// console.log(chopShop.calcTotalPrice("Emerald"));   // 5200
// console.log(chopShop.calcTotalPrice("Sapphire"));  // 9800
// console.log(chopShop.calcTotalPrice("Diamond"));   // 8100


// .............


// Варіант-3  (Урок-частина 1   Модуль 6. ООП. Класи  1:27:00) :

// const chopShop = {
//     stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//     ],

// calcTotalPrice(stoneName) {
   
// const stone = this.stones.find(item => item.name === stoneName)
// if(!stone) {
// return `${stoneName} - not found!`;
// } 
// return stone.price * stone.quantity;
// }
// }

// console.log(chopShop.calcTotalPrice("Аmber"));    //  Аmber - not found!

// console.log(chopShop.calcTotalPrice("Ruby"));      // 1600
// console.log(chopShop.calcTotalPrice("Emerald"));   // 5200
// console.log(chopShop.calcTotalPrice("Sapphire"));  // 9800
// console.log(chopShop.calcTotalPrice("Diamond"));   // 8100



// .............................
// .............................


// ПОЯСНЕННЯ-27    Метод "call" :


// function foo(a, b, arr) {
//     console.log("a, b", a, b, arr);
//     console.log("foo", this); // objA
// }

// const objA = {
//     a: 5,
//     b: 10
// }

// foo.call(objA, "1alala", 5, [2, 3, 4]);



// .............................
// .............................


// ПОЯСНЕННЯ-28    Метод "apply" :

// function foo(a, b, arr) {
//     console.log("a, b", a, b, arr);
//     console.log("foo", this); // objA
// }

// const objA = {
//     a: 5,
//     b: 10
// }

// foo.apply(objA, ["1alala", 5, [2, 3, 4]]);


// .............................
// .............................


// ПОЯСНЕННЯ-29    Метод "call" i "apply".
// Задача-1   Написати функцію, яка буде змінювати кольор в об'єктах :


// const hat = {
//     color: "black"
// }

// const sweater = {
//     color: "blue",
// }

// // Функція для зміни кольору. Увага - підкреслення "changeColor" !!! але якщо закоментувати "// this.color = newColor", підкреслення букви "с" ЗНИКАЄ ??!
// // Напевно this.color не бачить цієї властивості... Якщо написати просто "this = newColor" - то все добре ?!
// function changeColor(newColor) {
//     this.color = newColor;
// }

// console.log(hat); // { color: "black" }
// changeColor.call(hat, "red");
// console.log(hat); // { color: "red" }

// console.log(sweater); // { color: "blue" }
// changeColor.apply(sweater, ["white"]);
// console.log(sweater); // { color: "white" }


// .............................
// .............................


// ПОЯСНЕННЯ-30    Метод "bind".


// const hat = {
//     color: "black"
// }

// function changeColor(newColor) {
//     console.log("color before:", this.color);    
//     this.color = newColor;
// }

// // ДВА  ВАРІАНТИ передачі параметра :

// // ВАРІАНТ-1  як параметр метода "bind" :

// // const changeHatColor = changeColor.bind(hat, "red");
// // changeHatColor();

// // ВАРІАНТ-2  як аргумент при виклику функції " changeSweaterColor("green")" :

// const changeSweaterColor = changeColor.bind(hat);

// // console.log(hat);
// changeSweaterColor("green");
// console.log("color after:", hat.color);


// .............................
// .............................


// ПОЯСНЕННЯ-31     Метод "bind" і callback :

// const counter = {

//     value: 0,

//     increment(num) {
// console.log("increment:", this.value);
// this.value += num;
//     }, 

//     decrement(num) {
// console.log("decrement:", this.value);
// this.value -= num;
//     }, 
// }

// function foo(number, callback) {
// callback(number);
// }

// foo(10, counter.increment.bind(counter));
// console.log(counter.value);

// foo(5, counter.decrement.bind(counter));
// console.log(counter.value);


// .............................
// .............................


// ПОЯСНЕННЯ-32   Прототип об'єкта (додаткове сховище певних властивостей і методів)


// const animal = {
// legs: 4,
// }

// const dog = Object.create(animal);

// dog.color = "red";
// dog.name = "Reks";
// console.log(dog);
// console.log(dog.legs);


// // Для того щоб подивитись чи є властивісь "color" для oб'єкта "dog" власною чи це властивість прототипа, застосовуємо метод "hasOwnProperty()" :

// // console.log(dog.hasOwnProperty("color"));  //  true
// // console.log(dog.hasOwnProperty("legs"));   //  false


// // Якщо використати цикл по об'єкту "for...in" - ми отримаємо і власні властивості і не власні :


// // Доступ до властивостей через квадратні дужки — це синтаксис objectName["key"] (4. Mодуль 4. Об'єкти / Об'єкти) :
// // for(const key in dog) {
// // console.log(dog[key]);      //   red , Reks,  4
// // }

// // для того щоб отримати тільки власні властивості використаємо метод "hasOwnProperty()" :
// // for(const key in dog) {
// // if(dog.hasOwnProperty(key)) {
// // console.log(dog[key]);           //   red , Reks
// // }
// // }

// // На відміну від "for...in" (який отримує власні і не власні властивості) метод Object.values() отримує ТІЛЬКИ  ВЛАСНІ властивості :

// const keys = Object.values(dog);
// console.log(keys);   //     ['red', 'Reks']


// .............................
// .............................


// ПОЯСНЕННЯ-33    Прототип об'єкта :

// const objC = {
// c: "objC"
// }

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA);      //   {a: 'objA'}
// console.log(objB);      //   {b: 'objB'}
// console.log(objC);      //   {c: 'objC'}

// console.log(objC.c);    //   objC
// console.log(objC.d);    //   undefined


// .............................
// .............................


// ПОЯСНЕННЯ-34    Задача-1 (Урок-частина 1   Модуль 6. ООП. Класи  2:22:00) : 
// // 
// Написати програмне забеспечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю. 
// Створити об'єкт "cruiseControl" з методами "accelerate" та "decrease", властивостями "speed" та "brand".

// const cruiseControl = {

// speed: 0,
// brand: "Peugeot",

// accelerate() {      
//     this.speed += 10;
//     console.log(`Автомобіль ${this.brand} прискорюється !!!  Швидкість: ${this.speed} км/год`); 
// },

// decrease() {    
//     if(this.speed <= 0) {
//         console.log(`Авто ЗУПИНИЛОСЬ !`);
//         return;
//     }
//     this.speed -= 10;
//    console.log(`Автомобіль ${this.brand} пригальмовує !!!  Швидкість: ${this.speed} км/год`); 
// }
// }

// cruiseControl.accelerate();
// console.log("");
// cruiseControl.decrease();
// console.log("");
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// console.log("");
// cruiseControl.decrease();
// console.log("");
// cruiseControl.decrease();
// console.log("");
// cruiseControl.decrease();



// .............................
// .............................


// ПОЯСНЕННЯ-35    Задача-2 (Урок-частина 1   Модуль 6. ООП. Класи  2:30:00) :

// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію "speedSensor" яка буде приймати 1 параметр (максимально дозволену швидкість "maxSpeed")
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як "this" :

// Варіант  (МІЙ) :

// const maxSpeed = 60;

// const bmw = {
//     brand: "BMW",
//     speed: 50
// };

// const peugeot = {
//     brand: "Peugeot",
//     speed: 70
// };

// function speedSensor(maxSpeed) {
// this.speed <= maxSpeed ? console.log("Швидкість у межах допустимого") : console.log("УВАГА ! Ви перевищили максимально допустиму швидкість!");
// }

// speedSensor.call(bmw, maxSpeed);
// speedSensor.call(peugeot, maxSpeed);

// ......


// Варіант  (Ментор) :

// const maxSpeed = 60;

// const bmw = {
//     brand: "BMW",
//     speed: 50
// };

// const peugeot = {
//     brand: "Peugeot",
//     speed: 70
// };

// function speedSensor(maxSpeed) {
// if(this.speed <= maxSpeed) {
// return console.log(`Автомобіль ${this.brand} рухається з безпечною швикістю`);
// }
// return console.log(`Автомобіль ${this.brand} перевищує максимальну швидкість !!!`);
// }

// // Метод call :
// speedSensor.call(bmw, maxSpeed);           //    Автомобіль BMW рухається з безпечною швикістю

// // Метод apply :
// speedSensor.apply(peugeot, [maxSpeed]);    //    Автомобіль Peugeot перевищує максимальну швидкість !!!

// console.log("");

// // Метод bind :
// const sensorBmw = speedSensor.bind(bmw, maxSpeed);
// sensorBmw();

// const sensorPeugeot = speedSensor.bind(peugeot, maxSpeed);
// sensorPeugeot();



// .............................
// .............................


// Класи :

// Оголошення класу

// Конструктор класу

// Методи класу

// Прототип екземпляру

// Приватні властивості

// Геттери і сеттери

// Статичні властивості



// .............................
// .............................


// ПОЯСНЕННЯ-36   КЛАСИ:  Оголошення класу. Конструктор класу.

// class Car {
//     constructor(params) {
//         this.brand = params.brand
//         this.model = params.model
//         this.price = params.price
//     }
// }

// const bmw = new Car({brand: "bmw", model: "X5", price: 50000})
// console.log("bmw:", bmw);

// console.log("");

// const peugeot = new Car({brand: "peugeot", model: "301", price: 70000})
// console.log("peugeot:", peugeot);


// .............................
// .............................


// ПОЯСНЕННЯ-37   КЛАСИ:  Методи класу.  Прототип екземпляру (471 : ПОЯСНЕННЯ-13   Методи класу.). (42:00:00).


// class Car {
//     constructor(params) {
//         this.brand = params.brand
//         this.model = params.model
//         this.price = params.price
//     }

// getModel() {
//     return this.model;
// }

// changeModel(newModel) {
// this.model = newModel;
// }
// }


// // МЕТОДИ класа при "console.log("bmw:", bmw)" ВІДСУТНІ !!!  Всі вони знаходяться в ПРОТОТИПІ (в class Car) !!!

// const bmw = new Car({brand: "bmw", model: "X5", price: 50000})
// console.log("bmw:", bmw);   //    bmw: Car {brand: 'bmw', model: 'X5', price: 50000}

// console.log("");

// const peugeot = new Car({brand: "peugeot", model: "301", price: 70000})
// console.log("peugeot:", peugeot);     //    peugeot: Car {brand: 'peugeot', model: '301', price: 70000}

// console.log("");

// console.log(bmw.getModel());
// console.log(peugeot.getModel());

// console.log("");

// bmw.changeModel("X7");
// peugeot.changeModel("3008");

// console.log(bmw.getModel());
// console.log(peugeot.getModel());


// .............................
// .............................


// ПОЯСНЕННЯ-38   КЛАСИ:  Приватні властивості (513 : ПОЯСНЕННЯ-14  Приватні властивості). (48:00:00).

// Отримати доступ до ПРИВАТНОЇ властивості можно :

// ВАРІАНТ-1 :  через метод - в середині класу. 
// В тілі класу можно без проблем взаємодіяти з приватною властивостю.

// class Car {

// #price;

//     constructor(params) {
//         this.brand = params.brand       
//         this.#price = params.price
//     }

// getPrice() {
// return this.#price;
// }

// changePrice(newPrice) {
// this.#price = newPrice;
// }
// }

// const peugeot = new Car({brand: "peugeot", price: 100000});

// console.log(peugeot);
// console.log(peugeot.price);
// // console.log(peugeot.#price);
// console.log(peugeot.getPrice());

// peugeot.changePrice(120000);
// console.log(peugeot.getPrice());


// .............................
// .............................


// ПОЯСНЕННЯ-38-1   КЛАСИ:  Приватні властивості. Геттери і сеттери (638 : ПОЯСНЕННЯ-16  Геттери і сеттери), (54:00:00).

// Отримати доступ до ПРИВАТНОЇ властивості можно :
// ВАРІАНТ-2 :  через спеціальний синтаксис оголошення методів - геттери і сеттери. 

// Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу.
// Геттери і сеттери доречно використовувати для простих типів даних (рядок, число, буль).



// class Car {

// #price;

//     constructor(params) {
//         this.brand = params.brand       
//         this.#price = params.price
//     }

// // Геттер price :
// get price() {
// return this.#price;
// }

// // Сеттер price :
// set price(newPrice) {
// this.#price = newPrice;
// }
// }

// const peugeot = new Car({brand: "peugeot", price: 100000});

// console.log(peugeot);

// // Працюємо з геттерами і сеттерами, як з звичайними властивостіми (без фігурних дужок) :
// // Геттер price :
// console.log(peugeot.price);

// // Сеттер price :
// peugeot.price = 120000;

// // Геттер price :
// console.log(peugeot.price);

// console.log(peugeot);


// .............................
// .............................


// ПОЯСНЕННЯ-38-2   КЛАСИ: Геттери і сеттери (575 : // ВАРІАНТ-1  методи changeEmail() і #validateEmail()), (1:01:00).

// Отримати доступ до ПРИВАТНОЇ властивості можно :
// ВАРІАНТ-4 :  через  ВАЛІДАЦІЮ :


// class Car {

// #price;

//     constructor(params) {
//         this.brand = params.brand       
//         this.#price = params.price
//     }

// // Геттер price :
// get price() {
// return this.#price;
// }

// // Сеттер price :
// set price(newPrice) {
// typeof newPrice === "number" ? this.#price = newPrice : console.log(`${newPrice} - не число !!!`);
// }
// }

// const peugeot = new Car({brand: "peugeot", price: 100000});

// console.log(peugeot);

// // Працюємо з геттерами і сеттерами, як з звичайними властивостіми (без фігурних дужок) :
// // Геттер price :
// console.log(peugeot.price);

// // Сеттер price :
// peugeot.price = "gold";     //   gold - не число !!!
// peugeot.price = "120000";   //   120000 - не число !!!
// peugeot.price = 120000;     

// // Геттер price :
// console.log(peugeot.price);

// console.log(peugeot);



// .............................
// .............................



// ПОЯСНЕННЯ-38-3   КЛАСИ: Створемо функцію, яка буде перевіряти вхідні дані
// (575 :  ВАРІАНТ-1  методи changeEmail() і #validateEmail()), (1:06:00).

// class Car {

// #price;

//     constructor(params) {
//         this.brand = params.brand       
//         this.#price = params.price
//     }

// // Геттер price :
// get price() {
// return this.#price;
// }

// // Сеттер price :
// set price(newPrice) {
// this.#checkType(newPrice, "number") ? this.#price = newPrice : console.log(`${newPrice} - не число !!!`);
// }

// // (554 :  ПОЯСНЕННЯ-15  Приватні методи). 
// // Якщо тип вхідних даних не дорівнює вхідному типу (типу "type", який ми отримали в нашу функцію як параметр) - повернемо false, в іншому випадку true :
// #checkType(data, type) {
// if(typeof data === type) {
    
//     return true;
// }
// return false;
// }
// }

// const peugeot = new Car({brand: "peugeot", price: "100000"});

// console.log(peugeot);

// peugeot.price = "120000";  //  120000 - не число !!!
// peugeot.price = 120000;
// console.log(peugeot.price);

// console.log(peugeot);



// .............................
// .............................


// ПОЯСНЕННЯ-39   КЛАСИ: Статичні властивості  (692 :  ПОЯСНЕННЯ-17   Статичні властивості), (1:12:00).
// Наприклад, мені, як виробнику, цікаво знати: скільки автомобілів я ЗРОБИВ, або скільки автомобілів я ПРОДАВ

// class Car {

// static quantity = 0;
// static increment() {
    
// //     Варіант 1: this.quantity. Найкраща практика — використовувати this.
// //     Плюси:
// // Коротше і чистіше;
// // Працює в статичних методах (this вказує на клас);
// // Краще для наслідування.

// // Мінуси:
// // Може заплутати новачків (this в статичному методі).

//     this.quantity += 1;
//     // Car.quantity += 1;
// }

//     constructor(params) {
//         this.brand = params.brand       
//         this.price = params.price
//     }

// }


// Car.increment();
// Car.increment();

// console.log(Car.quantity);  //  2



// .............................
// .............................


// ПОЯСНЕННЯ-39-1   КЛАСИ: Статичні властивості  (692 :  ПОЯСНЕННЯ-17   Статичні властивості), (1:16:00).
// Для того щоб не збілшувати вручну "Car.increment()" кількість проданих авто "quantity", можна скористуватись "constructor" при створенні нового об'єкту (тобто кожен новий створений об'єкт - це нове авто) :

// class Car {

// static quantity = 0;

//     constructor(params) {
//         this.brand = params.brand;     
//         this.price = params.price;
//         Car.quantity += 1
//     }

// }

// const peugeot = new Car({brand: "peugeot", price: 100000});   //  + 1
// const bmw = new Car({brand: "bmw", price: 100000});           //  1 + 1 = 2
// const opel = new Car({brand: "opel", price: 100000});         //  2 + 1 = 3


// console.log(Car.quantity);  //  3




// .............................
// .............................


// ПОЯСНЕННЯ-40   КЛАСИ: Наслідування класів  (813 :  ПОЯСНЕННЯ-19   Наслідування класів  (extends)), (1:35:00).
// (858 :  ПОЯСНЕННЯ-20   Конструктор дочірнього класу).
// У конструкторі дочірнього класу необхідно викликати спеціальну функцію "super(args)" — це псевдонім конструктора батьківського класу.
// Правило просте:
// Якщо у дочірньому класі НЕмає "constructor()", то "super()" викликається автоматично.
// Є "constructor()" у дочірньому класі - "super()" МАЄ БУТИ викликаний вручну, навіть якщо ви не використовуєте "this".

// "extends" дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).


// class Hero {
//     constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//     }

//     gainXp(amount) {
//     console.log(`${this.name} received ${amount} xp`);
//     this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     constructor(params) {
//     super(params);
//     this.weapon = params.weapon;
//     }

//     attack() {
//         console.log(`${this.name} attack with ${this.weapon}`);
//     }
// }

// const arthas = new Warrior({ name: "Arthas", xp: 1000, weapon: "sword" });

// arthas.attack();      //   Arthas attack with sword
// arthas.gainXp(200);   //   Arthas received 200 xp

// console.log(arthas);  //   Object { name: "Arthas", xp: 1200, weapon: "sword" }

// console.log("");


// // Створимо ще один клас  "Mage" :
// class Mage extends Hero {
// constructor(params) {
//    super(params);
//    this.spells = params.spells;
// }
// cast() {
//     console.log(`${this.name} is casting a spell`);
// }
// }

// const khadgar = new Mage({ name: "Khadgar", xp: 500, spells: ["fireball"]});

// khadgar.cast();       //   Khadgar is casting a spell
// khadgar.gainXp(300);   //  Khadgar received 300 xp

// console.log(khadgar);  //  Object { name: "Khadgar", xp: 800, spells: ["fireball"] }


// .............................
// .............................


// ПОЯСНЕННЯ-40-1   КЛАСИ: приклад з ДЕСТРУКТУРИЗАЦІЄЮ, (2:35:00).


// class Hero {
//     constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//     }

//     gainXp(amount) {
//     console.log(`${this.name} received ${amount} xp`);
//     this.xp += amount;
//     }
// }


// // Якщо в конструкторі класу об'єкт "params", ми можемо його ДЕСТРУКТУРУВАТИ - замість "params" написати { name, xp, weapon }. 
// // Крім того можна написати constructor({ weapon, ...rest }), тобто з нашого об'єкта ми дістанемо одне значення "weapon", а решту 2-а значення покладемо до об'єкту

// class Warrior extends Hero {
//     // constructor({name, xp, weapon}) {
//     // super(params);

//     constructor({ weapon, ...rest }) {
//         console.log(rest);        //    {name: 'Arthas', xp: 1000}        
//     super(rest);

//     this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} attack with ${this.weapon}`);
//     }
// }

//  const arthas = new Warrior({ name: "Arthas", xp: 1000, weapon: "sword" });



// .............................
// .............................


// ПОЯСНЕННЯ-41   КЛАСИ: (1:58:00).

// Задача-1     Напиши клас "Blogger" для створення об'єкта блогера з наступними властивостями:
// - email - пошта, рядок
// - age - вік, число
// - numberOfPosts - кількість постів, число
// - topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань "params" з однойменними властивостями.

// - Додай метод getInfo(), який повертає рядок:
//   User ${email} is ${age} years old and has ${numPosts} posts.

// - Додай метод updatePostCount(value), який у параметрі "value" приймає кількість постів, які потрібно додати користувачеві.


// class Blogger {

// constructor(params) {
//    this.email = params.email;
//    this.age = params.age;
//    this.numberOfPosts = params.numberOfPosts;
//    this.topics = params.topics;   
// }

// getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
// }

// updatePostCount(value) {
//     this.numberOfPosts += value;
// }
// }


// // 1) створюємо першого блогера - petya :
// const petya = new Blogger({email: "astrall@jk.jh", age: 25, numberOfPosts: 4, topics: ["color", "tema", "rating", "resume"]});

// console.log(petya);  //   { email: "astrall@jk.jh", age: 25, numberOfPosts: 4, topics: ["color", "tema", "rating", "resume"] }

// console.log(petya.getInfo());  //  User astrall@jk.jh is 25 years old and has 4 posts.

// petya.updatePostCount(6);

// console.log(petya);  //   { email: "astrall@jk.jh", age: 25, numberOfPosts: 10, topics: ["color", "tema", "rating", "resume"] }
// console.log(petya.getInfo());  //  User astrall@jk.jh is 25 years old and has 10 posts.

// console.log("");


// // 2) створюємо другого блогера - ivan :
// const ivan = new Blogger({email: "ivanD@jk.jh", age: 18, numberOfPosts: 5, topics: ["drink", "travel", "weather"]});

// console.log(ivan);  //   { email: "ivanD@jk.jh", age: 18, numberOfPosts: 5, topics: ["drink", "travel", "weather"] }

// console.log(ivan.getInfo());  //  User ivanD@jk.jh is 18 years old and has 5 posts.

// ivan.updatePostCount(6);

// console.log(ivan);  //   { email: "ivanD@jk.jh", age: 18, numberOfPosts: 11, topics: ["color", "tema", "rating", "resume"] }
// console.log(ivan.getInfo());  //  User ivanD@jk.jh is 18 years old and has 11 posts.


// .............................
// .............................


// ПОЯСНЕННЯ-42   КЛАСИ: (2:07:00).

// Задача-2     Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких зроблено через геттер та сеттер login та email.


// class User {

//     #login;
//     #email;

// constructor(params) {
// this.#login = params.login;
// this.#email = params.email;
// }

// get login() {
//     return this.#login;
// }

// set login(newLogin) {
//     this.#login = newLogin;
// }

// get email() {
//     return this.#email;
// }

// set email(newEmail) {
//     this.#email = newEmail;
// }
// }

// const admin = new User({login: "astrall", email: "astrall@kl.gh"});
// console.log(admin.login);
// console.log(admin.email);

// admin.login = "astra777";
// admin.email = "astra777@kl.gh";
// console.log("");

// console.log(admin.login);
// console.log(admin.email);




// .............................
// .............................



// ДОМАШНЄ ЗАВДАННЯ № 6 

// .............................
// .............................

// ЗАДАЧА DZ-1
// Задача 1. Акаунт користувача

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return discount;
//   },
//   setDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },  
// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Залиш цей код для перевірки ментором.


// На що буде звертати увагу ментор при перевірці:

// Оголошена змінна customer
// Значення змінної customer — це об'єкт із властивостями та методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" у масив значень властивості orders та оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this

//  ................................

// РІШЕННЯ :

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },  
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// .............................
// .............................

// ЗАДАЧА DZ-2
// Задача 2. Склад

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.


// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.



// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Залиш цей код для перевірки ментором.


// На що буде звертати увагу ментор при перевірці:

// Оголошений клас Storage
// У класі Storage оголошений метод getItems
// У класі Storage оголошений метод addItem
// У класі Storage оголошений метод removeItem
// Властивість items у класі Storage оголошена приватною
// Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає
// Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає
// Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає
// У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage — це об'єкт
// У об’єкта storage немає публічної властивості items
// Перший виклик storage.getItems() одразу після ініціалізації екземпляра повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger") повертає масив ["Nanitoids", "Antigravitator", "Droid"]
// Четвертий виклик storage.getItems() після виклику storage.removeItem("Scaner") повертає масив ["Nanitoids", "Antigravitator", "Droid"]


//  ................................

// РІШЕННЯ :

// class Storage {
// #items;

// constructor(items) {
// this.#items = items;
// }

// getItems() {
// return this.#items;
// }

// addItem(newItem) {
// this.#items.push(newItem);
// }

// removeItem(itemToRemove) {
//  this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




// .............................
// .............................

// ЗАДАЧА DZ-3
// Задача 3. Конструктор рядків