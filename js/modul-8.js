'use strict';

//...............

// Що робити, коли Git блокує операцію "git pull", щоб не втратити незбережені (незакомічені) локальні зміни.
// "Please commit your changes or stash them before you merge.
// Aborting"  //    "Будь ласка, зафіксуйте зміни або збережіть їх перед об'єднанням.
// Переривання"

// git stash
// git pull
// git stash pop

//...............


// ПОЯСНЕННЯ-1   Делегування подій.
//               ЦІЛЬОВИЙ ЕЛЕМЕНТ ("event.target") :

// Елемент, на якому відбулася подія, називається  ЦІЛЬОВИМ, або вихідним. Це завжди найглибший елемент, з якого починається спливання. Він доступний як "event.target".

// "event.target" — це посилання на вихідний елемент, на якому відбулася подія. У процесі спливання (bubbling) подія рухається від найглибшого елемента вгору до батьківських елементів. ПОСИЛАННЯ на вихідний елемент (event.target) — НЕЗМІННЕ. Незмінна — саме властивість event.target (посилання на вихідний елемент) - це завжди вихідний (і найглибший) елемент, на якому був клік;

// "event.currentTarget" — це посилання на поточний елемент, до якого прив'язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.


// Коротке правило (ШПАРГАЛКА) :
// Якщо вам потрібно...	
// Дізнатися, на чому реально клікнули (навіть на внутрішньому span, img, тексті)	   - використовуємо  "event.target";
// Дізнатися, який елемент має цей обробник (той, на кому викликали addEventListener)  - використовуємо "event.currentTarget";
// У делегуванні подій — дістати самого батька-слухача	                               - використовуємо "event.currentTarget";
// Перевірити, чи клікнули прямо на батьку, а не на дитині           -    використовуємо "event.target === event.currentTarget";



// ..........

// ПРИКЛАД-1 для розуміння :

// html
// <div id="parent">
//     <button id="child">Клікни мене</button>
// </div>

// javascript
// document.querySelector("#parent").addEventListener("click", function(event) {
//     console.log("target:", event.target);        // завжди <button> (вихідний елемент)
//     console.log("currentTarget:", event.currentTarget); // <div> (поточний елемент)
//     console.log("target === currentTarget:", event.target === event.currentTarget); // false
// });

// document.getElementById("child").addEventListener("click", function(event) {
//     console.log("target:", event.target);        // <button>
//     console.log("currentTarget:", event.currentTarget); // <button>
//     console.log("target === currentTarget:", event.target === event.currentTarget); // true
// });

// ..........

// ПРИКЛАД-2 для розуміння :

// // html
// <div id="parent">
//   Parent
//   <div id="child">
//     Child
//     <div id="descendant">Descendant</div>
//   </div>
// </div>


// // javascript
// parent.addEventListener("click", (event) => {
//   console.log("Parent - currentTarget:", event.currentTarget.id);
//   console.log("Parent - target:", event.target.id);
// });

// child.addEventListener("click", (event) => {
//   console.log("Child - currentTarget:", event.currentTarget.id);
//   console.log("Child - target:", event.target.id);
// });

// descendant.addEventListener("click", (event) => {
//   console.log("Descendant - currentTarget:", event.currentTarget.id);
//   console.log("Descendant - target:", event.target.id);
// });


// При кліку на <div id="descendant">Descendant</div> ми побачимо :

// Descendant - currentTarget: descendant
// Descendant - target: descendant
// Child - currentTarget: child
// Child - target: descendant
// Parent - currentTarget: parent
// Parent - target: descendant


// ВИСНОВОК  -  У нас три різних "event.currentTarget" :

// event.target — завжди один і той самий (#descendant);

// event.currentTarget — змінюється залежно від того, який обробник зараз спрацьовує.



// .............................
// .............................


// ПОЯСНЕННЯ-2   Делегування подій.
//               ПРИПИНЕННЯ СПЛИВАННЯ :

// Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об'єкта події (event):

// event.stopPropagation(),
// event.stopImmediatePropagation(),

// У чому ж різниця у використанні цих методів?

// event.stopPropagation()   -  Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію. Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.


// event.stopImmediatePropagation()  -  Зупиняє "спливання" події так само, як event.stopPropagation().
// Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.



// const parentElement = document.querySelector(".stopEvent");

// const elementBtnTest = document.querySelector(".stopEvent .myElement");


// // ВАРІАНТ-1  (НОРМАЛЬНЕ "СПЛИВАННЯ" події в DOM-дереві) :

// // Перший обробник
// elementBtnTest.addEventListener("click", (event) => {
//   console.log("Перший обробник"); 
// });

// // Другий обробник (на ТОМУ САМОМУ елементі)
// elementBtnTest.addEventListener("click", (event) => {
//   console.log("Другий обробник");
// });

// // Батьківський елемент
// parentElement.addEventListener("click", () => {
//   console.log("Батьківський обробник");
// });

// При натисканні на кнопку "ТЕСТ СПЛИВАННЯ" в КОНСОЛЬ буде виведено :

// // Перший обробник     
// // Другий обробник
// // Батьківський обробник


// .........

// // ВАРІАНТ-2  (використовуємо метод "event.stopPropagation()" - ЗУПИНЯЄМО "СПЛИВАННЯ" події в DOM-дереві) :

// // Перший обробник
// elementBtnTest.addEventListener("click", (event) => {
//   console.log("Перший обробник");  
//   event.stopPropagation();               //   ЗУПИНЯЄМО "СПЛИВАННЯ" події в DOM-дереві
// });

// // Другий обробник (на ТОМУ САМОМУ елементі)
// elementBtnTest.addEventListener("click", (event) => {
//   console.log("Другий обробник");
// });

// // Батьківський елемент
// parentElement.addEventListener("click", () => {
//   console.log("Батьківський обробник");
// });

// // При натисканні на кнопку "ТЕСТ СПЛИВАННЯ" в КОНСОЛЬ буде виведено :

// // Перший обробник     
// // Другий обробник


// .........

// // ВАРІАНТ-3  (використовуємо метод "event.stopImmediatePropagation()" - ЗУПИНЯЄМО "СПЛИВАННЯ" події в DOM-дереві, а також зупиняє виконання всіх ІНШИХ ОБРОБНИКІВ подій, які слухають цю ж подію на даному елементі "elementBtnTest") :

// // Перший обробник
// elementBtnTest.addEventListener("click", (event) => {
//   console.log("Перший обробник");  
//   event.stopImmediatePropagation();      //   ЗУПИНЯЄМО "СПЛИВАННЯ" події в DOM-дереві і ІНШИХ ОБРОБНИКІВ подій елемента "elementBtnTest"
// });

// // Другий обробник (на ТОМУ САМОМУ елементі)
// elementBtnTest.addEventListener("click", (event) => {
//   console.log("Другий обробник");
// });

// // Батьківський елемент
// parentElement.addEventListener("click", () => {
//   console.log("Батьківський обробник");
// });

// // При натисканні на кнопку "ТЕСТ СПЛИВАННЯ" в КОНСОЛЬ буде виведено :

// // Перший обробник     


// .............................
// .............................


// ПОЯСНЕННЯ-3   Делегування подій.
//               ДЕЛЕГУВАННЯ ПОДІЙ :

// СПЛИВАННЯ дозволяє реалізувати один із найкорисніших прийомів — ДЕЛЕГУВАННЯ ПОДІЙ.
// Уявімо, що є група елементів. Їх події потрібно обробляти однаково. Для цього треба додати обробник до кожного елемента. Але це не зручно.
// ДЕЛЕГУВАННЯ ПОДІЙ (event delegation) полягає в додаванні одного обробника на спільного предка цих елементів.

// Розглянемо делегування на прикладі:
// створюємо елемент <div>,
// додаємо до нього будь-яку кількість кнопок, наприклад, 10,
// реєструємо на кожній кнопці слухача події кліку з обробником handleButtonClick.
// Проблема в тому, що в нас є 10 слухачів подій. Усі вони вказують на один і той самий обробник слухача, але слухачів 10.

// Завдяки тому, що ПОДІЇ СПЛИВАЮТЬ, ми можемо відловити їх на СПІЛЬНОМУ ПРЕДКУ — елементі <div>.
// Тепер є тільки один слухач події кліку з обробником handleButtonClick і браузеру не потрібно зберігати в пам'яті 100 різних слухачів.

// Отже, делегування реалізується у три прості кроки.
// 1. Визначити спільного предка групи елементів для відстеження подій.
// 2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
// 3. В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.

// Такий підхід спрощує ініціалізацію слухачів однотипних елементів. Можна додавати, видаляти або змінювати елементи. При цьому не потрібно вручну додавати або видаляти обробники подій на кожному з них.


// .........

// ПРИКЛАД для розуміння, в якому цільовий елемент кліка виводиться в консоль.
// Спробуй клікнути по кнопках, а також безпосередньо між ними, по div.box, і подивись результат.

// <div class="oneEvent">
//   <p>ОДИН ОБРОБНИК на 10 подій</p>
//   <button type="button" class="test-event">Кнопка 1</button>
//   <button type="button" class="test-event">Кнопка 2</button>
//   <button type="button" class="test-event">Кнопка 3</button>
//   <button type="button" class="test-event">Кнопка 4</button>
//   <button type="button" class="test-event">Кнопка 5</button>
//   <button type="button" class="test-event">Кнопка 6</button>
//   <button type="button" class="test-event">Кнопка 7</button>
//   <button type="button" class="test-event">Кнопка 8</button>
//   <button type="button" class="test-event">Кнопка 9</button>
//   <button type="button" class="test-event">Кнопка 10</button>  
// </div>


// const boxGlobal = document.querySelector(".oneEvent");

// boxGlobal.addEventListener("click", function (event) {
// 	console.log(event.target);                              // Елемент (тег <button>), на якому відбулась подія click :  
//                                                             // "<button type="button" class="test-event">Кнопка *****</button>"
// });

// Якщо клікнути на заголовку :   в консоль виведе  "<p>ОДИН ОБРОБНИК на 10 подій</p>"

// Якщо клікнути між кнопками  (тобто в середині  <div class="oneEvent">):   в консоль виведе  <div class="oneEvent">...</div>



// .............................
// .............................


// ПОЯСНЕННЯ-4   Делегування подій.
//               ПЕРЕВІРКА ЦІЛЬОВОГО ЕЛЕМЕНТА події :


// ПРИКЛАД для розуміння  - створити палітру кольорів. Палітра дає можливість вибрати колір по кліку і відображає обраний колір в заголовку <p>.
// Кожен клік на елементі палітри — це подія, яка змінює колір і вміст заголовка. Елементів дуже багато. Замість призначення обробника кожному елементу палітри, повісимо один слухач на загального предка div.color-palette.

// // <p class="output">Selected color: -</p>
// // <div class="color-palette"></div>

// const output = document.querySelector(".output-palette");
// const colorPalette = document.querySelector(".color-palette");

// colorPalette.addEventListener("click", selectColor);

// // Обов'язково перевіряємо цільовий елемент події click. Це точно має бути кнопка, в іншому разі ми випадково можемо обробити клік, коли користувач клікне між кнопками, що може викликати помилку. Для перевірки типу елемента використовуємо властивість "nodeName".
// function selectColor(event) {

//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // .........

// // ПРИМІТКА :  "event.target.nodeName" - це властивість, яка повертає назву тегу HTML елемента, на якому стався клік.
// // Простими словами:
// // Це спосіб дізнатися, на якому саме елементі клікнув користувач: на кнопці, на div, на span тощо.

// // Значення nodeName для різних елементів:
// // html
// // <button>Кнопка</button>      → nodeName = "BUTTON"
// // <div>Блок</div>              → nodeName = "DIV"
// // <p>Параграф</p>              → nodeName = "P"
// // <span>Текст</span>           → nodeName = "SPAN"
// // <a href="#">Посилання</a>    → nodeName = "A"
// // <img src="photo.jpg">        → nodeName = "IMG"
// // <ul><li>Список</li></ul>     → nodeName = "LI"

// // .........

// // Функція "createPaletteItems()" динамічно створює 60 кольорових кнопок і додає КНОПКИ ПАЛІТРИ КОЛЬОРІВ на сторінку :
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");        //  Створюємо в пам'яті нову кнопку (поки не на сторінці).
//     item.type = "button";                                 // тип кнопки
//     item.dataset.color = color;                           // зберігає колір в data-color
//     item.style.backgroundColor = color;                   // фарбує кнопку в цей колір
//     item.classList.add("item");                           // додає CSS клас "item"

//     items.push(item);                                     // Додаємо кнопку в масив
//   }
//   colorPalette.append(...items);      //   "...items" - розгортаємо масив і додаємо всі 60 кнопок всередину colorPalette  ("<div class="color-palette"></div>")
// }

// // Функція getRandomHexColor() - генерує випадковий HEX колір (шістнадцятковий формат HEX). HEX колір - це спосіб запису кольору через # і 6 символів (0-9, A-F). Наприклад #FF0000 - червоний, #00FF00 - зелений... :
// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }



// .............................
// .............................


// ПОЯСНЕННЯ-4   Підключення бібліотеки.
//               Підключимо до проєкту бібліотеку "Lodash" через CDN :

// Підключення скрипта бібліотеки має бути до підключення твого основного файлу скриптів.
// Не забудь додати тегу script бібліотеки атрибут async. Це потрібно для того, щоб файл бібліотеки завантажувався якомога швидше.


// ПІДКЛЮЧЕННЯ бібліотеки  "Lodash" через CDN   (дивись файл "index.html" рядок 10 ) :
//  <!-- Додаємо посилання на скрипт бібліотеки Lodash  -->
//     <script src="https://cdn.jsdelivr.net/npm/lodash@4.18.1/lodash.min.js" defer></script>

//     <script src="./js/lesson-1.js" defer></script>

// defer - це атрибут, який змінює поведінку завантаження та виконання JavaScript скриптів.
// defer означає "відкласти виконання" - скрипт завантажується в фоні, а виконується ТІЛЬКИ ПІСЛЯ повного завантаження HTML.

// Що робить defer:
// 1. Не блокує HTML.
// 2. Скрипт завантажується паралельно з HTML, не зупиняючи сторінку.
// 3. Скрипт запускається ТІЛЬКИ коли весь HTML завантажений і DOM побудований.
// 4. Зберігає порядок. Кілька скриптів з defer виконуються в тому порядку, в якому вони написані в HTML.


// При підключенні бібліотек через CDN, до об'єкта window додається ВЛАСТИВІСТЬ, у якій зберігається те, що надає бібліотека. Ім'я цієї властивості унікальне для бібліотеки та описане в її документації.
// Для Lodash — це символ нижнього підкреслення "_".

// console.log(_); // Весь об'єкт бібліотеки Lodash

// ПРИКЛАД (example) :
// Для перевірки використовуємо методи "sum()" і "shuffle()" :

// sum — він обчислює суму значень у масиві;
// shuffle — створює масив перетасованих значень.


// console.log(_.sum([4, 2, 8, 6]));       // 20
// console.log(_.sum([5, 10]));            // 15

// console.log(_.shuffle([1, 2, 3, 4]));   // [4, 1, 3, 2] або якісь іншій порядок
// console.log(_.shuffle([1, 2, 3, 4]));   // [3, 2, 1, 4] або якісь іншій порядок



// .............................
// .............................


// ПОЯСНЕННЯ-5   Підключення бібліотеки.
//               Підключимо до проєкту бібліотеку "basicLightbox" :


// ПІДКЛЮЧЕННЯ бібліотеки  "basicLightbox" через CDN   (дивись файл "index.html" рядок 13 ) :

//  <!-- Додаємо посилання на скрипт бібліотеки "basicLightbox"  -->
// <script src="
// https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
// " defer></script>
// <link href="
// https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css
// " rel="stylesheet"></link>


// const instance = basicLightbox.create(`
// 	<h1>Not closable</h1>
// 	<p>It's not possible to close this lightbox with a click.</p>
// `, {
// 	closable: false
// })

// // Наприклад, виклик методу instance.show() покаже модальне вікно, а instance.close() — навпаки його сховає :

// instance.show();    //  ВІДКРИВАЄМО модальне вікно
// instance.close();   //  і відразу ЗАКРИВАЄМО модальне вікно




// .............................
// .............................


// ПОЯСНЕННЯ-6   Деструктуризація.

// ДЕСТРУКТУРИЗАЦІЯ (Destructuring) — це особливий синтаксис, що дозволяє витягти значення зі складних типів даних (об'єктів або масивів) і присвоїти їх локальним змінним. Це зручний спосіб дістати потрібні дані зі складних структур і використовувати їх у коді.
  
// // ПРИКЛАД-1 для ОБ'ЄКТІВ :
//   const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризація ОБ'ЄКТУ (порядок НЕ МАЄ значення!). Деструктуризуємо (const або let). Використовуємо let, якщо хочемо пізніше змінити значення змінної :
// const { title, author, isPublic, rating } = book;

// // Використовуємо
// const accessType = isPublic ? "public" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;


// //...................

// // ПРИКЛАД-2 для МАСИВІВ :

// const genres = ["historical prose", "adventure"];

// // Деструктуризація МАСИВУ (порядок МАЄ значення!)
// const [firstGenre, secondGenre] = genres;

// console.log(firstGenre);  // "historical prose"
// console.log(secondGenre); // "adventure"



// .............................
// .............................


// ПОЯСНЕННЯ-7   Деструктуризація.
//               Деструктуризація неіснуючих властивостей :

// У випадку, якщо ім'я змінної та ім'я властивості збігаються, то відбувається ПРИСВОЄННЯ.
// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно "undefined".


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, bookTitle, coverImage, bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookTitle); // undefined
// console.log(coverImage); // undefined
// console.log(bookRating); // undefined

//...........

// З метою уникнення присвоєння "undefined" під час деструктуризації неіснуючих властивостей, можна задати змінним ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ (використовується тільки коли === "undefined"), використовуючи знак "=". 

// ВАЖЛИВИЙ НЮАНС :
// Значення за замовчуванням застосовується лише тоді, коли властивість в об'єкті :
// - відсутня (undefined);
// - АБО має значення undefined.

// !!! Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям.
// !!! Якщо в об'єкті є властивість із таким ім'ям, перепресвоєння НЕ БУДЕ !!! :

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   author = "Astrallux",
//   coverImage = "https://via.placeholder.com/640/480"
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"


// .............................
// .............................


// ПОЯСНЕННЯ-8   Деструктуризація.
//               Перейменування змінної :

// ПІД ЧАС деструктуризації можна ПЕРЕЙМЕНУВАТИ змінну, в яку розпаковується значення властивості, використовуючи ":" :
// Для цього пишемо :
// - ім'я властивості, з якої хочемо отримати значення ;
// - ставимо двокрапку ":" ;
// - пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38



// .............................
// .............................


// ПОЯСНЕННЯ-9   Деструктуризація.
//               ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ :

// При ПЕРЕЙМЕНУВАННІ ЗМІННОЇ, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ.
// Для цього після нового імені ставимо дорівнює "=" і вказуємо її "значення за замовчуванням".
// Якщо така властивість ІСНУЄ в об'єкті, у змінну буде присвоєно її рідне значення з об'єкта ("значення за замовчуванням" ІГНОРУЄТЬСЯ).
// В такої властивості НЕ ІСНУЄ змінній буде присвоєно "значення за замовчуванням".

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor = "Astrallux", isPublic, rating: bookRating, age: newAge = "25" } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"  -  НЕ ЗМІНИЛО на ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ (така властивість "author" існує в об'єкті)
// console.log(isPublic); // true
// console.log(bookRating); // 8.38
// console.log(newAge);     //  25   -   ЗМІНИЛО на ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ (такої властивісті "age" НЕ має в об'єкті)



// .............................
// .............................


// ПОЯСНЕННЯ-10   Деструктуризація.
//                Деструктуризація в циклах :

// Під час ітерації по масиву об'єктів циклом "for...of" відбуваються багаторазові звернення до властивостей об'єкта :

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
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }


// // ВАРІАНТ-1  Для того щоб скоротити кількість повторень, можна ДЕСТРУКТУРИЗУВАТИ ВЛАСТИВОСТІ ОБ'ЄКТА в локальні змінні В ТІЛІ ЦИКЛУ :

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// //..............

// // ВАРІАНТ-2  Якщо об'єкт містить небагато властивостей, ДЕСТРУКТУРИЗАЦІЮ деструктуризацію можна виконати безпосередньо В МІСЦІ ОГОЛОШЕННЯ ЗМІННОЇ "book" :

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }



// .............................
// .............................


// ПОЯСНЕННЯ-11   Деструктуризація.
//                Деструктуризація параметрів :

// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дає змогу явно вказати, які поля об'єкта використовуються у функції :

// // 1) З деструктуризацією об'єкта В ТІЛІ ФУНКЦІЇ :

// function printUserInfo(user) {
// const { name, age, hobby } = user     //   деструктуризація об'єкта В ТІЛІ ФУНКЦІЇ
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({ 
// 	name: "Alice", 
// 	age: 25, 
// 	hobby: "dancing" 
// }); 



// // 2) Із деструктуризацією об'єкта В МІСЦІ ОГОЛОШЕННЯ ПАРАМЕТРІВ :

// function printUserInfo({ name, age, hobby }) {     //  деструктуризація об'єкта В МІСЦІ ОГОЛОШЕННЯ ПАРАМЕТРІВ
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({ 
// 	name: "Alice", 
// 	age: 25, 
// 	hobby: "dancing" 
// }); 




// .............................
// .............................


// ПОЯСНЕННЯ-12   Деструктуризація.
//                Патерн "Об'єкт параметрів" :

// Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.
// В результаті виходить дуже неочевидний код у місці її виклику.

// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);


// // Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.
// // Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями :

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
//   // І так далі
// }

// // Таким чином, під час її виклику передаємо один об'єкт з необхідними властивостями :

// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });



// // Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі "book".
// // ЦЕ МОЖНА ЗРОБИТИ

// // 1) в тілі функції :
// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }


// // 2) Або в сигнатурі (підписі) функції — різниці немає :
// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }



// .............................

// ДЕТАЛЬНА ВІДМІННІСТЬ:

// "Патерн «Об'єкт параметрів»" — це ІДЕЯ (підхід, концепція): передавати в функцію один об'єкт замість багатьох параметрів. Це архітектурне рішення про те, ЯК організувати передачу даних.

// "Деструктуризація параметрів" — це ІНСТРУМЕНТ (синтаксис), який дозволяє зручно розпакувати цей об'єкт. Це синтаксична конструкція, яка дозволяє розпакувати об'єкт прямо в параметрах.



// .............................
// .............................


// ПОЯСНЕННЯ-13   Деструктуризація.
//                ГЛИБОКА ДЕСТРУКТУРИЗАЦІЯ :

// Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.

// ПРИКЛАД для розуміння -  об'єкт, що описує користувача соцмережі :

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };


// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи. 
// Для початку напишемо код деструктуризації властивостей об'єкта користувача :

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }



// Тепер додамо глибоку деструктуризацію властивостей об'єкта "stats".
// Для цього в деструктуризації після імені властивості ставимо двокрапку ":" та починаємо деструктуризацію об'єкта для цієї властивості :

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308



// Під час ГЛИБОКОЇ ДЕСТРУКТУРИЗАЦІЇ також можна ЗМІНЮВАТИ імена змінних і ПРИСВОЮВАТИ ЗНАЧЕННЯ за замовчуванням :

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308




// .............................
// .............................


// ПОЯСНЕННЯ-14   ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ.
//                Синтаксис :

// Замість фігурних дужок "{}" використовуються квадратні "[]".
// Змінним, зазначеним у квадратних дужках "[]", будуть послідовно присвоюватися значення елементів масиву.

// Наприклад, є масив чисел. З нього потрібно отримати значення кожної складової кольору в окремих змінних :

// const color = [200, 255, 100];
// const [ red, green, blue ] = color;
// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// Після ключового слова const або let ставимо квадратні дужки, як і у випадку з оголошенням масиву. Всередині дужок, через кому, вказуємо імена змінних, у які будуть поміщені значення відповідних елементів масиву.
// Внаслідок такого запису будуть створені 3-и змінні, і в них будуть поміщені елементи в нумерованому порядку: від 0 і до кінця масиву.



// .............................
// .............................


// ПОЯСНЕННЯ-14   ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ.
//                Значення за замовчуванням :

// Якщо змінних оголошено більше, ніж елементів масиву, їм буде присвоєно "undefined". Щоб запобігти цьому, можна вказувати ЗНАЧЕНЯ ЗА ЗАМОВЧУВАННЯМ. Синтаксис такий самий, як в об'єктах, після імені змінної ставимо "=" і значення за замовчуванням :

// const color = [200, 100, 255];
// const [red, green, blue, alfa = 0.3] = color;

// console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`);  // Виведе: rgba(200, 100, 255, 0.3)



// .............................
// .............................


// ПОЯСНЕННЯ-15   ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ.
//                Часткова деструктуризація :

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву.
// Деструктуризуючи масив, можна розпакувати перші необхідні елементи і присвоїти іншу частину елементів масиву змінній, використовуючи операцію "...rest" :


// const color = [200, 255, 100];

// const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

// // При цьому оригінальний масив не змінюється, у змінній "otherColor" буде новий масив із копіями зібраних значень.

// // З об'єктами, до речі, це теж працює. Можна деструктуризувати певні властивості в окремі змінні, а решту зібрати в новий об'єкт :


// const user = {
// 	name: "Jacob",
// 	age: 32,
// 	email: "j.cob@mail.com",
// 	isOnline: true
// };

// const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// // При цьому оригінальний об'єкт не змінюється, у змінній "otherProps" буде новий об'єкт із копіями зібраних властивостей.



// .............................
// .............................


// ПОЯСНЕННЯ-16   ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ.
//                Пропуск значень :

// // На відміну від іменованих властивостей об'єкта, ЕЛЕМЕНТИ МАСИВУ — це набір індексованих значень. Якщо необхідно деструктуризувати тільки, наприклад, третій елемент, перші два необхідно пропустити.

// // Припустимо, з масиву "color" необхідно взяти тільки останнє значення. Для цього в деструктуризації необхідно відокремити комами елементи, що пропускаються :

// const rgb = [200, 100, 255];
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); // "Blue: 255"

// // На практиці в масивах ця можливість РІДКО ВИКОРИСТОВУЄТЬСЯ, але знати, що так можна робити, зайвим не буде.


// .............................
// .............................


// ПОЯСНЕННЯ-17   ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ.
//                Деструктуризація параметрів :

// Під час передачі масиву у функцію, можна деструктуризувати його елементи.

// // Без деструктуризації :

// function printFruits(fruits) {
//   console.log(fruits[0], fruits[1], fruits[2]);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"


// // Із деструктуризацією в місці оголошення параметрів :

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"


// // В цьому конкретному прикладі дійсно немає великого ефекту. 

// // Коли деструктуризація параметрів ДІЙСНО корисна?

// // 1. Коли масив великий, а потрібні окремі елементи багато разів:

// // Без деструктуризації (багато повторів "fruits[x]").

// // З деструктуризацією — код чистіший і коротший :

// function processUser([id, name, email, age, city, country]) {
//   fetch(`/api/${id}`);
//   logToFile(name, email);
//   sendEmail(email, age);
//   validateAddress(city, country);
// }


// // 2. Коли у функції є значення за замовчуванням :

// function drawChart([width, height, color = "blue"]) {
//   console.log(width, height, color);
// }

// drawChart([400, 300]);    // 400 300 blue
// drawChart([400, 300, "red"]); // 400 300 red


// // 3. Коли потрібні лише перші кілька елементів (пропускаючи решту) :

// function logFirstTwo([first, second]) {
//   console.log(first, second);
//   // третій і всі наступні ігноруються
// }


// .............................
// .............................
// .............................


// ПОЯСНЕННЯ-18   ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ і МАСИВІВ.
//                Переваги деструктуризації :

// 1)  Зручне вилучення значень з об'єктів і масивів: Замість того, щоб щоразу звертатися до полів об'єкта або елементів масиву за їхніми індексами або іменами, можна одразу витягти потрібні значення у змінні;

// 2)  Короткий і читабельний код: Деструктуризація робить код коротшим і зрозумілішим. Замість довгих виразів доступу до полів об'єктів або елементів масиву, можна відразу присвоїти значення змінним зі зрозумілими іменами;

// 3)  Параметри функцій: При передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дозволяє явно вказати, які поля об'єкта використовуються у функції;

// 4)  Робота з функціями, що повертають об'єкти: Якщо функція повертає об'єкт, можна відразу деструктуризувати цей об'єкт, щоб витягти з нього значення.