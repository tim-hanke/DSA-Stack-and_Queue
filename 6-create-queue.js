const Queue = require("./Queue-sll");

function main() {
  let starTrekQ = new Queue();

  ["Kirk", "Spock", "Uhura", "Sulu", "Chekov"].forEach((crewMember) => {
    starTrekQ.enqueue(crewMember);
  });

  console.table(starTrekQ);
}

main();
