function regression(n) {
  console.log(n);
  if (n < 1) {
    return;
  } else {
    regression(n - 1);
  }
}
regression(10);

function salut(name) {
  console.log(`Hello ${name} !`);
  salut2(name);
  console.log(`preparing to say goodbye...`);
  bye();
}

function salut2(name) {
  console.log(`How are you ${name}?`);
}

function bye() {
  console.log("Ok, bye.");
}

console.log(salut("ricardo"));

function fat(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fat(n - 1);
  }
}

console.log(fat(5));
