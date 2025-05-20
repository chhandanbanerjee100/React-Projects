import { useState } from "react";
import "./index.css";
import Board from "./Board";

const size = 3;

const arr = Array(size)
  .fill()
  .map(() => Array(size).fill(null));

export default function Tictac() {
  const [board, setBoard] = useState(arr);
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = (board, size) => {
    // Check Row Wise

    for (let i = 0; i < size; i++) {
      const symbol = board[i][0];

      if (symbol) {
        let winner = true;
        for (let j = 1; j < size; j++) {
          if (symbol !== board[i][j]) {
            winner = false;
            break;
          }
        }
        if (winner) {
          return symbol;
        }
      }
    }

    // check col wise

    for (let i = 0; i < size; i++) {
      const symbol = board[0][i];

      if (symbol) {
        let winner = true;
        for (let j = 1; j < size; j++) {
          if (symbol !== board[j][i]) {
            winner = false;
            break;
          }
        }
        if (winner) {
          return symbol;
        }
      }
    }

    // check 2 diagonals
    let symbol = board[0][0];
    let winner = true;
    if (symbol) {
      for (let i = 1; i < size; i++) {
        if (symbol !== board[i][i]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }

    symbol = board[0][size - 1];
    winner = true;
    if (symbol) {
      for (let i = 1; i < size; i++) {
        if (symbol != board[i][size - 1 - i]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }

    return null;
  };

  const winner = checkWinner(board, size);

  const status = winner
    ? `${winner} is Winner`
    : isXNext
    ? "Player X's turn"
    : "Player O's turn";

  const handleClick = (rowIdx, colIdx) => {
    if (winner || board[rowIdx][colIdx]) return;

    const newBoard = JSON.parse(JSON.stringify(board)); // Deep copying.
    newBoard[rowIdx][colIdx] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <div className="wrapper">
      <div>
        <div className="stats">
          <div>{status}</div>
          <button className="reset-button">Reset Game</button>
        </div>
        <Board size={size} handleClick={handleClick} board={board} />
      </div>
    </div>
  );
}
