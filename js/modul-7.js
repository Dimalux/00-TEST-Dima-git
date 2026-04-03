'use strict';


// Що таке DOM-дерево?

// DOM (Document Object Model) — це об'єктна модель документа. Коли браузер завантажує HTML-код, він будує DOM-дерево, де кожен тег стає DOM-вузлом (Node). Якщо тег є елементом (наприклад, <div>, <p>), він стає об'єктом типу Element (який успадковується від Node).

// DOM-елемент — це об'єкт із властивостями й методами.

// Тобто:
//     Кожен тег у розмітці стає DOM-елементом (об'єктом) у DOM-дереві.

// Що відбувається з атрибутами тега?
// Коли браузер парсить HTML, він:
//     Створює DOM-об'єкт для кожного тега.
//     Деякі атрибути з тега перетворюються на властивості (properties) цього DOM-об'єкта.
// Важливо, що не всі атрибути стають властивостями автоматично.

//...............

// МОЯ аналогія :
// Тегі в HTML - це як клас. Коли браузер парсить HTML - це як створити екземпляр класу. 
// Для кожного тега (класу) браузер запускає спеціальний "конструктор" параметром якого буде об'єкт заздалегідь визначених властивостей (не всі атрибути тега стають властивостями). Кожен екземпляр отримує стандартний набір методів, визначених браузером.

// Чат GPT :
// Ваша аналогія добра для початкового розуміння, але технічно точніше сказати, що браузер не викликає конструктори в JS-розумінні, а створює об'єкти у внутрішній пам'яті за зразками (класами), які потім відображаються у JS як готові об'єкти з методами.

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
// console.log(link.href);        // https://goit.global


//   !!!  У DOM-елементів НЕМАЄ поля class. Це поширена помилка початківців, які думають, що атрибут class у HTML напряму відображається як властивість ".class "у JavaScript. 
// Як правильно:  ".className" — повертає рядок з усіма класами


//..................

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться :

// // <img class="image" src="https://picsum.photos/id/9/320/240" alt="A laptop" width="300" />

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

// 1. Через атрибут style в HTML :
// html
// <div style="color: red;"></div>

// 2. Через властивість style в JavaScript :
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

// "DOM зберігається в пам'яті браузера" — це означає, що DOM знаходиться в тій ділянці RAM, яку браузер отримав від комп'ютера, а точніше — в ділянці тієї конкретної вкладки, де відкрито сайт.
// Коли відкриваємо браузер, він звертається до комп'ютера і каже:
//     "Дай мені шматок робочого столу (RAM), я буду на ньому працювати"
// Комп'ютер виділяє браузеру певну ділянку столу. Цю ділянку ми називаємо "пам'ять браузера".



// .............................
// .............................


// ПОЯСНЕННЯ-5   Доступ до атрибутів.

// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.
// Доступ до атрибутів здійснюється за допомогою стандартних методів. 
// Ці методи працюють зі ЗНАЧЕННЯМ, яке знаходиться в HTML.

  // <img class="image" src="https://picsum.photos/id/9/320/240" alt="A laptop" width="300" />



// .............................
// .............................


// ПОЯСНЕННЯ   Доступ до атрибутів. 
//               Метод element.hasAttribute(nameAttribute)

// Метод приймає один аргумент — рядок nameAttribute, який містить ім'я атрибута для перевірки та повертає результат перевірки його наявності на елементі element — "true" чи "false".

 // <img class="image" src="https://picsum.photos/id/9/320/240" alt="A laptop" width="300" />

// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false


// .............................
// .............................


// ПОЯСНЕННЯ-6   Доступ до атрибутів. 
//               Метод element.getAttribute(nameAttribute)

// Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає null.

 // <img class="image" src="https://picsum.photos/id/9/320/240" alt="A laptop" width="300" />

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


// .............................
// .............................


// ПОЯСНЕННЯ-8   Доступ до атрибутів. 
//               Метод element.removeAttribute(nameAttribute)

// Метод приймає один аргумент — рядок "nameAttribute" з іменем атрибута, який потрібно видалити зі вказаного HTML-елемента element — та видаляє його. Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

// const image = document.querySelector(".image");
// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false

// !!!!!
// Отримати доступ або ЗМІНИТИ ЗНАЧЕННЯ деяких атрибутів елемента можна безпосередньо, звернувшись до них як до властивостей DOM-об'єкта. Це буде менш затратно за кількістю коду.
// А ось ВИДАЛИТИ або ПЕРЕВІРИТИ НАЯВНІСТЬ буде зручніше, використовуючи відповідний метод.
// !!!!!


// .............................
// .............................


// ПОЯСНЕННЯ-9   Власні атрибути (data-атрибути). 
//               
//  HTML-елементи — це контейнери, які можуть зберігати не тільки текст і картинки, але й додаткову інформацію про себе.
// Проблема: У HTML є чіткий набір атрибутів для кожного тегу (src, href, alt, type тощо). Але іноді цього недостатньо.
// Рішення: Створити власні атрибути, які починаються з data-. Вони не впливають на відображення, але зберігають потрібну інформацію.

// Що JavaScript може робити з data-атрибутами?
// Наприклад, під час виконання коду JavaScript приймати рішення :

//  <div data-user-role="admin">Панель керування</div>
//  <div data-user-role="guest">Гостьовий доступ</div>

// javascript
// const user = document.querySelector("div");
// if (user.dataset.userRole === "admin") {
//   showAdminPanel();    // Показуємо адмін-панель
// } else {
//   showGuestPanel();    // Показуємо гостеву версію
// } 


// .............................
// .............................


// ПОЯСНЕННЯ-10   Власні атрибути (data-атрибути). 
//                ОТРИМАННЯ значень - властивість "dataset".

// Отримання значень :
// Для отримання значення data-атрибута використовується властивість "dataset", після якої через крапку пишеться ім'я атрибута БЕЗ data-. 
// Тобто "data-" відкидається, а інша частина імені записується як ім'я властивості об'єкта.
       
    
  // // <button type="button" data-action="save">Save text</button>
  // // <button type="button" data-action="close">Close editor</button>

  // const buttonMy1 = document.querySelector('button[data-action="save"]');
// const buttonMy2 = document.querySelector('button[data-action="close"]');

// console.log(buttonMy1.dataset.action);  //  save
// console.log(buttonMy2.dataset.action);  //  close


// .............................
// .............................


// ПОЯСНЕННЯ-11   Власні атрибути (data-атрибути). 
//                ЗМІНА значень - властивість "dataset".

// Змінити значення існуючого data-атрибута або додати новий можна так само, як і будь-якої іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента, а потім змінити/задати значення властивості в об'єкті dataset.
    
{/* <button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button> */}

// const buttonUse = document.querySelector('.item button[data-action="close"]');

// // Змінюємо значення data-action для кнопки "buttonUse" :
// console.log(buttonUse.dataset.action);    //   close
// buttonUse.dataset.action = "update";      //   ЗМІНА значення  "close" на "update"
// console.log(buttonUse.dataset.action);    //   update

// // Додаємо новий data-атрибут data-role
// buttonUse.dataset.role = "admin";
// console.log(buttonUse.dataset.role);    //   admin



// .............................
// .............................


// ПОЯСНЕННЯ-12   Створення та видалення елементів.

// Браузер виділяє собі місце в RAM
// В цьому місці зберігає DOM, CSSOM, JavaScript-дані
// Потім "дивиться" у свою пам'ять і показує на екран
// Тобто пам'ять браузера - це частина RAM, якою керує браузер. Вона активно працює і зберігає всі дані для відображення сторінки.
// ВСЕ це знаходиться в оперативній пам'яті (RAM).

// Сторінка (те, що бачить користувач) - це результат рендерингу DOM + CSS.

// DOM - це "жива" структура
// DOM називають "живою" (live), тому що Автоматично оновлюється при змінах

// DOM - це розпарсений HTML, який зберігається в пам'яті як дерево об'єктів, 
// а DOM API  - це набір методів в браузері, які дозволяють JavaScript взаємодіяти з DOM (змінювати DOM)


// .............................
// .............................


// ПОЯСНЕННЯ-12-1   Створення та видалення елементів.
//                  Створення елементів   "document.createElement()"

// DOM API (Document Object Model Application Programming Interface) має широкий функціонал. За його допомогою можна:
// вибирати або змінювати вже існуючі елементи
// видаляти елементи
// створювати нові елементи й додавати їх у документ


// // Розглянемо, як створити новий елемент:

// document.createElement(tagName)

// // створює елемент з ім'ям tagName і повертає посилання на його об`єкт як результат свого виконання.
// // tagName — це рядок, що вказує тип елемента, який створюється.
// // Елемент створюється в пам'яті, у DOM його ще немає.

// const heading = document.createElement("h1");

// // Після створення елемента heading отримуємо посилання на його об`єкт у пам'яті. З цього моменту можна звертатися до властивостей цього об`єкта і змінювати їх ще до того, як вставимо цей елемент у DOM.

// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>


// Елемент попадає в DOM тільки в момент виклику одного з методів додавання:

// appendChild()
// insertBefore()
// replaceChild()
// insertAdjacentElement()
// та інших подібних методів

// До цього моменту елемент існує лише як об'єкт в пам'яті, але не є частиною DOM і не відображається на сторінці.



// .............................
// .............................


// ПОЯСНЕННЯ-12-2-1   Створення та видалення елементів.
//                    Додавання елементів


// const heading = document.createElement("h2");

// // Метод ".classList.add()" додає клас "class" зі значенням "title" до списку класів елемента :
// heading.classList.add("title");
// console.log(heading.classList);     //   DOMTokenList ['class', value: 'class']

// // Перевіряємо, чи є у елемента вказаний атрибут. Повертає true - якщо атрибут існує, false - якщо атрибута немає
// console.log( heading.hasAttribute("class"));   //     true

// // Метод element.setAttribute(nameAttribute, value) встановлюємо значення зазначеного атрибута для вказаного HTML-елемента element.
// heading.setAttribute("class", "title2");
// console.log(heading.classList);   //     

//..........................

//  МІЙ приклад :

// const text1 = document.createElement("p");

// text1.classList.add("link");
// text1.setAttribute("data-use", "save");
// text1.textContent = "HELLO, DIMA!";

// console.dir(text1.textContent);
// console.log(text1);


// .............................
// .............................


// ПОЯСНЕННЯ-12-2-2   Створення та видалення елементів.
//                    Додавання елементів  "element.append()"  /  "element.prepend()"

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

// elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

//   !!!!!
// Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове. Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.
//   !!!!!

// Приклад :  додати до існуючого списку три елемента (два - додати на початок списку, третій - в кінець списку) :

// <h1>Usernames</h1>
//   <ul class="usernames">
//     <li>Mango</li>
//   </ul>


// const listUser = document.querySelector(".usernames");

// const link1 = document.createElement("li");
// const link2 = document.createElement("li");
// const link3 = document.createElement("li")
// link1.textContent = "Dima";
// link2.textContent = "Katja";
// link3.textContent = "Nastja";

// console.log(link1);
// console.log(link1.textContent);

// console.log(link2);
// console.log(link2.textContent);

// console.log(link3);
// console.log(link3.textContent);


// Два елементи додаємо на початок списку :
// listUser.prepend(link1, link2);

// Третій елемент додаємо в кінець списку :
// listUser.append(link3);

// console.log(listUser.textContent);
// console.log(listUser);


// .............................
// .............................


// ПОЯСНЕННЯ-12-3   Створення та видалення елементів.
//                  Видалення елементів "element.remove()"

// Для того щоб видалити елемент, використовується метод element.remove().

// <p class="text">Random text content</p>

// Він викликається на елементі element, який необхідно видалити.

// const text = document.querySelector(".text")
// text.remove();



// Приклад :  видаляємо почергово елементи "<h2>", "<p>", "<a>" зі статті :

{/* <article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! Praesentium accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
<a class="link" href="">Read more</a>
</article> */}

// const heading = document.querySelector(".title");
// heading.remove();

// const text = document.querySelector('.text');
// text.remove();

// const link = document.querySelector(".link");
// link.remove();


// .............................
// .............................


// ПОЯСНЕННЯ-12-4   Створення та видалення елементів.
//                  Властивість innerHTML   (встановлює або отримує HTML-вміст елемента)

// innerHTML — це властивість DOM-елемента :
// HTML-тег → стає DOM-елементом,
// DOM-елемент → має властивості,
// innerHTML → одна з цих властивостей.

// ✔ Тобто innerHTML — властивість DOM-елемента.

// Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.
// Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу. У такого підходу є свої плюси та мінуси.

 // .............................


// ПОЯСНЕННЯ-12-4-1   Створення та видалення елементів.
//                    Властивість innerHTML   (встановлює або отримує HTML-вміст елемента)
//                    Читання (Серіалізація (element.innerHTML) — весь поточний вміст element перетворюється на рядок. Читання element.innerHTML — браузер серіалізує поточні DOM-вузли в рядок HTML)

//  1)  <h2 class="title">Article title</h2>

// const heading = document.querySelector(".title");
// console.log(heading.innerHTML);    //    Article title

// heading.innerHTML = "Goodbye Article title";
// console.log(heading.innerHTML);    //   Goodbye Article title


// 2)  <article class="article">
//   <h2 class="title">Article title</h2>
//   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
//   <a class="link" href="">Read more</a>
// </article>


// const article = document.querySelector(".article");
// console.log(article.innerHTML);                            

// // В консоль буде виведено:
// //    <h2 class='title'>Article title</h2>
//   // <p class='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
//   // <a class='link' href=''>Read more</a>


 // .............................


// ПОЯСНЕННЯ-12-4-2   Створення та видалення елементів.
//                    Властивість innerHTML   (встановлює або отримує HTML-вміст елемента)
//                    Зміна
//  !!!!
// Якщо у властивість innerHTML записати ПОРОЖНІЙ РЯДОК, то ВМІСТ ЕЛЕМЕНТА буде ОЧИЩЕНО !!!  Це простий і швидкий спосіб видалення всього вмісту. Для очищення вмісту використовується саме порожній рядок "", а НЕ ПРОБІЛ " ".
//  !!!!

// Приклад :  змінюємо текст в заголовку h2 з "Article title" на "New and improved title" :

{/* <article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
  <a class="link" href="">Read more</a>
</article>


const title = document.querySelector(".article .title");
console.log(title);
console.log(title.textContent);

title.innerHTML = 'New and <span class="accent">improved</span> title';
console.log(title);
console.log(title.textContent); */}




 // .............................


// ПОЯСНЕННЯ-12-4-3   Створення та видалення елементів.
//                    Властивість innerHTML   (встановлює або отримує HTML-вміст елемента)
//                    Однотипна (шаблонна) розмітка створюється із масиву даних :

// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента. Якщо ти будеш це робити за допомогою методу map(), не забудь, що він повертає масив. Отже, перед тим як додавати розмітку в DOM, цей масив треба привести до рядка за допомогою методу join()

{/* <section>
  <h2>Popular technologies 1</h2>
  <ul class="list1"></ul>
</section> */}


// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const list = document.querySelector(".list1");

// // 1-й ВАРІАНТ :
// // list.innerHTML = technologies.map(technologie => `<li>${technologie}</li>`).join("");

// // 2-й ВАРІАНТ :
// // list.innerHTML = technologies.reduce((prev, tech) => prev + `<li>${tech}</li>`, "");

// // 3-й ВАРІАНТ :
// // Для того щоб код виглядав читабельніше у innerHTML, можна додати ПЕРЕВЕДЕННЯ РЯДКА "\n" :
// list.innerHTML = technologies.reduce((prev, tech) => prev + `<li>${tech}</li>\n`, "");

// console.log(list.innerHTML);



 // .............................


// ПОЯСНЕННЯ-12-4-4   Створення та видалення елементів.
//                    Властивість innerHTML   (встановлює або отримує HTML-вміст елемента)
//                    КОНКАТЕНАЦІЯ (додавання) вмісту всередині елемента ".innerHTML += htmlString;"

// Важливі наслідки !!!
// Хоча візуально здається, що ми просто додаємо новий вміст, насправді:
// Весь HTML всередині article повністю перепаровується (парситься заново);
// Будь-які раніше прив'язані обробники подій до дочірніх елементів будуть втрачені;
// Посилання на існуючі DOM-вузли, які ви зберегли в змінних, стануть недійсними.


// Приклад :  додавання (НЕ ПКРЕЗАПИСАТИ) до елемннту "article" ще 2-х дочірних шаблонних рядків "<p>" і "<a>" :

// // <article class="article">
// //   <h2>Article title</h2>
// // </article>

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// article.innerHTML += htmlString;



// .............................
// .............................


// ПОЯСНЕННЯ-12-5   Створення та видалення елементів.
//                  Метод insertAdjacentHTML()

// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

// element.insertAdjacentHTML(position, string)

// Аргумент "position" — це рядок, який визначає позицію щодо елемента "element". Він приймає одне з чотирьох значень.

// "beforebegin" — перед element
// "afterbegin" — всередині element, перед усіма дітьми
// "beforeend" — всередині element, після усіх дітей
// "afterend" — після element

// Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM-дереві. Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде перебувати в DOM-дереві.

// Приклад :  в HTML є список із трьох елементів. 
// 1) Додати три елемента "React", "TypeScript", "Node.js" з масиву "newTechnologies" в КІНЕЦЬ СПИСКУ через JavaScript, використовуючи метод insertAdjacentHTML, 
// 2) Додати заголовок h2 "Popular technologies 2" ПЕРЕД СПИСКОМ  через JavaScript, використовуючи метод insertAdjacentHTML.

// <ul class="list2">
//   <li class="list-item">HTML</li>
//   <li class="list-item">CSS</li>
//   <li class="list-item">JavaScript</li>
// </ul>


// const list = document.querySelector(".list2");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies.map(technology => `<li class="list-item">${technology}</li>`).join("");

// list.insertAdjacentHTML("beforeend", markup);

// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies 2</h2>")



// .............................
// .............................


// ПОЯСНЕННЯ-12-6   Події
//                  Метод addEventListener() додає слухача події на елемент.

// Подія — це сигнал від браузера про те, що на вебсторінці щось відбулося. Існує багато видів подій: події миші, події клавіатури, події елементів форм, зміни розмірів вікна, завантаження зображень, буфера обміну, зміни стадії CSS анімації або переходу тощо. Події використовуються для реакції на дії користувача й виконання коду, пов'язаного з певною подією.

// Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому обробника.
// Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події. Метод addEventListener() додає слухача події на елемент.

// element.addEventListener(event, handler, options)

// Аргументи методу:
// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

// На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.

 // .............................


// Приклад :   на сайті є кнопка для перегортання галереї зображень (в HTML є кнопка з класом my-button).

// <button class="my-button">Next</button>

// Щоб галерея горталась, потрібно в JavaScript коді отримати посилання на елемент кнопки й додати на нього слухача події кліку.
// У виклик addEventListener() першим аргументом ми передали ім'я події "click", другим — функцію-обробник подій (event handler) — () => {console.log("...")}. 
// Кожного разу, коли на елементі button відбуватиметься подія "click", ця колбек-функція буде виконуватися й виводити в консоль повідомлення "The button was pressed and now the next image will appear".

 // ...........

// ВАРІАНТ-1 :  колбек

// <button class="my-button">Next</button>

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => console.log("The button was pressed and now the next image will appear"));

 // ...........

// ВАРІАНТ-2 :  Для колбека можна використовувати не анонімну, а окрему функцію, передаючи на неї посилання, як це реалізовано у прикладі нижче. Іменована функція підвищує читабельність коду.

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("The button was pressed and now the next image will appear");
// };

// button.addEventListener("click", handleClick);


// .............................
// .............................


// ПОЯСНЕННЯ-12-7   Події
//                  Метод removeEventListener()  видаляє слухача події з елемента.

// Для того щоб мати можливість видаляти слухача події з елемента через removeEventListener, важливо використовувати ту саму функцію-обробник, яка була призначена в addEventListener. З цієї причини рекомендовано для обробників подій використовувати іменовані функції, які можна легко передавати як аргументи.


 // .............................


// Приклад :   на кнопку з текстом "Click me" 
// або ДОДАЄТЬСЯ слухач події (при кліку на кнопку "Add Listener"),
// або ВИДАЛЯЄТЬСЯ слухач події (при кліку на кнопку "Remove Listener").


// <button class="btn js-add">Add Listener</button>
// <button class="btn js-remove">Remove Listener</button>
// <hr>
// <button class="btn target-btn">Click me</button>


// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });



// .............................
// .............................


// ПОЯСНЕННЯ-12-8   Події
//                  Об'єкт події.

// Для обробки події недостатньо знати, що подія — це клік або натискання клавіші. Розробнику можуть знадобитися інші деталі, а саме: елемент, на якому відбулася подія, його поточне значення текстового поля, вбудовані методи тощо.
// Кожна подія — це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Усі події відбуваються з базового класу Event.

// const handleClick = event => console.log(event);

// button.addEventListener("click", handleClick);


// Параметр event — це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.
// Деякі властивості об'єкта події :

    // event.type — тип події.
    // event.currentTarget — елемент, на якому виконується обробник події.


//   Є клас Event, а екземпляр класу - це об'єкт події, який передається колбеку в якості аргумента.      
// Клас Event — це як креслення або форма. Він описує, які властивості та методи будуть у всіх подій (наприклад, type, target, timestamp, метод preventDefault()).    
// Усі події мають спільну основу — будь то клік, наведення миші, натискання клавіші чи завантаження сторінки. Всі вони є екземплярами класу Event.
// Коли користувач клікає по кнопці, браузер бере клас Event і створює новий екземпляр (новий об'єкт), який містить дані саме про цей клік :

          // Клас Event (спрощено) :
// class Event {
//   constructor(type, target) {
//     this.type = type;        // наприклад, "click"
//     this.target = target;    // елемент, на якому сталась подія
//     this.timestamp = Date.now();
//   }
  
//   preventDefault() {
//     // якась логіка
//   }
// }

// // Коли ви натискаєте кнопку, браузер робить приблизно так:
// const clickEvent = new Event("click", button);  //  створює екземпляр (об'єкт події)

// // І передає цей об'єкт у ваш колбек:
// handleClick(clickEvent);


// ............


// Приклад з Об'єктом події :


// // <button class="btn target-btn">Click me</button>

// const button = document.querySelector(".target-btn");

// const handleClick = event => {
// console.log("event:", event);         //   event: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// console.log("event type:", event.type);   //   event type: click
// console.log("currentTarget:", event.currentTarget);    //    currentTarget: <button class="btn target-btn">Click me</button>
// };

// button.addEventListener("click", handleClick);



// .............................
// .............................


// ПОЯСНЕННЯ-12-9   Події
//                  Події клавіатури.





// ПОЯСНЕННЯ-12-9   Події
//                  Події клавіатури.



