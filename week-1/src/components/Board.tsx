import { boxValues } from "../types/game";
import Box from "./Box";
import { useState } from "react";
//step1
// const Board = () => {
//   return (
//     <>
//       <div className="board-row">
//         <Box />
//         <Box />
//         <Box />
//       </div>
//       <div className="board-row">
//         <Box />
//         <Box />
//         <Box />
//       </div>
//       <div className="board-row">
//         <Box />
//         <Box />
//         <Box />
//       </div>
//     </>
//   );
// };
//step2
// const Board = ({ squares }: { squares: Array<boxValues> }) => {
//   return (
//     <>
//       <div className="board-row">
//         <Box value={squares[0]} />
//         <Box value={squares[1]} />
//         <Box value={squares[2]} />
//       </div>
//       <div className="board-row">
//         <Box value={squares[3]} />
//         <Box value={squares[4]} />
//         <Box value={squares[5]} />
//       </div>
//       <div className="board-row">
//         <Box value={squares[6]} />
//         <Box value={squares[7]} />
//         <Box value={squares[8]} />
//       </div>
//     </>
//   );
// };

//step3
// const calculateWinner = (squares: Array<boxValues>) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return "end";
//     }
//   }
//   return "ing";
// };
// const Board = ({
//   squares,
//   onPlay,
//   user,
// }: {
//   squares: Array<boxValues>;
//   onPlay: (squares: Array<boxValues>) => void;
//   user: "O" | "X";
// }) => {
//   const [gameStatus, setGameStatus] = useState("ing");
//   const handleClick = (idx: number) => {
//     setGameStatus(calculateWinner(squares));
//     if (calculateWinner(squares) === "end" || squares[idx]) return;
//     const newSquares = [...squares];
//     newSquares[idx] = user;
//     onPlay(newSquares);
//   };
//   return (
//     <>
//       <div className="board-row">
//         <Box value={squares[0]} onClick={() => handleClick(0)} />
//         <Box value={squares[1]} onClick={() => handleClick(1)} />
//         <Box value={squares[2]} onClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Box value={squares[3]} onClick={() => handleClick(3)} />
//         <Box value={squares[4]} onClick={() => handleClick(4)} />
//         <Box value={squares[5]} onClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Box value={squares[6]} onClick={() => handleClick(6)} />
//         <Box value={squares[7]} onClick={() => handleClick(7)} />
//         <Box value={squares[8]} onClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// };
// step4
const Board = ({
  squares,
  onPlay,
  gameStatus,
  user,
}: {
  squares: Array<boxValues>;
  onPlay: (squares: Array<boxValues>) => void;
  gameStatus: "ing" | "end";
  user: "O" | "X";
}) => {
  const handleClick = (idx: number) => {
    if (gameStatus === "end" || squares[idx]) return;
    const newSquares = [...squares];
    newSquares[idx] = user;
    onPlay(newSquares);
  };
  return (
    <>
      {squares
        .filter((_, i) => i % 3 === 0)
        .map((_, _idx: number) => {
          const idx = _idx * 3;
          return (
            <div key={idx} className="board-row">
              <Box
                key={idx}
                value={squares[idx]}
                onClick={() => handleClick(idx)}
              />
              <Box
                key={idx + 1}
                value={squares[idx + 1]}
                onClick={() => handleClick(idx + 1)}
              />
              <Box
                key={idx + 2}
                value={squares[idx + 2]}
                onClick={() => handleClick(idx + 2)}
              />
            </div>
          );
        })}
    </>
  );
};

export default Board;
