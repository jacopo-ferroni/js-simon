const display = document.querySelector(`.display`);
const btnStart = document.querySelector(`.btn-start`);
const noIndo = document.querySelector(`.no-indo`);

display.innerHTML = `Pronto?`;

btnStart.addEventListener(`click`, () => {

    const array1 = [];
    console.table(array1);
    display.innerHTML = ``;
    const array3 = [];
    
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
            else {
                array3.push(array1[i]);
            }
        }

        if(index === 5) {
            display.innerHTML = `HAI VINTO!`;
        }
        else {
            display.innerHTML = `HAI PERSO!`;
        }

        noIndo.innerHTML = `I numeri non indovinati sono: `;
        array3.forEach((element) => {
            noIndo.innerHTML += `${element} `; 
        });
    }, 3000);
});


function numberGenerator () {
    const number = Math.floor(Math.random() * 100) + 1;
    return  number;
}