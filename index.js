const names =["Bob","Jim","Sal"];

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

// /*We're going to print out some welcome badges for new Flatbook employees. Build a function named `printBadges()` that accepts one argument, an array of employee names. Create a `for` loop with a counter that starts at `0` and increments at the end of each loop. The condition should halt the `for` loop after the last name in the array is printed out in the loop body.
// Inside the loop, use `console.log()` to print out a badge for each employee, as follows:
// ```js
// printBadges(['Ada', 'Brendan', 'Ali']);
// // LOG: Welcome Ada! You are employee #1.
// // LOG: Welcome Brendan! You are employee #2.
// // LOG: Welcome Ali! You are employee #3.
// // => ["Ada", "Brendan", "Ali"]
// ```
// After the loop completes, have the function return the original array.
//


//printBadges(names);

// ### Assignment
// We're going to create a little game for our Flatbook users to play when they're bored. Create a function named `tailsNeverFails()` that takes no arguments. In the function body, use a `while` loop with a condition that simulates a coin flip (two equally likely outcomes). For inspiration, check out the `maybeTrue()` example above. If the condition evaluates to `true`, the coin landed on 'Tails' and is flipped again. If the condition evaluates to `false`, the coin landed on 'Heads', and the 'Tails' streak is broken. At the end of the function, `return` a message to the user indicating how many times the coin landed on 'Tails' in a row, e.g.:
// ```js
// tailsNeverFails();
// // => "You got 3 tails in a row!"
//
// tailsNeverFails();
// // => "You got 0 tails in a row!"
//
// tailsNeverFails();
// // => "You got 5 tails in a row!"
// ```
function tailsNeverFails() {
  while (true) {

  }
  let i = 0;
  i++;
  console.log(`You got ${i} tails in a row!` )
}
tailsNeverFails();
