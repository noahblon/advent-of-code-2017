/*
--- Part Two ---
For added security, yet another system policy has been put in place. Now, a valid passphrase must
contain no two words that are anagrams of each other - that is, a passphrase is invalid if any 
word's letters can be rearranged to form any other word in the passphrase.

For example:

abcde fghij is a valid passphrase.
abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first 
word.
a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another
word.
iiii oiii ooii oooi oooo is valid.
oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
Under this new system policy, how many passphrases are valid?
*/

import input from './input';

function parseInput(input) {
    return input
        .split('\n')
        .map(d => d.split(/\s/));
}

function findAnagrams(word) {
    const anagrams = {};
    const letters = word.split('').sort().join('');
    anagrams[letters] = ''
    return Object.keys(anagrams);
}

function run(input) {
    input = parseInput(input);
    let valid = input.length;
    input.forEach(passphrase => {
        let anagrams = [];        
        for (let i = 0; i < passphrase.length; i++) {
            const word = passphrase[i];
            anagrams = anagrams.concat(findAnagrams(word));
        }
        for (let i = 0; i < anagrams.length; i++) {
            const anagram = anagrams[i];
            const filteredAnagrams = anagrams.filter(word => word === anagram);
            if (filteredAnagrams.length > 1) {
                valid--;
                break;
            }
        }
    });
    return valid;
}

console.log(run(input));
