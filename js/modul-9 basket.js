'use strict';



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (01:15:30) :

// ПОЯСНЕННЯ-17   Задача :  В нас є масив товарів в нашому магазині. На основі цих товарів відобразати розмітку. У кожного товару буде кнопочка, при натисканні на яку ми будемо додавати тоао у КОРЗИНУ. Якщо в корзині є товар, ми можемо перейти в корзину і бачити цей товар, або якщо не має жодного товару в корзині - маємо бачити, що корзина пуста.



// const instruments = [
//     {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/7056/catalog",
//     name: "Шуруповерт",
//     price: 150,
//     description: "Мережевий дриль-шуруповерт TD-30 — надійний по",
//     },
//     {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/1891/catalog",
//     name: "Шліфмашина",
//     price: 1299,
//     description: "Кутова шліфувальна машина Dnipro-M GS-98 ⚙️ мод",
//     },
//     {
//     id: 4,
//     img: "https://static.dnipro-m.ua/cache/products/5596/catalog",
//     name: "Пила",
//     price: 11049,
//     description: "Мобільна акумуляторна ланцюгова пила DCS-200BC",
//     },
//   {
// id: 5,
// img: "https://static.dnipro-m.ua/cache/products/2023/catalog",
// name: "Рівень",
// price: 897,
// description: "Рівень серії ProVision виробництва DNIPRO-M машин",
//     },
//   {
// id: 6,
// img: "https://static.dnipro-m.ua/cache/products/11482/catalog",
// name: "Тример",
// price: 3699,
// description: "Тример електричний Dnipro-M 110 призначений для..."
//     },
//   {
// id: 7,
// img: "https://static.dnipro-m.ua/cache/products/6483/catalog",
// name: "Мотокоса",
// price: 11049,
// description: "Мотокоса Dnipro-M 43 призначена для покосу трат",
//    },
//     {
// id: 8,
// img: "https://static.dnipro-m.ua/cache/products/4980/catalog",
// name: "Генератор",
// price: 10890,
// description: "Бензиновий генератор GX-25 номінальною потужні",
// }
// ];

// const LS_KEY = 'basket';


//............

// <a href="index.html">Back</a>
//   <h1>BASKET - PRODUCTS</h1>
//    <h2 class="total-price-label js-total-price"></h2>
//     <button type="button" class="clear-cart-btn js-clear" hidden>Clear basket</button>
//     <ul class="products-container js-list"></ul>


//............

// (01:52:00)
// 8)  Сторінка з КОРЗИНОЮ.

// На сторінці КОРЗИНИ "09-basket.html" є :

// - елемент <h2> :
//  <h2 class="total-price-label js-total-price"></h2>
// Будемо відображати в <h2> або загальну вартість, або якесь повідомлення про то, що корзина порожня.

// - кнопка  "Clear basket"  для очищення КОРЗИНИ. Зараз на кнопке висить атрибут "hidden", тому ми її НЕ бачимо !!!

// - контейнер   <ul class="products-container js-list"></ul>  куди ми будемо відображати продукти з нашої КОРЗИНИ, якщо вони є.

const LS_KEY = 'basket';

const totalPrice = document.querySelector(".js-total-price");   //  це елемент <h2>

const clearBtn = document.querySelector(".js-clear");    //  це кнопка "Clear basket" для очищення корзини
const container = document.querySelector(".js-list");  //  контейнер (список <ul>), куди ми будемо відображати продукти з нашої КОРЗИНИ

//.......

// ОТРИМУЄМО ДАНІ з "localStorage" і відразу розпарсимо їх (якщо там нічого НЕ має ми все рівно зможемо перейти на сторінку КОРЗИНИ і побачити порожній масив []):

// ВАРІАНТ-1 :
const productsBasket = JSON.parse(localStorage.getItem(LS_KEY)) || [];
console.log(productsBasket);

// ВАРІАНТ-2 :
// через ОПЕРАТОР НУЛЬОВОГО ЗЛИТТЯ  "??" (02:19:43)  (для рядка 106). Оператор нульового злиття (??) — це логічний оператор, який повертає ПРАВИЙ операнд, якщо ЛІВИЙ операнд є "null" або "undefined", інакше повертає лівий операнд  :

// const productsBasket = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
// console.log(productsBasket);

//...........

// Створимо змінну, яка буде підраховувати загальну кількість товарів в КОРЗИНІ :

let totalCost; 

//.......


// Перевіремо чи є в КОРЗИНІ товари (якщо в корзині товарів НЕ МАЄ (масив порожній) "products.length === 0" - ми не потрапим в тіло "if()" нашої конструкцію). Якщо в корзині товарів НЕ МАЄ, то і КНОПКИ нам не потрібно.
// А якщо ТОВАР Є, тоді треба відобразити КНОПКУ :


if(productsBasket.length) {

clearBtn.hidden = false;  //  відображаємо КНОПКУ, якщо в КОРЗИНІ є товар 

// Присвомо в змінну "totalCost" загальну кількість товарів в КОРЗИНІ (використовуємо метод масиву reduce() - (дивись файл "modul-5.js" рядок 516). (КОНСПЕКТ - Модуль 5. Перебираючі методи масивів: Методи every, some і reduce) :

// totalCost = productsBasket.reduce((previousValue, item) => {}, 0) 
// ДЕСТРУКТУРУЄМО об'єкт "item", тобто витянем данні, які нас цікавлять (ціна і кількість) :
totalCost = productsBasket.reduce((previousValue, {price, qty}) => previousValue + price * qty, 0) 
console.log(totalCost);
} 

//.......

// Відобразимо в "totalPrice" (це елемент <h2>) текст.
// Якщо ми не попадаємо в тіло "if()", то "totalCost" буде "undefined". Скористаємось "тернарним оператором" - якщо в "totalCost" буде якесь значення, то запишемо рядок `totalCost ${totalCost} грн`?якщо в КОРЗИНІ нічого не має, то напишемо "Your basket is empty" :

totalPrice.textContent = totalCost ? `totalCost ${totalCost} грн` : `Your basket is empty`;

// (textContent  -  дивись файл "modul-7.js" рядок 226)


//.......


// Відмалюємо розмітку. Створимо функцію, яка на основі наших товарів в КОРЗИНІ буде відмальовувати нашу розмітку :

function createMarkup(arr) {

return arr.map(({ img, name, price, qty }) => `
    <li class="cart-item"></li>
  <img src="${img}" alt="${name}"/>
  <h2>${name}</h2>
  <p>Quantity: ${qty}</p>
  <p>Total price: ${qty * price} грн</p>
    `).join("")
}

// Тепер звернемось до нашего контейнера "container" (дивись рядок 99) і за допомоги функції "createMarkup()" відмалюємо туда розмітку :

container.insertAdjacentHTML("beforeend", createMarkup(productsBasket));

//.......


// Повісимо функціонал для КНОПКИ "Clear basket" очищення КОРЗИНИ (дивись рядок 98) :
// //  const clearBtn = document.querySelector(".js-clear");
// //  const LS_KEY = 'basket';

clearBtn.addEventListener("click", handlerClearBtn);

function handlerClearBtn() {

localStorage.removeItem(LS_KEY);

// Далі можна робити різні речі :

// ВАРІАНТ-1 :
// При очищенні корзини повертатись (ре-діректити  redirect - перенаправляти) на ГОЛОВНУ сторінку з товарами "index.html" - звернемось до глобаоьного об'єкту "window" до властивості "location", звернемось до її атрибуту "href" і передамо посилання на нашу ГОЛОВНУ сторінку з товарами "index.html" :

// window.location.href = "./index.html";


// ВАРІАНТ-2 :
// Очищувати контейнер "container" (список <ul> дивись рядок 99) :
// (innerHTML - дивись файл "modul-7.js" рядок 863)


container.innerHTML = "";

// АЛЕ при цьому залишається текст "totalCost ххххх грн" (дивись рядок 145).
// //  totalPrice.textContent = totalCost ? `totalCost ${totalCost} грн` : `Your basket is empty`;
// (textContent - дивись файл "modul-7.js" рядок 226) :
totalPrice.textContent = "";
}


// (02:16:40) :


//.............................
//.............................



// ЛАЙФХАК   (02:24:30) :

// const arr1 = [{ x: 1 }, { x: 2 }];    //   створюємо новий масив у пам'яті. Змінна arr1 зберігає посилання на цей масив.
// const arr2 = [...arr1];               //   оператор ... (spread) створює новий масив і копіює елементи з arr1 у цей новий масив. Цей новий масив розташовується в іншому місці пам'яті. Змінна arr2 зберігає посилання на цей новий масив.

// console.log(arr1 === arr2);    //  false  - Оскільки це посилання на різні об'єкти (різні адреси в пам'яті), === повертає false, навіть якщо вміст масивів ідентичний.


// Важливий нюанс щодо елементів всередині:

// Хоча масиви різні, їхні елементи (об'єкти { x: 1 } і { x: 2 }) не копіюються — вони залишаються тими самими об'єктами в обох масивах (ПОВЕРХНЕВЕ  КОПІЮВАННЯ). Тобто:

// console.log(arr1[0] === arr2[0]); // true (той самий об'єкт)
// Але самі масиви — різні, тому :  arr1 === arr2 — false.


// arr1[0].x = 100;     //   об'єкт { x: 100 } завжди один той самий, в arr1 і arr2 - посилання на цей об'єкт

// console.log("arr1", arr1);     //   { x: 100 }
// console.log("arr2", arr2);     //   { x: 100 }


// Як СКОПІЮВАТИ ОБ'ЄКТ, а не посилання :

const arr1 = [{ x: 1 }, { x: 2 }];    
const arr2 = JSON.parse(JSON.stringify(arr1));   //  КОПІЯ, а НЕ ПОСИЛАННЯ на ОБ'ЄКТ

arr1[0].x = 100; 

console.log("arr1", arr1);     //   { x: 100 }
console.log("arr2", arr2);     //   { x: 1 }

