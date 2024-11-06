/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log(result);

// Risultato atteso se si passa 'javascript': 3 (a, a, i)
