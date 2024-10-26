javascript
// Write code to display a triangle in the console
let triangle = "";
for (let i = 1; i <= 4; i++) {
    console.log(triangle += "#");
}
for (let i = 3; i >= 1; i--) {
    console.log("#".repeat(i));
}


javascript
// Write code that prints all of the numbers from 1 to 100 with specific exceptions
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

javascript
// Write code that creates an 8x8 grid, similar to a chessboard
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
