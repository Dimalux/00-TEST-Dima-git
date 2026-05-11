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

// Елемент, на якому відбулася подія, називається цільовим, або вихідним. Це завжди найглибший елемент, з якого починається спливання. Він доступний як "event.target".

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

// Спливання дозволяє реалізувати один із найкорисніших прийомів — делегування подій.
// Уявімо, що є група елементів. Їх події потрібно обробляти однаково. Для цього треба додати обробник до кожного елемента. Але це не зручно.
// ДЕЛЕГУВАННЯ ПОДІЙ (event delegation) полягає в додаванні одного обробника на спільного предка цих елементів.

// Розглянемо делегування на прикладі:
// створюємо елемент <div>,
// додаємо до нього будь-яку кількість кнопок, наприклад, 10,
// реєструємо на кожній кнопці слухача події кліку з обробником handleButtonClick.
// Проблема в тому, що в нас є 10 слухачів подій. Усі вони вказують на один і той самий обробник слухача, але слухачів 10.

// Завдяки тому, що події спливають, ми можемо відловити їх на спільному предку — елементі <div>.
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
//                                                             // "<button type="button" class="test-event">Кнопка 6</button>"
// });

// Якщо клікнути на заголовку :   в консоль виведе  "<p>ОДИН ОБРОБНИК на 10 подій</p>"

// Якщо клікнути між кнопками  (тобто в середині  <div class="oneEvent">):   в консоль виведе  <div class="oneEvent">...</div>



// .............................
// .............................


// ПОЯСНЕННЯ-4   Делегування подій.
//               ПЕРЕВІРКА ЦІЛЬОВОГО ЕЛЕМЕНТА події :


// ПРИКЛАД для розуміння  - створити палітру кольорів. Палітра дає можливість вибрати колір по кліку і відображає обраний колір в заголовку <p>.
// Кожен клік на елементі палітри — це подія, яка змінює колір і вміст заголовка. Елементів дуже багато. Замість призначення обробника кожному елементу палітри, повісимо один слухач на загального предка div.color-palette.

// <p class="output">Selected color: -</p>
// <div class="color-palette"></div>

const output = document.querySelector(".output-palette");
const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

// Обов'язково перевіряємо цільовий елемент події click. Це точно має бути кнопка, в іншому разі ми випадково можемо обробити клік, коли користувач клікне між кнопками, що може викликати помилку. Для перевірки типу елемента використовуємо властивість "nodeName".
function selectColor(event) {

  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}


// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
