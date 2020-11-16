/*******************************************************
*Kintamųjų palyginimas
*******************************************************/

// 1.Tarpusavyje palyginti skaičiaus tipo kintamuosius:
const num1 = 24;
const num2 = 17;

//kuris didesnis
if (num1 > num2) {
    console.log('True');
} else {
    console.log('False');
}

//kuris mažesnis
if (num1 < num2) {
    console.log('False');
} else {
    console.log('True');
}

//ar jie lygūs
if (num1 === num2) {
    console.log('True');
} else {
    console.log('False');
}

//ar jie nelygūs
if (num1 !== num2) {
    console.log('True');
} else {
    console.log('False');
}

//kuris didesnis arba lygus
if (num1 >= num2) {
    console.log('True');
} else {
    console.log('False');
}

//kuris mažesnis arba lygus
if (num1 <= num2) {
    console.log(`${num1} <= ${num2}`);
    console.log('True');
} else {
    console.log(`${num1} <= ${num2}`);
    console.log('False');
}

console.log('----------------------------------------');

// 2.Išvesti teksto tipo kintamųjų ilgius
const Text1 = 'I like it';
const Text2 = 'I will be back';
console.log(Text1.length);
console.log(Text2.length);


console.log('----------------------------------------');

// 3.Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
const textL1 = Text1.length;
console.log(textL1);
const textL2 = Text2.length;
console.log(textL2);

//kuris didesnis
if (textL1 > textL2) {
    console.log('True');
} else {
    console.log('False');
}

//kuris mažesnis
if (textL1 < textL2) {
    console.log('True');
} else {
    console.log('False');
}

//ar jie lygūs
if (textL1 === textL2) {
    console.log('True');
} else {
    console.log('False');
}

//ar jie nelygūs
if (textL1 !== textL2) {
    console.log('True');
} else {
    console.log('False');
}

//kuris didesnis arba lygus
if (textL1 >= textL2) {
    console.log('True');
} else {
    console.log('False');
}

//kuris mažesnis arba lygus
if (textL1 <= textL2) {
    console.log('True');
} else {
    console.log('False');
}

console.log('----------------------------------------');

// 4.Išvesti sąrašo tipo kintamųjų ilgius
const myColors = ['Red', 'Blue', 'Baby blue', 'Aqua', 'Green'];
const myCars = ['Range Rover', 'Mercedes', 'Subaru', 'Tesla'];

const myColorsLengt = myColors.length;
console.log(myColorsLengt);
const myCarsLengt = myCars.length;
console.log(myCarsLengt);


console.log('----------------------------------------');

// 5.Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
if (myColorsLengt > myCarsLengt) {
    console.log('True');
} else {
    console.log('False');
}

if (myColorsLengt < myCarsLengt) {
    console.log('True');
} else {
    console.log('False');
}

if (myColorsLengt === myCarsLengt) {
    console.log('True');
} else {
    console.log('False');
}

if (myColorsLengt !== myCarsLengt) {
    console.log('True');
} else {
    console.log('False');
}

if (myColorsLengt >= myCarsLengt) {
    console.log('True');
} else {
    console.log('False');
}

if (myColorsLengt <= myCarsLengt) {
    console.log('True');
} else {
    console.log('False');
}


