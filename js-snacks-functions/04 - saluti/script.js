/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

// Dichiara la funzione qui.
function greet(name) {
    return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
const result = greet(name);
console.log(result);

// Risultato atteso se si passa 'Mario': Ciao Mario
