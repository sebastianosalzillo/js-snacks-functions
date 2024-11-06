/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterByInitial(array, letter) {
    return array.filter(name => name.charAt(0).toUpperCase() === letter.toUpperCase());
}

// Invoca la funzione qui e stampa il risultato in console
const result = filterByInitial(names, 'A');
console.log(result);

// Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
