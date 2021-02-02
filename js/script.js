/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



//Это версия 1 с урока for
for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}



// Это версия 2 c помощью while 
// let num = 0;
// while (num < 2){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//         } else {
//             console.log('Error');
//             num--;
//         }
//     num++;
// }


//Это версия 3 do/while
// let num = 0;

// do {
//     const a = prompt('Один и последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его', '');
//     num++;
 
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         num--;
//     }
 
// } while (num < 2);






if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);



//dz2 222222222222222222222222222222222222222222222222222222222222
//C:\Users\Vitali\AppData\Local\Programs\Microsoft VS Code\bin
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания











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
