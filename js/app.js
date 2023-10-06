// console.log('hello')

// - Genare un ciclo di numeri da 1 100 in modo crescente
//     - dichiarare l'indice
//     - verificare le condizioni
//     - eseguire il codice 
//     - eseguire istruzioni incremento
//     - verificare della condizione
//     - eseguire tutto il codice delle graffe

const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

for (let i = 0; i < 100; i++) {
    const n = i + 1;
    // console.log(n)
    

    // Aggiungi Stringa
    // const boxString = '<div class="box">' + n + '</div>' 
    // gridDOMElement.innerHTML += boxString

    // Creazione oggetti
    // const boxDomElement = document.createElement('div');
    // boxDomElement.classList.add('box')
    // boxDomElement.innerHTML = n
    // gridDOMElement.append(boxDomElement)

    let stamp 
    // multipli di 3 che coincidono con multipli di 5
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('fizzbuzz');
        stamp = 'fizzbuzz';

    }
    // multipli di 3
    else if (n % 3 === 0) {
        console.log('fizz');
        stamp = 'fizz'       
    }
    // multipli di 5
    else if (n % 5 === 0) {
        console.log('buzz');
        stamp = 'buzz'   
    }
    // numeri normali
    else {
        console.log(n);
        stamp = n;
    }
    
    const boxDomElement = document.createElement('div');
    boxDomElement.classList.add('box');
    gridDOMElement.append(boxDomElement);
    boxDomElement.innerHTML = stamp;
}