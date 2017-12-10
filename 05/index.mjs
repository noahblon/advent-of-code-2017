// --- Day 3: Spiral Memory ---
// You come across an experimental new kind of memory stored on an infinite two-dimensional grid.

// Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then 
// counting up while spiraling outward. For example, the first few squares are allocated like this:

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
// While this is very space-efficient (no squares are skipped), requested data must be carried back 
// to square 1 (the location of the only access port for this memory system) by programs that can 
// only move up, down, left, or right. They always take the shortest path: the Manhattan Distance 
// between the location of the data and square 1.

// For example:

// Data from square 1 is carried 0 steps, since it's at the access port.
// Data from square 12 is carried 3 steps, such as: down, left, left.
// Data from square 23 is carried only 2 steps: up twice.
// Data from square 1024 must be carried 31 steps.
// How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?

// Your puzzle input is 312051.

import assert from 'assert';

const input = 312051;

function run(input) {
    let ring = 0;
    let x = 1;
    while (x < input) {
        ring += 1;
        x += 8 * ring;
    }

    var inflectionPoint4 = x - ring;
    var inflectionPoint3 = inflectionPoint4 - (ring * 2);
    var inflectionPoint2 = inflectionPoint3 - (ring * 2);
    var inflectionPoint1 = inflectionPoint2 - (ring * 2);
        
    let closest;
    const arr = [inflectionPoint4, inflectionPoint3, inflectionPoint2, inflectionPoint1];    
    arr.forEach(item => {
        if(!closest) {
            closest = item;        
        } else if (Math.abs(input - item) <= Math.abs(input - closest)) {
            closest = item;
        }
    });
    return Math.abs(input - closest) + ring;
}

console.log(`The answer is: ${run(input)}`);

const tests = [
    {
        input: 1,
        output: 0
    },
    {
        input: 12,
        output: 3
    },
    {
        input: 23,
        output: 2
    },
    {
        input: 1024,
        output: 31
    },
];

tests.forEach(test => {
    const answer = run(test.input);
    assert.strictEqual(answer, test.output);
});

