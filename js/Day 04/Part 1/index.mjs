/*
--- Day 4: High-Entropy Passphrases ---
A new system policy has been put in place that requires all accounts to use a passphrase instead of 
simply a password. A passphrase consists of a series of words (lowercase letters) separated by 
spaces.

To ensure security, a valid passphrase must contain no duplicate words.

For example:

aa bb cc dd ee is valid.
aa bb cc dd aa is not valid - the word aa appears more than once.
aa bb cc dd aaa is valid - aa and aaa count as different words.
The system's full passphrase list is available as your puzzle input. How many passphrases are valid?
*/

import input from './input';

function parseInput(input) {
    return input
        .split('\n')
        .map(d => d.split(/\s/));
}

function run(input) {
    input = parseInput(input);
    let k = input.length;    
    input.forEach(item => {
        for (let i = 0; i < item.length; i++) {
            const part = item[i];
            const filteredInput = item.filter(k => k === part);
            if (filteredInput.length > 1) {
                k--;
                break;
            }
        }        
    });
    return k;
}

console.log(`The answer is: ${run(input)}`);
