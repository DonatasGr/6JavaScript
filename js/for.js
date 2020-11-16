const kiek = 8

for (let i = 4; i < kiek; i++) {
    // logika
    console.log('Labas rytas!', i);

}

console.log('pabaiga');

let number = 7;
console.log(number);

number++;
console.log(number);

number--;
console.log(number);

number++;
console.log(number);

console.log('---------');

/*
Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
*/

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    pajamos = pajamos + alga
    console.log(`${i}) ${pajamos} pinigu.`);
}


console.log('----------');

/* 
Parasyti skaicius nuo 8 iki 4 imtinai.
*/

for (let i = 8; i >= 4; i--) {
console.log(i);
}

console.log('----------');

/* 
Isvardinti ciferblato skaicius nuo duotos valandos iki galo.
*/

const valanda = 3;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

/* 
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname: "Aplankiau: Miesto pavadinimas."
*/

// console.log(`Aplankiau: ${miestai[0]}.`);
// console.log(`Aplankiau: ${miestai[1]}.`);
// console.log(`Aplankiau: ${miestai[2]}.`);

const miestai = ['Vilnius', 'Kaunas', 'Anyksciai'];

for (let i = 0; i < miestai.length; i++)
console.log(`Aplankiau: ${miestai[i]}.`);

console.log('----------------');

/* 
Isvardinti saraso narius is galo.
*/

const abc = ['a', 'b', 'c'];

console.log(abc);

for (let i = abc.length - 1; i >= 0; i--) {
    console.log(abc[i]);

}
 console.log('--------------');

 console.clear();


 /* 
.
*/

 // const text = 'dodekahedronas';
 const text = 'ottoman';

 for (let i = 0; i < text.length; i++) {
     console.log(text[i]);
 }

 console.log(text.length);

 console.log('--------------');


 /* 
Duodamas zodis ir is jo reikia isrinkti kas antra raide ir isspausdinti kas gaunasi.
pvz.: abcdef -> bdf
*/

const tekstas = 'abcdef';
const kiekis = tekstas.length;
let rezultatas = '';

console.log(tekstas);
console.log(kiekis);

for (let i = 0; i < kiekis; i++) {
    if(i % 2 !== 0) {
        rezultatas +=tekstas[i];
    }
}

console.log(rezultatas);

console.log('--------------');

/* 
Duodamas zodis ir is jo reikia isrinkti kas antra raide ir isspausdinti kas gaunasi.
pvz.: pomidoras
*/

const zodis = 'pomidoras';
const step = 2 
let rez = '';

for (let i = step - 1; i < zodis.length; i = i + step) {
    const raide = zodis[i];
    rez = rez + raide;
}

console.log(rez);

console.log('--------------');

/*
const zodis = 'pomidoras';
const step = 2; 
const pirmosRaidesPozicija = step - 1;
let rez = '';

for (let i = pirmosRaidesPozicija; i < zodis.length; i = i + step) {
    const raide = zodis[i];
    rez = rez + raide;
}

console.log(rez);

*/ papildyt