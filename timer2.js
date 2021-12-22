const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (input) => {
  if (input === 'b') {
    rl.output.write('\x07');
  } else if (Number.isInteger(Number(input)) && input > 0 && input < 10) {
    console.log('setting timer for x seconds...');
    setTimeout(() => {
      rl.output.write('\x07');
    }, input * 1000);
  } else {
    console.log(`${input} is incorrect input`)
  }
})


rl.on('SIGINT', function() {
  console.log("Thanks for using me, ciao!");
  process.exit();
});