'use strict';


// 9. Модуль - Модульність коду і bundler Vite :

// Формат JSON
// Вебсховище
// Інструменти веброзробки
// Модульність коду



//...............

// Що робити, коли Git блокує операцію "git pull", щоб не втратити незбережені (незакомічені) локальні зміни.
// "Please commit your changes or stash them before you merge.
// Aborting"  //    "Будь ласка, зафіксуйте зміни або збережіть їх перед об'єднанням.
// Переривання"

// git stash
// git pull
// git stash pop


// .............................
// .............................


// ПОЯСНЕННЯ-1   Формат JSON.
//               Стандарт JSON (СТРУКТУРОВАНІ дані у текстовій формі) :

// JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі. 

// СТРУКТУРОВАНІ дані -  «Об'єкти та Масиви» (загальне значення).
// У порівнянні з простими (примітивними) типами (число, рядок, буль, null, undefined, Symbol), структуровані дані — це ті, що можуть містити інші дані всередині:
// Об'єкти (Object) — набори пар «ключ-значення».
// Масиви (Array) — впорядковані списки значень.

// Саме в цьому форматі дані будуть:

// - приходити з сервера, 
// - відправлятися на сервер, 
// - зберігатися в локальному сховищі тощо.



// Звичайний об'єктоподібний синтаксис JSON дуже зручний. Але JSON — це не об'єкт, а його рядкове відображення. Розгляньте приклад JSON файлу :

// {
//   "name": "Josh",
//   "age": 30,  
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }


// Синтаксис схожий на об'єкт, за винятком того, що :

// 1) Ключі — ЦЕ ЗАВЖДИ РЯДКИ, обов'язково в ПОДВІЙНИХ !!!   лапках;    ( НЕ в ОДИНАРНИХ !!! )
// 2) Значення рядків — також обов'язково в ПОДВІЙНИХ !!!   лапках;     ( НЕ в ОДИНАРНИХ !!! )
// 3) У JSON немає коми після останньої властивості об'єкта.

// - Значення властивостей МОЖЕ БУТИ спеціальним значенням - "null", 
// але НЕ МОЖЕ БУТИ - "undefined".
// - Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.


// .............................
// .............................


// ПОЯСНЕННЯ-2   Формат JSON.
//               Перетворення у json :

// Javascript і JSON чудово працюють разом, завдяки методам вбудованого класу JSON. Ці методи перетворюють JavaScript об'єкт у JSON і навпаки.

// Метод "JSON.stringify(value)" приймає значення і перетворює його у JSON. 
// Значенням може бути число, буль, null, масив, об'єкт.
// Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.

// 1) для ОБ'ЄКТА :

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json);        //      {"name":"Mango","age":3,"isGoodBoy":true}

// !!! КОНСОЛЬ показує значення, а не тип !!!
// Коли використовуємо console.log(), консоль намагається показати вам значення у найбільш "читабельному" вигляді. Вона не обов'язково додає лапки, щоб підкреслити, що це рядок, особливо якщо вміст рядка схожий на код.

// console.log(typeof json); // "string" 

// Результат виклику JSON.stringify — це валідний JSON (рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.

// .......

// 2) для ЧИСЛА :

// console.log(JSON.stringify(32));

// console.log(typeof JSON.stringify(32));   // "string"

// .......

// 2) для БУЛЬ (логічне значення) :

// console.log(JSON.stringify(true));

// console.log(typeof JSON.stringify(true));   // "string"



// .............................
// .............................


// ПОЯСНЕННЯ-3   Формат JSON.
//               Перетворення функцій :

// 1) Не всі JavaScript об'єкти можуть бути перетворені один в один у JSON. Наприклад, якщо в об'єкта є МЕТОДИ, то при перетворенні вони будуть проігноровані та НЕ ПОТРАПЛЯТЬ у JSON :

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const json1 = JSON.stringify(dog);
// console.log(json1);                    // '{"name":"Mango","age":3,"isGoodBoy":true}'

// ..........

// 2) Також при спробі перетворити ФУНКЦІЮ у JSON результатом буде "undefined" :

// const json2 = JSON.stringify(() => console.log("Well, this is awkward")); 
// console.log(json2);    // undefined



// .............................
// .............................


// ПОЯСНЕННЯ-4   Формат JSON.
//               Парсинг із json :

// Щоб отримати з JSON валідне JavaScript значення, його необхідно РОЗПАРСИТИ (parse). 
// "Розпарсити" (або просто "парсити") означає перетворити текстовий рядок у структуровані дані, з якими можна працювати в програмі. 
// Це операція зворотня перетворенню JavaScript об'єкта в json за допомогою методу "JSON.stringify(value)".
// Метод "JSON.parse(value)" приймає json, тобто рядок, і перетворює його у JavaScript дані :

// console.log(JSON.parse("5"));          // 5
// console.log(JSON.parse("false"));      // false
// console.log(JSON.parse("null"));       // null
// console.log(JSON.parse('"hello"'));    // hello       

// // !!!!  АЛЕ :
// console.log(JSON.parse("'hello'"));    // ❌ ПОМИЛКА!    МАЄ БУТИ в ПОДВІЙНИХ !!!   лапках;    ( НЕ в ОДИНАРНИХ !!! )

// !!!  ЧОМУ ?
// JSON дозволяє ТІЛЬКИ подвійні лапки " для рядків.
// JSON НЕ ДОЗВОЛЯЄ одинарні лапки ' для рядків.

// ........

// Якщо json описує складний тип даних, наприклад ОБ'ЄКТ, то в результаті отримаємо валідний ОБ'ЄКТ, з яким можна працювати звичайним чином :

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog);                 //  {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name);            //  "Mango"

// ........

// !!!  ЗАУВАЖЕННЯ :
// JSON підтримує такі типи даних:

// // ✅ Прості типи (без фігурних дужок і ключів)
// JSON.parse("5")       // число
// JSON.parse("false")   // логічне
// JSON.parse("null")    // null
// JSON.parse('"hello"') // рядок (але з подвійними лапками!)

// // ✅ Складні типи
// JSON.parse("[1,2,3]")           // масив
// JSON.parse('{"name":"Mango"}')  // об'єкт



// .............................
// .............................


// ПОЯСНЕННЯ-5   Формат JSON.
//               Парсинг із json.  ОБРОБКА ПОМИЛОК (конструкція "try...catch") :

// Якщо методу JSON.parse передати невалідний JSON, він згенерує помилку. Як результат, увесь скрипт впаде, тобто припинить своє виконання, і весь код після місця помилки не виконається.
// До такого сценарію призведе, наприклад, парсинг рядка.
// Рядок із символами — це невалідний JSON, адже він не може бути перетворений у валідне JavaScript значення :

// const data = JSON.parse("Well, this is awkward"); 
// console.log("❌ You won't see this log");

// Помилка буде і при спробі парсингу невалідного об'єкта, який, наприклад, може прийти з бекенду. У прикладі у властивості username бракує подвійних лапок :

// const data = JSON.parse('{username: "Mango"}');   // Error
// console.log("❌ You won't see this log");


// РІШЕННЯ :
// Для уникнення цього використовується конструкція "try...catch", яка дозволяє «ловити» й обробляти помилки виконання скрипта :

// try {
//   // Code that may throw a runtime error
// } catch (error) {
//   // Error handling
// }


// Спочатку виконується код всередині блоку "try".
// Якщо помилки відсутні, блок "catch" ігнорується й управління передається далі.
// Якщо в блоці "try" сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку "catch".

// Використовуючи конструкцію "try...catch", можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції продовжив працювати, навіть у разі помилки :

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name);       //   SyntaxError
//   console.log(error.message);    //   Unexpected token 'W', "Well, this"... is not valid JSON
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");    //   ✅ This is fine, we handled parsing error in try...catch


// Змінна "error" — це об'єкт помилки з інформацією про те, що сталося.

// У цього об'єкта є кілька корисних властивостей :

// name — тип помилки. Для помилки парсингу — це "SyntaxError".
// message — повідомлення про деталі помилки.
// stack — стек викликів функцій на момент помилки. Використовується для налагодження.



// .............................
// .............................


// ПОЯСНЕННЯ-5   Формат JSON.
//               Парсинг із json.  ДЕТАЛЬНІШЕ про ПОМИЛКИ :

// У JavaScript код виконується не одразу.
// Для початку інтерпретатору потрібно прочитати код і дізнатися, чи можливо його взагалі виконати.

// 1) ФАЗА ОЦІНКИ, або оцінки (compile time, evaluation time) — підготовка перед виконанням коду: інтерпретатор знаходить синтаксичні помилки, помилки типізації тощо. Отже, код ще не виконується, лише оцінюється.
// Якщо ця фаза пройшла успішно, це щонайменше означає, що в коді відсутні синтаксичні помилки і його можна запустити для виконання.

// 2) ФАЗА ВИКОНАННЯ (runtime) — скрипт починає виконуватися: виконуються інструкції викликів функцій і оцінювання виразів, відбувається пошук необхідних ідентифікаторів у відповідних областях видимості тощо.

// Якщо ця фаза проходить успішно, це свідчить про те, що скрипт написаний без явних помилок і виконав свою роботу. На цій фазі можуть бути помилки, пов'язані з відсутніми властивостями та змінними, перетворенням типів тощо, тобто щось, що відбувається тільки під час виконання коду.

// ПРИКЛАД для розуміння :

// console.log('This message will not appear in the console');

// cos value = 5;     //   навмисно зроблена помилка. Замість "const" намагаємося оголосити "cos"


// На ФАЗІ ОЦІНКИ буде виявлена синтаксична помилка (ФАЗА ВИКОНАННЯ навіть не запуститься). У консолі ми одразу побачимо повідомлення про помилку. Помилки, які виникають під час ФАЗИ ОЦІНКИ, називаються помилками парсингу.

// Конструкція try...catch ловить тільки помилки, які виникли під час ФАЗИ ВИКОНАННЯ (виконання коду runtime errors). Це означає, що код має бути синтаксично правильним, інакше ФАЗА ВИКОНАННЯ просто не запуститься. 



// .............................
// .............................


// ПОЯСНЕННЯ-6   Вебсховище.
//               Сookie :

// Cookie (кукі, печиво) — це невеликі фрагменти текстових даних, які вебсайт зберігає на комп'ютері або пристрої користувача через браузер. Вони є ще одним механізмом зберігання даних на стороні клієнта, але працюють інакше, ніж вебсховище.

// Основні характеристики cookie :

// 1) Розмір: дуже малі (зазвичай до 4 КБ на один cookie).
// 2) Автоматично надсилаються на сервер при кожному HTTP-запиті до того самого сайту.
// 3) Мають термін придатності (можуть бути сесійними — видаляються після закриття браузера, або постійними — зберігаються до вказаної дати).
// 4) Прив'язані до конкретного домену (сайту) та шляху.


// Історично cookie використовували для всього (бо Web Storage з'явився значно пізніше). А в сучасних практиках багато з цього вже перенесено в Web Storage.

//     Cookie - ТІЛЬКИ для того, що має бачити сервер автоматично.
// Аутентифікація, сесії, токени. Це класичне і правильне використання cookie.
// Сервер встановлює sessionId або token у cookie (часто з HttpOnly), і браузер автоматично надсилає його з кожним запитом.

// Web Storage - для всього клієнтського:
// Тема, шрифт, чернетки форм, налаштування інтерфейсу.

// Мова сайту може бути як у cookie, так і в localStorage - залежить від того, хто вирішує: сервер (тоді cookie) чи клієнтський JS (тоді localStorage).


// ВЕБСХОВИЩЕ складається з локального сховища та сховища сеансів :

// -  Локальне сховище (Local Storage): унікальне для кожного вебдодатку і буде однаковим на кількох вкладках, де вебдодаток відкритий. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript. Доступ до даних у локальному сховищі можливий з будь-якої вкладки або вікна браузера, пов'язаної з доменом, який створив дані;
// Доступ до локального сховища можна отримати в об`єкті window :

// console.log(window.localStorage);     // Storage {length: 0}

// Можна також отримати прямий доступ до об`єкта localStorage, адже за замовчуванням пошук відбувається на об`єкті window :

// console.log(localStorage);    // Storage {length: 0}

// -  Сховище сесії (Session Storage): на відміну від локального сховища, дані у сховищі сесії зберігаються лише протягом одної сесії браузера. Якщо користувач закриє вкладку або браузер, дані будуть видалені. Сховище сесії зручне для зберігання тимчасових даних або станів, які не повинні зберігатися довгий час.


// .............................
// .............................


// ПОЯСНЕННЯ-7   Вебсховище.
//               ДОДАВАННЯ даних (localStorage.setItem()) :

// Додамо пару ключ-значення до локального сховища за допомогою методу setItem(key, value), доступного в об`єкті localStorage:

// localStorage.setItem("theme", "light");

// Це встановить новий запис у сховищі з ключем "theme" і значенням "light". Якщо викликати об`єкт localStorage зараз, то побачимо збережені дані :

// console.log(localStorage);   //  Storage {theme: 'light', length: 1}

// Також побачимо у браузері в розділі «Local Storage» в інструментах розробника в таблиці "Ключ"  "Значення" :

// theme	light


// .............................
// .............................


// ПОЯСНЕННЯ-8   Вебсховище.
//               ДОДАВАННЯ СКЛАДНИХ даних (localStorage.setItem("******", JSON.stringify(******)) :

// У вебсховище не записують методи об'єктів або функції, тільки дані, які підтримує JSON формат.
// Технічно у вебсховище можна записати тільки рядки. Але це не проблема, якщо використовувати методи класу JSON для перетворення складних типів.
// Якщо необхідно зберегти щось, окрім рядка, наприклад, МАСИВ або ОБ'ЄКТ, необхідно перетворити їх у рядок методом JSON.stringify() :


// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));


// Видалення даних :
// localStorage.removeItem("settings");
// localStorage.clear();


// .............................
// .............................


// ПОЯСНЕННЯ-9   Вебсховище.
//               ОТРИМАННЯ даних (localStorage.getItem()) :

// localStorage.setItem("theme2", "light2");
// const savedItem2 = localStorage.getItem("theme2"); 
// console.log(savedItem2);              // light2

// // Якщо у сховищі відсутній запис з таким ключем, метод повертає "null" :

// const savedItem3 = localStorage.getItem("theme3"); 
// console.log(savedItem3);              // null

// ..............

                //  ОТРИМАННЯ СКЛАДНИХ даних  (localStorage.setItem("******", JSON.stringify(******)) :

// Якщо значення є примітивним типом, немає потреби його парсити. Якщо це МАСИВ або ОБ'ЄКТ, необхідно РОЗПАРСИТИ значення методом "JSON.parse()", щоб отримати валідні дані :

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string   -   {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object    -    {theme: 'dark', isAuthenticated: true, options: Array(3)}


// Видалення даних :
// localStorage.removeItem("settings");
// localStorage.clear();


// У змінній savedSettings буде рядок, що представляє ОБ'ЄКТ, тому ми розпарсюємо це значення, і у змінній parsedSettings отримуємо повноцінний ОБ'ЄКТ із властивостями.



// .............................
// .............................


// ПОЯСНЕННЯ-10   Вебсховище.
//                ВИДАЛЕННЯ даних (localStorage.removeItem()) :

// 1)  Метод "removeItem(key)" видаляє зі сховища існуючий запис з ключем key. В результаті своєї роботи він не повертає значення :

// localStorage.removeItem("topic");
// console.log(localStorage.getItem("topic")); // null

// localStorage.removeItem("theme");
// console.log(localStorage.getItem("theme")); // null


// 2)  Щоб повністю очистити сховище, потрібно викликати метод "clear()" :

// localStorage.setItem("theme-3", "light");
// localStorage.setItem("notif-level-4", "mute");

// console.log(localStorage); 
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// // localStorage.clear();
// // console.log(localStorage); // Storage {length: 0}

// Операція повного очищення сховища є ризикованою. Вона може порушити записи, створені іншими розробниками проєкту. Краще видаляти лише ті записи, які дійсно не потрібні, не покладаючись на повну очистку даних сховища.


// .............................
// .............................


// ПОЯСНЕННЯ-11   Вебсховище.
//                ВИДСХОВИЩЕ  СЕСІЇ "sessionStorage" :

// Сховище сесії зберігає дані лише доти, поки відкрита вкладка браузера.
// Це означає, що кожного разу, коли відкривається нова вкладка або нове вікно браузера, створюється нове сховище сесії. Отже, будь-які дані, які зберігаються в сховищі сесії, автоматично видаляються, коли користувач закриває цю вкладку/вікно.

// Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.
// Єдиний виняток — звертаємося до них через об'єкт "sessionStorage", а не "localStorage" :


// console.log(window.sessionStorage); // Storage {length: 0}


// // 1)  Методом "setItem(key, value)" можна записувати як рядки, так і складні типи даних :

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// // .........

// // 2)  Методом "getItem(key)" можна читати записи, використовуючи збережений ключ :

// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// // .........

// // 3)  Видаляти елементи за ключем і очищати сховище цілком методами "removeItem(key)" і "clear()" відповідно :

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}


// .............................
// .............................


// ПОЯСНЕННЯ-12   Вебсховище.
//                Кейс: Форма з повідомленням :


// <form class="feedback-form-2">
//   <textarea name="message"></textarea>
//   <button type="submit">Send feedback</button>
// </form>


// const form = document.querySelector(".feedback-form-2");

// form.addEventListener("submit", event => {
//     event.preventDefault();
//     console.log(event.target.elements.message.value); 
// })


// ПРОБЛЕМА :
// Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження сторінки введене повідомлення пропадає.

// РІШЕННЯ :
// Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

// 1)  Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення. Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми : 
// -  використовуємо делегування подій;
// -  ловимо подію на формі;
// -  використовуємо властивість target для запису поточного значення поля в локальне сховище.

// const form = document.querySelector(".feedback-form-2");
// const localStorageKey = "messageForm";

// form.addEventListener("input", event => {
//   localStorage.setItem(localStorageKey, event.target.value);   //    зберігаэмо введене повідомлення
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 	console.log(event.target.elements.message.value);
//   form.reset();
// });


// ...........


// 2)  Під час сабміту форми будемо очищати збережене значення методом "removeItem" :

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "messageForm";

// form.addEventListener("input", (event) => {
//   localStorage.setItem(localStorageKey, event.target.value);
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 	console.log(event.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);      //   очищаємо збережене значення в localStorage
//   form.reset();
// });


// ...........


// 2)  Останнім кроком необхідно додати код читання збереженого повідомлення з локального сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки : 

// const form = document.querySelector(".feedback-form-2");
// const textarea = form.elements.message;        //  отримаємо збережене повідомлення з локального сховища. Властивість elements існує тільки для елемента <form>. form.elements повертає колекцію всіх полів форми: input, textarea, button, select тощо. Ця властивість недоступна для звичайних div, section або інших елементів.
// const localStorageKey = "messageForm";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";    //  вставляємо збережене повідомлення з локального сховища початковим значенням для текстового поля під час завантаження сторінки

// form.addEventListener("input", (event) => {
//   localStorage.setItem(localStorageKey, event.target.value);
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 	console.log(event.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });



// .............................
// .............................


// ПОЯСНЕННЯ-13   Інструменти веброзробки.
//                Збірка проєкту з Vite :

// Vite — це інструмент збірки проєкту для розробки вебдодатків на базі JavaScript. Він був створений для того, щоб забезпечити швидку та ефективну розробку вебпроєктів, а також максимально використовувати можливості сучасних вебстандартів.

// Основні особливості Vite :

// -  Швидка розробка;
// -  Миттєве створення проєкту;
// -  Широкий спектр мов і технологій;
// -  Модульна система;
// -  Гаряча заміна модулів (HMR);
// -  Плагін-система.



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (00:25:50) :

// ПОЯСНЕННЯ-14   LocalStorage :


// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];
// // const names2 = ["Alice", "Kate", "Emma", "Dima"];

// // 1) ДОДАВАННЯ в  localStorage складних типів даних (СЕРІАЛІЗАЦІЯ) :

// // ВАРІАНТ-1 :
// localStorage.setItem(LS_KEY, JSON.stringify(names));

// // ВАРІАНТ-2 :
// localStorage.setItem("Array of names", JSON.stringify(names));

// РЕЗУЛЬТАТ :
// Другий запис ПЕРЕЗАПИШЕ перший, тому що ключі ідентичні ("Array of names"). У локальному сховищі залишиться лише один запис з цим ключем. Значення буде однаковим в обох випадках (СЕРІАЛІЗОВАНИЙ МАСИВ).
// СЕРІАЛІЗОВАНИЙ МАСИВ — це масив, перетворений на рядок (string), щоб його можна було зберегти в localStorage.
// (дивись рядок 30, 82) 

//........

// Як працює СЕРІАЛІЗАЦІЯ "JSON.stringify()" :

// const names = ["Alice", "Kate", "Emma"];

// // Серіалізація (масив → рядок)
// const serialized = JSON.stringify(names);
// console.log(serialized); // '["Alice","Kate","Emma"]'

// // Збереження
// localStorage.setItem("names", serialized);

//........

// ДЕСЕРІАЛІЗАЦІЯ (зворотний процес):

// // Отримуємо рядок з localStorage
// const saved = localStorage.getItem("names"); // '["Alice","Kate","Emma"]'

// // Десеріалізація (рядок → масив)
// const parsedArray = JSON.parse(saved);
// console.log(parsedArray); // ["Alice", "Kate", "Emma"] - справжній масив!
// console.log(parsedArray[0]); // "Alice" - можна працювати як з масивом

//........


// 2) ОТРИМАННЯ даних з localStorage :
// // const LS_KEY = "Array of names";
// // const names = ["Alice", "Kate", "Emma"];

// // ВАРІАНТ-1 :
// const user1 = localStorage.getItem(LS_KEY);

// // ВАРІАНТ-2 :
// const user2 = localStorage.getItem("Array of names");

// console.log(user1);   //  отримали РЯДОК (якій має літерал масиву), а НЕ МАСИВ - ["Alice","Kate","Emma"]
// console.log(typeof user1);     //    string

// console.log(user2);

// // Для ОТРИМАННЯ масиву робимо ДЕСЕРІАЛІЗАЦІЮ  "JSON.parse()" (зворотний процес - перетворюємо рядок (string) на масив) :
// // (дивись рядок 156) 

// const user3 = JSON.parse(user1);  
// console.log(user3);                 //  (3) ['Alice', 'Kate', 'Emma']
// console.log(typeof user3);          //   object            
// // або :
// console.log(Array.isArray(user3));   //   true


// //........


// // 3) ВИДАЛЕННЯ даних з localStorage "localStorage.removeItem()"  (Урок-частина 1   0:39:40) :
// // const LS_KEY = "Array of names";
// // const names = ["Alice", "Kate", "Emma"];

// // -  Для видалення запису ПІД ПЕВНИМ КЛЮЧЕМ з localStorage :
// localStorage.removeItem(LS_KEY);


// // - Для видалення ВСІХ записів з localStorage :

// localStorage.removeItem(LS_KEY);



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (00:41:50) :

// ПОЯСНЕННЯ-15   LocalStorage НЕ МОЖЕ зберігати ФУНКЦІЮ :

function foo(a, d) {
    return a + b;
}

localStorage.setItem("foo", foo);                   //    Key: foo    Value:  function foo(a, d) { return a + b; }

const value = localStorage.getItem("foo");
console.log(typeof value);                          //   string
console.log(value(2, 3));                           //   буде ПОМИЛКА:  TypeError: value is not a function !!!


 
localStorage.setItem("foo", JSON.stringify(foo));   //    Key: foo    Value:  undefined !!!

const value2 = localStorage.getItem("foo"); 

// спробуємо зробити ДЕСЕРІАЛІЗАЦІЮ  "JSON.parse()" :

const foo = JSON.parse(value2);    //   Не можемо розпарсити, бо це звичайний рядок !!!
console.log(typeof value2);    

// ........

// (00:41:50)  створемо МЕТОД ОБ'ЄКТА : 