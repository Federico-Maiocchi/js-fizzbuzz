// console.log('hello')

// - Genare un ciclo di numeri da 1 100 in modo crescente
//     - dichiarare l'indice
//     - verificare le condizioni
//     - eseguire il codice 
//     - eseguire istruzioni incremento
//     - verificare della condizione
//     - eseguire tutto il codice delle graffe

for (let i = 0; i < 100; i++) {
    const n = i + 1;
    // console.log(n)
    
    const mult3 = n % 3;
    
    const mult5 = n % 5;

    

    // const 

    if (mult3 === 0 && mult5 === 0) {
        console.log('fizzbuzz');
    }

    else if (mult3 === 0) {
        console.log('fizz');
    }

    else if (mult5 === 0) {
        console.log('buzz');
    }

    else {
        console.log(n)
    }
    
    
}