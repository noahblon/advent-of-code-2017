// --- Part Two ---
// As a stress test on the system, the programs here clear the grid and then store the value 1 in 
// square 1. Then, in the same allocation order as shown above, they store the sum of the values in 
// all adjacent squares, including diagonals.

// So, the first few squares' values are chosen as follows:

// Square 1 starts with the value 1.
// Square 2 has only one adjacent filled square (with value 1), so it also stores 1.
// Square 3 has both of the above squares as neighbors and stores the sum of their values, 2.
// Square 4 has all three of the aforementioned squares as neighbors and stores the sum of their 
// values, 4.
// Square 5 only has the first and fourth squares as neighbors, so it gets the value 5.
// Once a square is written, its value does not change. Therefore, the first few squares would 
// receive the following values:

// 147  142  133  122   59
// 304    5    4    2   57
// 330   10    1    1   54
// 351   11   23   25   26
// 362  747  806--->   ...
// What is the first value written that is larger than your puzzle input?

// Your puzzle input is still 312051.

import assert from 'assert';

const input = 312051;
//let input = 807;


const hashMap = {
    0: {
        0: 1
    }
}

const foo = {};
function solve(coord) {
    const foo = new Array(8);
    foo[3] = [coord.x - 1, coord.y + 1]; 
    foo[4] = [coord.x - 1, coord.y + 0]; 
    foo[5] = [coord.x - 1, coord.y - 1]; 
    
    foo[2] = [coord.x + 0, coord.y + 1]; 
    foo[6] = [coord.x + 0, coord.y - 1]; 

    foo[0] = [coord.x + 1, coord.y + 0];
    foo[1] = [coord.x + 1, coord.y + 1]; 
    foo[7] = [coord.x + 1, coord.y - 1]; 

    let sum = 0;  
    foo.forEach(item => {
        if(hashMap[item[0]]) {
            if(hashMap[item[0]][item[1]]) {
                sum += hashMap[item[0]][item[1]];
            }   
        }
    });
    return sum;
}

let sum = 0;
let ring = 1;
const currentCoord = { x: 0, y: 0 };
while(sum <= input) {
    const movements = ['right'];
    const ups = new Array(ring * 2 - 1).fill('up');
    const lefts = new Array(ring * 2).fill('left');   
    const downs = new Array(ring * 2).fill('down');        
    const rights = new Array(ring * 2).fill('right');    
    const moves = movements.concat(ups, lefts, downs, rights);
    console.log(moves);    
    for(let i = 0; i < moves.length; i++) {
        let move = moves[i];
        switch (move) {
            case 'up':
                currentCoord.y = currentCoord.y + 1;
                break;   
            case 'left':
                currentCoord.x = currentCoord.x - 1;
                break;                
            case 'down':
                currentCoord.y = currentCoord.y - 1;
                break;                   
            case 'right':
                currentCoord.x = currentCoord.x + 1;
                break;                   
        }
        if(hashMap[currentCoord.x] === undefined) {
            hashMap[currentCoord.x] = {};                    
        }
        hashMap[currentCoord.x][currentCoord.y] = solve(currentCoord);
        sum = solve(currentCoord);
        if (sum > input) { break; }
    }
    ring++;
}

console.log(sum);

