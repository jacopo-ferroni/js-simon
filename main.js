const display = document.querySelector(`.display`);
const btnStart = document.querySelector(`.btn-start`);

display.innerHTML = `Pronto?`;

btnStart.addEventListener(`click`, () => {

    const array1 = [];
    console.table(array1);
    display.innerHTML = ``;
    
    for(let i = 0; i < 5; i++) {
        array1[i] = numberGenerator();
        console.log(array1[i]);
        display.innerHTML += `${array1[i]} `;
    }

    setTimeout(() => {
        display.innerHTML = ``;
        const array2 = [];
        let index = 0;
        for(let i = 0; i < 5; i++) {
            array2[i] = parseInt(prompt(`Inserisci numero!`));

            if(array1[i] === array2[i]) {
                index++;
            }
        }

        if(index === 5) {
            display.innerHTML = `HAI VINTO, INDOVINANDO TUTTI I NUMERI!`;
        }
        else {
            display.innerHTML = `HAI PERSO!`;
        }
    }, 30000);
    

        
    

});






function numberGenerator () {
    const number = Math.floor(Math.random() * 100) + 1;
    return  number;
}






/* 
Crea un array di 4 oggetti che rappresentano dei post
Ogni post avrà come proprietà un titolo e un numero di like da generare random in un range da 10 a 100.
Stampare la somma totale di like dei posts (senza metodo reduce) e la media di like per post
*/

/* 
const posts = [
    {
        user : `Jacopo ferroni`,
        comment : getRndComment(),
        like : getRndLike(10, 100),
    },

    {
        user : `Giulia ferroni`,
        comment : getRndComment(),
        like : getRndLike(10, 100),
    },

    {
        user : `Giuliana ferroni`,
        comment : getRndComment(),
        like : getRndLike(10, 100),
    },

    {
        user : `Carlo ferroni`,
        comment : getRndComment(),
        like : getRndLike(10, 100),
    },
];

let somma = 0;

for(let key in posts) {
    somma += posts[key].like;
}

const media = somma / 4;

console.log(somma);
console.log(media);





function getRndLike(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getRndComment() {
    return Math.floor(Math.random() * 101);
} 
*/




































/* 
Crea un array di 3 prodotti
Ogni prodotto avrà le seguenti proprietà:
- nome
- prezzo
- disponibile (true o false)
Stampare per ogni prodotto: nome, prezzo e se è disponibile oppure no nel formato:
- se disponibile: NOME_PRODOTTO costa PREZZO_PRODOTTO ed è disponibile.
- se non disponibile: NOME_PRODOTTO costa PREZZO_PRODOTTO ma non è disponibile.
*/

/* 
const product = [

    {
        nome : `AUDI R8`,
        price : 20000,
        disponibilità : 0,
    },

    {
        nome : `AUDI Q8`,
        price : 80000,
        disponibilità : 1,
    },

    {
        nome : `AUDI RS`,
        price : 15000,
        disponibilità : 1,
    },

]

for(let key in product) {
    
    if(product[key].disponibilità === 1) {
        console.log(`${product[key].nome} costa ${product[key].price}€ ed è disponibile.`);
    }
    else {
        console.log(`${product[key].nome} costa ${product[key].price}€ e non è disponibile.`);
    }
} 
*/













































/* 
Crea un array composto da 4 users.
ogni user deve avere le seguenti informazioni:
- nome
- cognome
- ruolo
Creare un nuovo array contenente solo il nome di ogni persona
:ultrafastparrot:
1
*/

/* const array = [
    {
    nome : `Michele`,
    cognome : `Ettori`,
    role : `Ginecologo`,
    },

    {
    nome : `Jacopo`,
    cognome : `Ferroni`,
    role : `Medico`,
    },

    {
    nome : `Carlo`,
    cognome : `Ferroni`,
    role : `Meccanico`,
    },

    {
    nome : `Paola`,
    cognome : `Cardone`,
    role : `Fisioterapista`,
    },
];

const newArray = array.map( (element) => {
    return element.nome;
});

console.log(array);
console.log(newArray); */