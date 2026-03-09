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


// // ВАРІАНТ-3  один метод метод changeEmail() замість 2-х - ТЕРНАРНИЙ оператор :

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

// І це правильна відповідь! Приватні властивості та приватні методи використовуються, щоб приховати деталі реалізації класу. Це дозволяє ізолювати (ІНКАПСУЛЮВАТИ) внутрішню реалізацію класу від зовнішнього коду й забезпечити контроль доступу до деяких властивостей і методів, щоб гарантувати безпеку та стабільність програми.


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


// ПОЯСНЕННЯ-19   Наслідування класів  extends :
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





