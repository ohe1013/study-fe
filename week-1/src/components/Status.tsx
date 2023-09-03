import { useState } from "react";

const gameSituation = {
  ing: true,
  end: false,
};

//step1
// const Status = () => {
//   return <div className="status">nextUser is X</div>;
// };

//step2
// const Status = ({
//   gameStatus,
//   user,
// }: {
//   gameStatus: "ing" | "end";
//   user: string;
// }) => {
//   return (
//     <div className="status">
//       {(gameSituation[gameStatus] ? "nextUser is " : "winner is ") + user}
//     </div>
//   );
// };l
//step4
const Status = ({
  gameStatus,
  user,
}: {
  gameStatus: keyof typeof gameSituation;
  user: "O" | "X";
}) => {
  return (
    <div className="status">
      {(gameSituation[gameStatus] ? "nextUser is " : "winner is ") + user}
    </div>
  );
};

export default Status;
