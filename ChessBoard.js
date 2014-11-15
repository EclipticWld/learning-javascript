var size = 8;
var board = "";

for (var y = 1; y <= size; y++){
  for (var x = 1; x <= size; x++){
    if ((x + y) % 2 === 0)
      board += "#";  
    else
      board += " ";
  }
  board += "\n";
}

console.log(board);