"use strict";



// УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ 
// if (1){
//     console.log('Ok!')
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49){
//     console.log('Errorrr');
// } else if (num > 100){
//     console.log('Many');
// } else {
//     console.log('OK!!!!!');
// }

// (num === 50) ? console.log('OK!!!!!') : console.log('Errorrr');

// const num = 49;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верняк');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }



//ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ ЦИКЛЫ 
// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// let num = 50;
// do {
//     console.log(num);
//     num++; 
// }
// while(num < 55);


// let num = 50;

// for(let i = 1; i < 10; i++) {
//     if(i === 7){
//         // break;
//         continue;
//     }

//     console.log(i);
// }




// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }



// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }



// let num;
// do {
//     num = prompt('Введите число, большее 100', 0);
// } while (num <= 100 && num);





//ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ 
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);



// function calc(a, b){
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));



// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



// const logger = function() {
//     console.log("Hello");
// };

// logger();



// const calc = (a, b) => a + b;






// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//       }
//     return addNumbers;
// }

// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);



// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('ответ', c1, c2, c3);






// let num = 1;
// while (num < 6) {
//     console.log(num);
//     num++;
// }



// for (let num = 0; num < 6; num++){
//     if (num == 0){
//         continue;
//     }
//     console.log(num);
// }



// get:for (let numb = 0; numb < 2; numb++){
//         for (let size = 0; size < 3; size++){
//             if (size == 2){
//                 break get;
//             }
//             console.log(size);
//     }
// }



// let num1 = 0;
// while (num1 < 3){
//     console.log(`число ${num1}`);
//     num1++;
// }



// let showMessage;
// if (2 > 1) {
// 	showMessage = function() {
// 		console.log('Сообщение');
// 	};
// }
// showMessage();




// let user = Math.max(10, 59, 39, -150, 0);
// console.log(user);

// let value = parseFloat("135.58px");
// console.log(value);

// let value = 58 + "Фрилансер";
// if (isNaN(value)) {
//     console.log('Результат выражения NaN');
// }

// let value = 1 - 0.9;
// console.log(value);

// let value = Math.floor(58.858);
// console.log(value);

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     showInfo() {
//         console.log(`${this.name}`);
//     }
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo();






// let fls = "фрилансер";
// let text = `Привет! Я ${fls}`;
// console.log(text);

// let text = `фрилансер`;
// let te = text[5];
// console.log(te);

// let text = 123 + "456";
// console.log(text);

// let text = `фрилансер`;
// console.log(text.toUpperCase());

// let text = `фрилансер`;
// console.log(text.slice(3, 6));

// let text = `фрилансер`;
// console.log(text.includes('лан', 3));





// let arrOne = [
//     { name: 'Ваня', age: 36 },
//     { name: 'Иша', age: 18 },
//     { name: 'Оля', age: 'Не скажу' },
// ];


// let findQ = arrOne.find(function (item, index, array) {
//     return item.age === 18;
// });
//ИЛИ СТРЕЛОЧНОЙ ФУНКЦИЕЙ:
// let arrTwo = arrOne.find(item => item.age === 18);
// console.log(arrTwo);


// let findQ = arrOne.findIndex(item => item.age === 18);
// console.log(findQ);


// let arrTwo = arrOne.filter(function (item, index, array){
//     return item.age >= 19;
// });
// console.log(arrTwo);







// Методы и свойства строк и чисел
const str = "teSt";

console.log(str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const log = "Hello world";
console.log(log.slice(6));

console.log(log.substring(6, 11));

console.log(log.substr(6, 2));


const num = 12.2;
console.log(Math.round(num));

const test = "19.2px";
console.log(parseInt(test));
console.log(parseFloat(test));



const test = "19.2px";
for (let char of test){
console.log(char);
}


console.log("Midget".includes("id", 1));





function ucFirst (str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("ffffffffffffffffffася"));


function checkSpam(str){

    let st = str.toLowerCase();

    if (st.includes("viagra")){
        return true;
    } else if (st.includes("xxx")){
        return true;
    } else{
        return false;
    }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));




function truncate(str, maxlength){
    if (str.length > maxlength){
        return (str.slice(0, maxlength - 1) + "…");
    } else{
        return str;
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));



function extractCurrencyValue(str) {
    return +str.slice(1);
  }
console.log(extractCurrencyValue('$120'));





// let one = +prompt("Введите первое число:");
// let two = +prompt("Введите второе число:");
// alert(one + two);


// console.log (Math.round(6.35 * 10) / 10);


function random(min, max){
	console.log(min + (Math.random * 10) * (max - min));
}

random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
random(1, 9);
