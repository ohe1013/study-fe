//step2
const History = ({
  historyList,
  onClick,
}: {
  historyList?: Array<number>;
  onClick: () => void;
}) => {
  return (
    <ol>
      {historyList?.map((history, idx) => (
        <li key={idx}>
          <button onClick={onClick}>{history}</button>
        </li>
      ))}
    </ol>
  );
};

export default History;
