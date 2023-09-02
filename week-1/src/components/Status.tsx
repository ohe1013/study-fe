const gameSituation = {
  ing: true,
  end: false,
};
//step2
const Status = ({
  gameStatus,
  showUser,
}: {
  gameStatus: keyof typeof gameSituation;
  showUser: "O" | "X";
}) => {
  return (
    <div className="status">
      {(gameSituation[gameStatus] ? "nextUser is " : "winner is ") + showUser}
    </div>
  );
};

export default Status;
