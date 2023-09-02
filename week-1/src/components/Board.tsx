import { sqaureValues } from "../types/Game";
import Box from "./Box";

//step2
// const Board = () => {
//   const handleClick = () => {
//     console.log("click Box");
//   };
//   return (
//     <>
//       <div className="board-row">
//         <Box value={null} onClick={handleClick}></Box>
//         <Box value={null} onClick={handleClick}></Box>
//         <Box value={null} onClick={handleClick}></Box>
//       </div>
//       <div className="board-row">
//         <Box value={null} onClick={handleClick}></Box>
//         <Box value={null} onClick={handleClick}></Box>
//         <Box value={null} onClick={handleClick}></Box>
//       </div>
//       <div className="board-row">
//         <Box value={null} onClick={handleClick}></Box>
//         <Box value={null} onClick={handleClick}></Box>
//         <Box value={null} onClick={handleClick}></Box>
//       </div>
//     </>
//   );
// };
//step3
const Board = ({
  squares,
  onPlay,
  currentUser,
}: {
  squares: Array<sqaureValues>;
  onPlay: (squares: Array<sqaureValues>) => void;
  currentUser: "O" | "X";
}) => {
  const handleClick = (idx: number) => {
    const newSquares = [...squares];
    newSquares[idx] = currentUser;
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
