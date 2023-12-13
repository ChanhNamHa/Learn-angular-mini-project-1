import { useState } from "react";
import TicTacToeStatus from "./TicTacToeStatus";
import Board from "./Board";
const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history?.[currentMove];
  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    console.log(currentMove);
  }
  function handleRound(statusMove: number) {
    if (statusMove === 0) {
      setHistory([Array(9).fill(null)]);
    }
    setCurrentMove(statusMove);
    console.log(statusMove);
  }
  return (
    <>
      <h3>Tic Tac Toe</h3>
      <div className="App-body">
        <div className="game">
          <h5>Game Play</h5>
          <Board
            xIsNext={xIsNext}
            round={currentMove}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-status">
          <h5>Game Status</h5>
          {history.map((value, index) => (
            <div key={index}>
              <TicTacToeStatus
                index={index}
                onRoundClick={() => handleRound(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TicTacToe;
