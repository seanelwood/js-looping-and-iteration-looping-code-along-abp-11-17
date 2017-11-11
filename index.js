const names =["Bob","Jim","Sal"];

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails() {
  while (true) {

  }
  let i = 0;
  i++;
  console.log(`You got ${i} tails in a row!` )
}
tailsNeverFails();
