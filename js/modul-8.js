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
//               Цільовий елемент ("event.target") :

// Елемент, на якому відбулася подія, називається цільовим, або вихідним. Це завжди найглибший елемент, з якого починається спливання. Він доступний як "event.target".

// "event.target" — це посилання на вихідний елемент, на якому відбулася подія. У процесі спливання (bubbling) подія рухається від найглибшого елемента вгору до батьківських елементів. ПОСИЛАННЯ на вихідний елемент (event.target) — НЕЗМІННЕ. Незмінна — саме властивість event.target (посилання на вихідний елемент) - це завжди вихідний (і найглибший) елемент, на якому був клік;

// "event.currentTarget" — це посилання на поточний елемент, до якого прив'язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.

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
//               Припинення спливання :

// Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об'єкта події (event):

// event.stopPropagation(),
// event.stopImmediatePropagation(),

// У чому ж різниця у використанні цих методів?

// event.stopPropagation()   -  Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію. Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.


// event.stopImmediatePropagation()  -  Зупиняє "спливання" події так само, як event.stopPropagation().
// Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.


