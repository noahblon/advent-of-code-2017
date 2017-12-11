/*
Now, the jumps are even stranger: after each jump, if the offset was three or more, instead decrease 
it by 1. Otherwise, increase it by 1 as before.

Using this rule with the above example, the process now takes 10 steps, and the offset values after 
finding the exit are left as 2 3 2 3 -1.

How many steps does it now take to reach the exit?
*/

import input from './input';
// const input = `0
// 3
// 0
// 1
// -3`;

function parseInput(input) {
    return input
        .split('\n')
        .map(num => Number(num));
}

let currentIndex = 0;
let steps = 0;
function run(input) {
    input = parseInput(input);
    let current = input[currentIndex];
    while (current !== undefined) {
        current = input[currentIndex];
        if (Math.abs(current) >= 3) {
            if (current < 0) {
                input[currentIndex] = input[currentIndex] + 1;                
            } else {
                input[currentIndex] = input[currentIndex] - 1;             
            }
        } else {
            input[currentIndex] = input[currentIndex] + 1;
        }
        currentIndex += current;        
        steps++;
    }
    return steps - 1;
}

console.log(`The answer is: ${run(input)}`);
