function createBoard(size = 8) {
    const board = document.createElement('div');
    board.classList.add('board');
  
    for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
  
    for (let j = 0; j < size; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
  
    if ((i + j) % 2 === 0) {
        square.classList.add('white');
    } else {
        square.classList.add('green');
        if(i< 3){
           const blackPiece = document.createElement('div')
           blackPiece.classList.add("black-piece")
           square.appendChild(blackPiece)
        }else if(i >= size - 3){
           const whitePiece = document.createElement('div')
           whitePiece.classList.add("white-piece")
           square.appendChild(whitePiece)
        }
    }
  
    row.appendChild(square);
    }
  
    board.appendChild(row);
}
  
 return board;
}
  
const chessboard = createBoard();
document.body.appendChild(chessboard);