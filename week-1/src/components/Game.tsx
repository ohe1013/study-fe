import { sqaureValues } from "../types/Game";
import Board from "./Board";
import History from "./History";
import Status from "./Status";
import { useState } from "react";
//step2
// const Game = () => {
//   const handleClickHistory = () => {
//     console.log("click history");
//   };
//   const historyList:Array<number> = []
//   return (
//     <>
//       <div className="game">
//         <div className="game-board">
//           <Status gameStatus="ing" showUser="X" />
//           <Board />
//         </div>
//         <History historyList={historyList} onClick={handleClickHistory} />
//       </div>
//     </>
//   );
// };

//step3
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const user = currentMove % 2 === 0 ? "X" : "O";
  const currentSquares = history[currentMove];
  const handlePlay = (nextSquares: Array<sqaureValues>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const historyList: Array<number> = [];
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Status gameStatus="ing" showUser={user} />
          <Board
            squares={currentSquares}
            onPlay={handlePlay}
            currentUser={user}
          />
        </div>
        <History historyList={historyList} onClick={() => console.log(1)} />
      </div>
    </>
  );
};

export default Game;
