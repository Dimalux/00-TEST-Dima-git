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

// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об’єктів.

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




// .............................
// .............................


// ПОЯСНЕННЯ-2   Властивість textContent

