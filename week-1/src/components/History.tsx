import { Dispatch, SetStateAction } from "react";
import { boxValues } from "../types/game";

//step1
// const History = () => {
//   const historyList: Array<number> = new Array(9).fill(0);
//   return (
//     <ol>
//       {historyList?.map((history, idx) => (
//         <li key={idx}>
//           <button>
//             {idx !== 0 ? "Go to move #" + idx : "Go to gameStart "}
//           </button>
//         </li>
//       ))}
//     </ol>
//   );
// };
//step2
// const History = ({ historyList }: { historyList: Array<Array<boxValues>> }) => {
//   return (
//     <ol>
//       {historyList?.map((history, idx) => (
//         <li key={idx}>
//           <button>
//             {idx !== 0 ? "Go to move #" + idx : "Go to gameStart "}
//           </button>
//         </li>
//       ))}
//     </ol>
//   );
// };
//step3
// const History = ({
//   historyList,
//   onClick,
// }: {
//   historyList?: Array<Array<boxValues>>;
//   onClick: (idx: number) => void;
// }) => {
//   return (
//     <ol>
//       {historyList?.map((history, idx) => (
//         <li key={idx}>
//           <button onClick={() => onClick(idx)}>
//             {idx !== 0 ? "Go to move #" + idx : "Go to gameStart "}
//           </button>
//         </li>
//       ))}
//     </ol>
//   );
// };
const History = ({
  historyList,
  onClick,
}: {
  historyList?: Array<Array<boxValues>>;
  onClick: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <ol>
      {historyList?.map((history, idx) => (
        <li key={idx}>
          <button onClick={() => onClick(idx)}>
            {idx !== 0 ? "Go to move #" + idx : "Go to gameStart "}
          </button>
        </li>
      ))}
    </ol>
  );
};

export default History;
