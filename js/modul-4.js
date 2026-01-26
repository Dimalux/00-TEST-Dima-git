'use strict';


// ЗАДАЧА 1

// Напиши скрипт, який для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user у форматі ключ:значення використовуючі Object.keys() та for...of

const user = {
    name: "Alice",
    age: 25,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userNew = Object.keys(user);

for(const item of userNew) {
console.log(`${item}: ${user[item]}`);
}


// .............................




