/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// let result = confirm('Вы готовы пройти тест?');
// if (result) {
// document.querySelector('#result').textContent = 'Вы ответили, что готовы';
// } else {
// document.querySelector('#result').textContent = 'Вы ответили, что не готовы';
// };

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const IloveFilms = prompt('Острое желание повтора?', '');

const LovingMovieDB = {
    count: IloveFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', ''),
              c = prompt('Хотите еще раз увидеть?', ''),
              d = prompt('Повтор Вам интересен?', '');

    if (a != null && b != null && c != null && d != null && a != '' && b != '' && c != '' && d != '' &&  a.length < 50) {
        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}
    
 if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");    
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
 }  else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман"); 
 }  else {
     console.log("Произошла ошибка");
 }

 if (LovingMovieDB.count = 99) {
     const Da = 99;
    console.log("Давай еще");
 }

 console.log(personalMovieDB);