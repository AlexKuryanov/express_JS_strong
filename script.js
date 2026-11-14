// lesson 02
let num = 266219;

let numToStr = num.toString();
let strToArray = numToStr.split('');
let multipleNumbers = 1;
for (i = 0; i < strToArray.length; i++) {
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
