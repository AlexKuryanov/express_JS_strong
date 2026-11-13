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
