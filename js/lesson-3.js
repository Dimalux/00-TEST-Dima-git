'use strict';

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// id: Math.random()
// product.id = Date.now()
// product.id = new Date()
// product.id = Math.floor(Math.random() * 100)


// function makeProduct(name, price, callback) {

// // const product = `${name}.id ${price}`;
// const product = {
//   name,
//   price,
// id: Math.random()

// };

// return callback(product);
// };

// function showProduct(product) {
//   console.log(product);  
// }

// makeProduct("tea", 10, showProduct);






//Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
// }

// const item = {
//   getQuantity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuantity.bind(item));




//TODO: № 5 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи





 

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",

//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];





// const allTopics = courses.flatMap(course => course.topics);

//   console.log(allTopics);

//   console.log(allTopics.toSorted());

//   ...new Set(allTopics)

//   const uniqueTopics = [...new Set(allTopics)];


  
// ---------------------------------------------



//Напиши функцію конструктор User для створення користувача з такими властивостями

//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`


// function User(userName, age, numbersOfPost) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   };
// }


// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

//----------------


//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// для перевірки
// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = "change_mail@gmail.com";
// console.log(client.getClientData.email);



// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

  
//   get email() {
//     return this.#email;
//   }  
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// const client = new Client("mango", "mango@gmail.com");

// console.log(client.login); 
// console.log(client.email); 


// client.email = "change_mail@gmail.com";

// console.log(client.login); 
// console.log(client.email); 




//_______________________________



//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тва



// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getInfo() {
//     return `Name animal: ${this.name}, Type animal: ${this.type}`;
//   }

//   feed() {
//     console.log(`Feeding ${this.name}....`);
//   }
// }

// console.log(Animal);


// Mammal - хижак
// Bird - птах












// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]



// ВАРІАНТ 1 ___________________

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const number = [];
// console.log(number);

// for (let i = 0; i < numbers.length; i ++) {
//     number.push(numbers[i] * numbers[i]); 
//     };

//     console.log(number);




// ВАРІАНТ 2 ___________________

    //     const numbers = [1, 2, 3, 4, 5];
    //     console.log(numbers);
        
    //     const numberAdd = [];
    //     console.log(numberAdd);

    // for (const number of numbers) {
    //     numberAdd.push(number * number); 
    //   }

    //   console.log(numberAdd);





// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];




// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const sum = data.flatMap(item => item.values);

// console.log(sum); 






// Завдання 3:

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];



// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// // ВАРІАНТ 1 ___________
// const result = people.some(item => item.age < 20);
// console.log(result);


// // ВАРІАНТ 2 ___________
// console.log(people.some(item => item.age < 20));








// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];



// const numbers = [2, 4, 6, 8, 10];

// // // ВАРІАНТ 1 ___________
// const result = numbers.every(item => item % 2 === 0);
// console.log(result);


// // // ВАРІАНТ 2 ___________
// console.log(numbers.every(item => item % 2 === 0));







// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];



// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(item => item % 2 === 0));





// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];



//  РІШЕННЯ  ______________НЕ МАЄ 2-х значних чисел !!!_____________________

// const numbersArray = [4, 2, 5, 1, 3];

//  console.log(numbersArray.toSorted());





// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];


//  РІШЕННЯ  ____________всі регістри однакові!!!__

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// console.log(stringArray.toSorted());



// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


//  РІШЕННЯ  ____________всі числа 2-х значні !!!____


// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// console.log(users.toSorted((a, b) => a.age - b.age));
 




// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]



//РІШЕННЯ  ____________(подібне Завдання 8)___


// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// console.log(user.filter(item => item.age > 20));






// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];


//РІШЕННЯ  ____________

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((acc, item) => acc + item, 0));
 



// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24


//РІШЕННЯ  ___________



// class Calculator {

// number(value) {
//   this.value;
// }

// add() {

// }

// }






// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email



//РІШЕННЯ  ___________

//  class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

  
//   get email() {
//     return this.#email;
//   }  
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }




// Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.