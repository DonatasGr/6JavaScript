/*
Palyginomo salyga (if):
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

/*
Gaimos strukturos:
if () {}
if () {} else {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}

*/

cons accountBalance = 200;
const transfer = 200;

if (accountBalance < transfer) {
    console.log('Bango zinute: saskaitoje truksta pinigu.');

}

if (accountBalance >= transfer) {
    console.log('Bango zinute: pavedimas padarytas.');

}
 if (accountBalance >= transfer) {
console.log('Bango zinute: pavedimas padarytas.')
  } else  {
      console.log('Bango zinute: saskaitoje truksta pinigu.');
  }

  const akys = 'zalios';

  if (akys == 'melynos') {
      console.log('Grazios sirdies zmogus');
    
  } else {
      console.log('Ne melynakiai... do\'h...');
  
    }else if (akys == 'zalios') {
        console.log('Melagiai');
    }else if (akys === 'raudonos') {
        console.log('Programuotojas..');
    }else{
        console.log('A tu turi akis?...');
    }

    console.log('Kas toliau?...');


    const akys2 = 'zalios';

    if (akys == 'melynos') {
        console.log('Grazios sirdies zmogus');
    } else {
        if (akys2 == 'zalios') {
            console.log('Melagiai');
        } else {
            if (akys2 == 'raudonos') {
                console.log('Programuotojas');
            } else {
            console.log('A tu turi akis?...');
    }

 const pirmas = 8;
 const antras = 8;

 if (pirmas == antras) {
     console.log(true);

 } else {
     console.log(false);

    }


    const zodis1 = 'Labas';
    const zodis2 = 'rytas';

    if (zodis1 < zodis2) {
        console.log(true);
    } else {
        console.log(false);
    }
