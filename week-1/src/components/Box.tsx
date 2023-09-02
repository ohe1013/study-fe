import { sqaureValues } from "../types/Game";

//step2
const Box = ({
  value,
  onClick,
}: {
  value?: sqaureValues;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

export default Box;
