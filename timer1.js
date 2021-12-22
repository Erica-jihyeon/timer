const args = process.argv.slice(2).sort((a,b) => a-b).map(e => {
  if (e == Number(e)) {
    return Number(e);
  } else {
    return e;
  }
});
//console.log(args);

if (args.length === 0) {
  console.log('no input');
} else if (args.some(e => e < 0)) {
  console.log('negative time');
} else if (args.some(e => typeof e !== 'number')) {
  console.log('not a number')
} 
else {
  for (const time of args) {
    setTimeout(() => {
      //beep sound
      process.stdout.write('\x07');
    }, time * 1000);
  }
}
