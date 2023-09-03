import { boxValues } from "../types/game";
import Board from "./Board";
import History from "./History";
import Status from "./Status";
import { useState } from "react";
//step1
// const Game = () => {
//   return (
//     <>
//       <div className="game">
//         <div className="game-board">
//           <Status />
//           <Board />
//         </div>
//         <History />
//       </div>
//     </>
//   );
// };

//step2
// const Game = () => {
//   const user = "X";
//   const historyList: Array<Array<boxValues>> = [new Array(9).fill(null)];
//   const squares: Array<boxValues> = new Array(9).fill(null);
//   const gameStatus = "ing";

//   return (
//     <>
//       <div className="game">
//         <div className="game-board">
//           <Status gameStatus={gameStatus} user={user} />
//           <Board squares={squares} />
//         </div>
//         <History historyList={historyList} />
//       </div>
//     </>
//   );
// };

//step3
const calculateWinner = (squares: Array<boxValues>) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return "end";
    }
  }
  return "ing";
};
// const Game = () => {
//   const [count, setCount] = useState(0);
//   const [user, setUser] = useState<"O" | "X">("X");
//   const [gameStatus, setGameStatus] = useState<"ing" | "end">("ing");
//   const [squares, setSquares] = useState(new Array(9).fill(null));
//   const [history, setHistory] = useState<Array<Array<boxValues>>>([
//     Array(9).fill(null),
//   ]);
//   const handlePlay = (nextSquares: Array<boxValues>) => {
//     setSquares(nextSquares);
//     const nextHistory = [...history.slice(0, count + 1), nextSquares];
//     setGameStatus(calculateWinner(nextSquares));
//     setHistory(nextHistory);
//     setCount(nextHistory.length - 1);
//     setUser((count + (gameStatus === "ing" ? 0 : 1)) % 2 === 0 ? "O" : "X");
//   };
//   const handleHistory = (idx: number) => {
//     setSquares(history[idx]);
//     setCount(idx + 1);
//   };
//   return (
//     <>
//       <div className="game">
//         <div className="game-board">
//           <Status gameStatus={gameStatus} user={user} />
//           <Board squares={squares} onPlay={handlePlay} user={user} />
//         </div>
//         <History historyList={history} onClick={handleHistory} />
//       </div>
//     </>
//   );
// };

const Game = () => {
  /**
   * 필요한 state history, setHistory (square를 담을 state)
   */
  const [history, setHistory] = useState<Array<Array<boxValues>>>([
    Array(9).fill(null),
  ]);
  /**
   * 현재 historyIdx를 나타내는
   */
  const [historyIdx, setHistoryIdx] = useState(0);
  const currentSquares = history[historyIdx];
  const handlePlay = (nextSquares: Array<boxValues>) => {
    const nextHistory = [...history.slice(0, historyIdx + 1), nextSquares];
    setHistory(nextHistory);
    setHistoryIdx(nextHistory.length - 1);
  };
  const gameStatus = calculateWinner(history[historyIdx]);
  const user =
    (historyIdx + (gameStatus === "ing" ? 0 : 1)) % 2 === 0 ? "X" : "O";

  return (
    <>
      <div className="game">
        <div className="game-board">
          {/* Status와 Board가 같은 gameStatus와 showUser를 공유함 */}
          <Status gameStatus={gameStatus} user={user} />
          <Board
            gameStatus={gameStatus}
            squares={currentSquares}
            onPlay={handlePlay}
            user={user}
          />
        </div>
        <History historyList={history} onClick={setHistoryIdx} />
      </div>
    </>
  );
};

export default Game;
