let notebook = new Map();
notebook["Maçã"] = 0.63;
notebook["Leite"] = 1.49;
notebook.abacate = 1.49;

console.log(notebook["Maçã"]);
console.log(notebook.abacate);

let poll = new Map();

function verifyVoter(name) {
  if (poll.has(name)) {
    console.log("Already voted, send away!");
  } else {
    poll.set(name, true);
    console.log("Let him vote!");
  }
}

verifyVoter("Tom");
verifyVoter("Mike");
verifyVoter("Tom");
