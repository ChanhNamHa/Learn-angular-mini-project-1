import React, { FC } from 'react';
import Square from './Square';

interface BoardProps {
  xIsNext: boolean;
  round: number;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
}
function calculateWinner(squares: (string | null)[], round: number | null): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares?.[a] && squares?.[a] === squares?.[b] && squares?.[a] === squares?.[c]) {
        return squares?.[a];
      }
      
    }
    if (round === 9) return '-';
    return null;
  }
  
const Board: FC<BoardProps> = ({ xIsNext, round, squares, onPlay }) => {
  function handleClick(i: number) {
    if (calculateWinner(squares, round) || squares?.[i]) {
      return;
    }
    const nextSquares = squares?.slice() || [];
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares, round);
  let status;
  switch (winner) {
    case '-':
        status = 'Draw';
        break;
    case null:
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        break;
    default:
        status = 'Winner: ' + winner;
        break;
  }
  
  const getSquare = (index: number) => {
    return squares?.at(index)
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={getSquare(0)} onSquareClick={() => handleClick(0)} />
        <Square value={getSquare(1)} onSquareClick={() => handleClick(1)} />
        <Square value={getSquare(2)} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={getSquare(3)} onSquareClick={() => handleClick(3)} />
        <Square value={getSquare(4)} onSquareClick={() => handleClick(4)} />
        <Square value={getSquare(5)} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={getSquare(6)} onSquareClick={() => handleClick(6)} />
        <Square value={getSquare(7)} onSquareClick={() => handleClick(7)} />
        <Square value={getSquare(8)} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
