'use strict';

// lesson 02
let num = 266219;

let numToStr = num.toString();
let strToArray = numToStr.split('');
let multipleNumbers = 1;
for (let i = 0; i < strToArray.length; i++) {
  multipleNumbers *= strToArray[i];
}

let multipleNumbersPow = multipleNumbers ** 3;

let arrayFromMultipleNumbersPow = multipleNumbersPow.toString();

console.log(arrayFromMultipleNumbersPow.slice(0, 2));

// lesson 03
let lang = 'en';

if (lang === 'ru') {
  console.log(
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  );
} else {
  console.log(
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  );
}

switch (lang) {
  case 'ru':
    console.log(
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    );
    break;
  case 'en':
    console.log(
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    );
    break;
  default:
    break;
}

const days = [
  [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
];

const langIndex = {
  ru: 0,
  en: 1,
};

console.log(...days[langIndex[lang]]);

let namePerson = 'Вася';

namePerson === 'Артем'
  ? console.log('директор')
  : namePerson === 'Александр'
    ? console.log('преподаватель')
    : console.log('студент');

// lesson 04
const isAString = function (str) {
  str = str.trim();
  if (typeof str !== 'string') console.log('Это не строка!');
  console.log(str.slice(0, 30) + '...');
};
isAString(
  'Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)',
);

// lesson 07

const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

for (let weekDay of week) {
    let today = new Date();
    if (weekDay === 'Суббота' || weekDay === 'Воскресенье') {
        document.write(weekDay.italics() + '<br>');
    } else if(today.getDay() === week.indexOf(weekDay) + 1) {
        document.write(weekDay.bold() + '<br>');
    } else {
        document.write(weekDay + '<br>');
    }
}