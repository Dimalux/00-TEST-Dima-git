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



// .............................
// .............................


// ПОЯСНЕННЯ-3-3   Властивість classList. 
//                 Метод classList.remove(className)

// Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента. 
// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться.

// link.classList.remove("is-active");
// console.log(link.classList);     // ["link", "special", length: 2, value: "link special"]


// .............................
// .............................


// ПОЯСНЕННЯ-3-4   Властивість classList. 
//                 Метод classList.toggle(className)

// Метод працює як перемикач:
// Якщо клас className відсутній, то додає його в кінець списку класів.
// Якщо клас className присутній — видаляє його.

// const link = document.querySelector(".link");

// console.log(link.classList);     //   DOMTokenList(2) ['link', 'is-active', value: 'link is-active']
// link.classList.add("special");
// console.log(link.classList);     //   DOMTokenList(3) ['link', 'is-active', 'special', value: 'link is-active special']

// // клас className ВІДСУТНІЙ,  додаємо його В КІНЕЦЬ СПИСКУ класів :
// link.classList.toggle("start");
// console.log(link.classList);       // DOMTokenList(4) ['link', 'is-active', 'special', 'start', value: 'link is-active special start']

// // клас className ПРИСУТНІЙ — видаляємо його :
// link.classList.toggle("is-active");
// console.log(link.classList);       // DOMTokenList(3) ['link', 'special', 'start', value: 'link special start']



// .............................
// .............................


// ПОЯСНЕННЯ-3-5   Властивість classList. 
//                 Метод classList.replace(oldClassName, newClassName)

// Метод очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName.
// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.

// const link = document.querySelector(".link");
// console.log(link.classList);    //   DOMTokenList(2) ['link', 'is-active', value: 'link is-active']

// link.classList.toggle("special");
// console.log(link.classList);    //   DOMTokenList(3) ['link', 'is-active', 'special', value: 'link is-active special']


// link.classList.replace("special", "regular");
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'is-active', 'regular', value: 'link is-active regular']

// // Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.
// link.classList.replace("start", "stop");
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'is-active', 'regular', value: 'link is-active regular']



// .............................
// .............................



// ВСІ ПРИКЛАДИ роботи з методами властивості classList :


// //  <a class="link is-active" href="https://goit.global">GoIT</a>


// const link = document.querySelector(".link");

//  // Читаємо значення властивостей :

// // Властивість class - className :
// console.log(link.className);   //   link is-active


// // Властивість href :
// console.log(link.href);        //   https://goit.global/


// // Властивість textContent :
// console.log(link.textContent);  //  GoIT


// // Властивість classList :
// console.log(link.classList);    //  DOMTokenList(2) ['link', 'is-active', value: 'link is-active']
// // DOMTokenList — це спеціальний об'єкт у JavaScript, який представляє список класів елемента (або інших токенів). Токен (token) у контексті DOMTokenList — це окремий рядок без пробілів, який є елементом списку. 
// // Слово "токен" тут означає один елемент у списку класів, розділений пробілами.
// // <!-- HTML атрибут class містить токени (класи) -->
// // <div class="link is-active special"></div>
// // Тут токени: "link", "is-active", "special"
// // Чому називається "токен":
// // У програмуванні токен — це мінімальна одиниця даних, яка має значення.
// // В атрибутах HTML — це окремі слова/значення, розділені пробілами.
// // У DOMTokenList — кожен клас є окремим токеном.

// // Властивість classList.  Метод classList.contains(className) :
// console.log(link.classList.contains("link"));         //  true
// console.log(link.classList.contains("is-active"));    //  true
// console.log(link.classList.contains("active"));       //  false


// // Властивість classList.  Метод classList.add(className) :
// link.classList.add("special");

// // Метод add() змінює об'єкт, але нічого не повертає
// console.log(link.classList.add("special"));         //  undefined  - тому що робиться додавання. Тому що метод classList.add() не повертає ніякого значення. Це типова поведінка для методів, які змінюють стан об'єкта, але не потребують повертати результат своєї роботи.
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'is-active', 'special', value: 'link is-active special']


// // Властивість classList.  Метод classList.remove(className) :
// link.classList.remove("is-active");
// console.log(link.classList);    //  DOMTokenList(2) ['link', 'special', value: 'link special']


// // Властивість classList.  Метод classList.toggle(className) :

// // клас className ВІДСУТНІЙ,  додаємо його В КІНЕЦЬ СПИСКУ класів :
// link.classList.toggle("is-active");
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'special', 'is-active', value: 'link special is-active']

// link.classList.toggle("start");
// console.log(link.classList);    //  DOMTokenList(4) ['link', 'special', 'is-active', 'start', value: 'link special is-active start']

// // клас className ПРИСУТНІЙ — видаляємо його :
// link.classList.toggle("start");
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'special', 'is-active', value: 'link special is-active']


// // Властивість classList.  Метод classList.replace(oldClassName, newClassName) :
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'special', 'is-active', value: 'link special is-active']
// link.classList.replace("special", "start");
// console.log(link.classList);    //  DOMTokenList(3) ['link', 'start', 'is-active', value: 'link start is-active']


// .............................
// .............................


// ПОЯСНЕННЯ-4   Властивість style. 

// Властивість "style" використовується для читання та зміни вбудованих стилів з DOM-елементів. Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.
// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються в CSS, тобто "background-color" перетворюється на "backgroundColor".

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів.
// Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, якщо посилання на фонове зображення невідомо заздалегідь і приходить з бекенда.

// ................................

// Inline-стиль завжди зберігається в атрибуті "style" HTML-елемента.
// Незалежно від того, як додано inline-стиль (в HTML чи через JS), він має вищий пріоритет, ніж CSS-класи.


// Способи додавання inline-стилів
// 1. Через атрибут style в HTML
// html
// <div style="color: red;"></div>
// 2. Через властивість style в JavaScript
// javascript
// const div = document.createElement("div");
// div.style.color = "red";        // це inline-стиль
// div.style.backgroundColor = "blue";
// 3. Через метод setAttribute()
// javascript
// div.setAttribute("style", "color: red; background-color: blue;");
// // Це також inline-стиль
// Результат однаковий
// В усіх трьох випадках в HTML-структурі з'явиться атрибут style


// Статичний HTML-код  — це текстовий файл (.html), який сервер віддає браузеру або який ви бачите у редакторі коду. Він незмінний до моменту завантаження.

// Динамічний HTML-код (неформальний термін, який описує DOM, змінений JavaScript) — це те, що браузер будує на основі статичного HTML + JavaScript. Цей код змінюється під час роботи сторінки. 

// Підсумок
// Так, жива розмітка (DOM після JS) — це і є динамічний HTML-код. Статичний HTML залишається незмінним на сервері, але в пам'яті браузера існує його динамічна версія (DOM), яка постійно оновлюється під час виконання скриптів.


// .............................
// .............................


// ПОЯСНЕННЯ-5   Доступ до атрибутів.

// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.
// Доступ до атрибутів здійснюється за допомогою стандартних методів. 
// Ці методи працюють зі ЗНАЧЕННЯМ, яке знаходиться в HTML.

  // <img class="image" src="https://picsum.photos/id/9/320/240" alt="A laptop" width="300" />



// .............................
// .............................


// ПОЯСНЕННЯ-6   Доступ до атрибутів. 
//               Метод element.hasAttribute(nameAttribute)

// Метод отримує один аргумент — рядок "nameAttribute" з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає "null".

// const image = document.querySelector(".image");
// console.log(image.getAttribute("alt"));          // "A laptop"


// .............................
// .............................


// ПОЯСНЕННЯ-7   Доступ до атрибутів. 
//               Метод element.setAttribute(nameAttribute, value)

// Метод приймає два аргументи: рядок "nameAttribute" з іменем атрибута, який потрібно встановити або змінити, та "value" зі значенням, яке цьому атрибуту треба присвоїти. Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.

// const image = document.querySelector(".image");
// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature
