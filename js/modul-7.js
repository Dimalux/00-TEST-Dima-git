'use strict';

// Що таке DOM-дерево?

// DOM (Document Object Model) — це об'єктна модель документа. Коли браузер завантажує HTML-код, він будує DOM-дерево, де кожен тег стає DOM-вузлом (Node). Якщо тег є елементом (наприклад, <div>, <p>), він стає об’єктом типу Element (який успадковується від Node).

// Тобто:
//     Кожен тег у розмітці стає DOM-елементом (об’єктом) у DOM-дереві.

// Що відбувається з атрибутами тега?
// Коли браузер парсить HTML, він:
//     Створює DOM-об’єкт для кожного тега.
//     Деякі атрибути з тега перетворюються на властивості (properties) цього DOM-об’єкта.
// Важливо, що не всі атрибути стають властивостями автоматично.

//...............

// Читаючи певний тег, браузер вже знає, який клас використовувати, він запускає спеціальний внутрішній метод (схожий на конструктор), параметром якого буде об'єкт заздалегідь визначених властивостей, витягнутих з атрибутів тега. Додатково додаються (визначені класом) методи та інші властивості.


// Так, це саме так. Браузер має внутрішню мапу:

// "div"     → HTMLDivElement
// "p"       → HTMLParagraphElement
// "input"   → HTMLInputElement
// "a"       → HTMLAnchorElement
// "img"     → HTMLImageElement
// ... і так для всіх тегів  


//................


// ПРИКЛАД :

// Те, що відбувається, коли браузер бачить <div id="app" class="wrapper">

// 1. Визначити тип елемента
// const ElementClass = getElementClassForTagName("div"); // HTMLDivElement

// // 2. Створити порожній екземпляр
// const element = new ElementClass(); // новий DOM-об'єкт

// // 3. Викликати спеціальний внутрішній метод, який ініціалізує властивості
// //    з атрибутів тега (це не звичайний конструктор у розумінні JS)
// element.initializeFromAttributes({
//     id: "app",
//     class: "wrapper"
// });

// 4. Після цього екземпляр вже має:
//    - element.id === "app"
//    - element.className === "wrapper"
//    - element.tagName === "DIV"
//    - element.innerHTML === ""
//    - element.style (об'єкт з методами)
//    - і всі методи: addEventListener, remove, appendChild, etc.


// .............................
// .............................


// ПОЯСНЕННЯ-1   Доступ до властивостей

// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об`єктів.

// Якщо в HTML (файл index.html) є тег посилання:

// index.html
//   <a class="link" href="https://goit.global">GoIT</a>

//  <h1 class="bag">HELLO Dima!</h1>

// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент, тобто об'єкт, використовуючи querySelector, і звернутися до його властивості href

// JavaScript
// const link = document.querySelector(".bag");
// console.log(link.className);   // bag

//   !!!  У DOM-елементів НЕМАЄ поля class. Це поширена помилка початківців, які думають, що атрибут class у HTML напряму відображається як властивість .class у JavaScript. 
// Як правильно:  ".className" — повертає рядок з усіма класами


//..................

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться :

// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// console.log(image.src); // https://picsum.photos/id/13/640/480
// console.log(image.alt); // River bank

// // У живому прикладі ми працюємо із зображенням і змінюємо значення його атрибутів src і alt, щоб зі скрипта підмінити картинку та її опис.


// .............................

// Приклад з  index.html :

// <p class="item">
// GOOD DAY !
//     </p>


// const texst = document.querySelector(".item");

// texst.style.textTransform = 'lowercase';
// texst.style.fontSize = '34px';
// console.log(texst);


// ..............


// HTML є тег посилання,

// <a class="link" href="https://goit.global">GoIT</a>

// В  DOM цей тег <a></a> буде об'єктом, а його атрибути class і href стануть властивостями.  У JavaScript, коли ми отримуємо посилання на DOM-елемент, його атрибути стають властивостями об`єкта, до яких можна звертатися та змінювати їх.

// Ось приклади роботи з тегом <a>:
// Отримання елемента та доступ до властивостей

// <a class="link" href="https://goit.global">GoIT</a>
// javascript
// // Отримуємо посилання на елемент
// const link = document.querySelector('.link');

// // Читаємо значення властивостей
// console.log(link.href);     // "https://goit.global"
// console.log(link.className); // "link" (class перетворюється на className)  !!!
// console.log(link.textContent); // "GoIT"

// // Змінюємо властивості
// link.href = "https://google.com";
// link.className = "new-link active";
// link.textContent = "Google";

// // Після змін HTML виглядатиме так:
// // <a class="new-link active" href="https://google.com">Google</a>



// .............................
// .............................


// ПОЯСНЕННЯ-2   Властивість textContent. 
// 
// Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів).
// Як textContent "бачить" вкладений текст
// Ключове розуміння: textContent збирає текст з усіх дочірніх вузлів, включаючи вкладені елементи.

// HTML

{/* <article class="article">
  <h2 class="article-title">Welcome to Hawaii!</h2>
  <p class="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</article>


// JavaScript

const titleEl = document.querySelector(".article-title");
titleEl.textContent = 'Welcome to Italy!';

const textEl = document.querySelector(".article-text");
console.log(textEl.textContent);   // Lorem ipsum dolor sit amet consectetur adipisicing elit.
textEl.textContent = 'HELLO  Dima!';
console.log(textEl.textContent);   // HELLO  Dima! */}


// .............................
// .............................


// ПОЯСНЕННЯ-3   Властивість classList. 

// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS-класу в елемента, у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента.

// <a class="link is-active" href="https://goit.global">GoIT</a>

// Властивість classList — це спеціальний тип об'єкта, який подібний до масиву. Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.
// властивість value містить точне значення атрибута class
// властивість length — кількість класів в елемента

// Але самі по собі value та length майже не використовуються, тому що для операцій з класами (додавання, видалення тощо) є спеціальні методи.

// const link = document.querySelector(".link");
// console.log(link.classList);    //   ["link", "is-active", length: 2, value: "link is-active"]


// .............................
// .............................


// ПОЯСНЕННЯ-3-1   Властивість classList. 
//                 Метод classList.contains(className)

// Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.
// Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).

// <a class="link is-active" href="https://goit.global">GoIT</a>

// const link = document.querySelector(".link");
// console.log(link.classList);     //   ["link", "is-active", length: 2, value: "link is-active"]

// const hasActiveClass = link.classList.contains("is-active"); // true
// const hasActiveClass = link.classList.contains("title"); // false



// .............................
// .............................


// ПОЯСНЕННЯ-3-2   Властивість classList. 
//                 Метод classList.add(className)

// Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.
// Можна додавати більше одного класу, вказавши кілька аргументів через кому.

// метод classList.add() не повертає ніякого значення. Це типова поведінка для методів, які змінюють стан об'єкта, але не потребують повертати результат своєї роботи.

// link.classList.add("special");
// console.log(link.classList);    // ["link", "is-active", "special", length: 3, value: "link is-active special"]
 
// Якщо спробувати ПОВТОРНО добадати вже існуючє ім'я класу - дублікати автоматично ігноруються (новий дублікат НЕ ДОДАЄТЬСЯ. Існуючий клас залишається без змін. Ніякої помилки не виникає. Просто метод нічого не робить) :

// link.classList.add("link");        //   дублікат автоматично ігнорується !!!
// link.classList.add("is-active");   //   дублікат автоматично ігнорується !!!
// link.classList.add("special");     //   дублікат автоматично ігнорується !!!




