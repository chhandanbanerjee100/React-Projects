import "./index.css";

function Cell({ value, onClick, isDisabled }) {
  return (
    <button disabled={isDisabled} onClick={onClick} className="cell">
      {value}
    </button>
  );
}

export default function Board({ board, handleClick, size = 3 }) {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
          return (
            <Cell
              onClick={() => handleClick(rowIndex, colIndex)}
              key={colIndex}
              value={col}
              isDisabled={col !== null}
            />
          );
        });
      })}
    </div>
  );
}
