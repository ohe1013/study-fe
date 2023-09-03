import { useState } from "react";
import { boxValues } from "../types/game";

//step1
// const Box = () => {
//   return <button className="square"></button>;
// };

//step2
// const Box = ({ value }: { value: boxValues }) => {
//   return <button className="square">{value}</button>;
// };

//step3
// const Box = ({
//   value,
//   onClick,
// }: {
//   value?: boxValues;
//   onClick: () => void;
// }) => {
//   return (
//     <button onClick={onClick} className="square">
//       {value}
//     </button>
//   );
// };

//step4
const Box = ({
  value,
  onClick,
}: {
  value?: boxValues;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

export default Box;
