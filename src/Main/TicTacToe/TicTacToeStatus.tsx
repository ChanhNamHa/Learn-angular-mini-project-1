import React from "react";

interface RoundProps {
  index: number;
  onRoundClick: () => void;
}
const TicTacToeStatus: React.FC<RoundProps> = ({ index, onRoundClick }) => {
  let buttonLabel;
  switch (index) {
    case 0:
      buttonLabel = "Restart";
      break;
    default:
      buttonLabel = `Round ${index}`;
  }
  return (
    <button className="round-button" onClick={onRoundClick}>
      {buttonLabel}
    </button>
  );
};
export default TicTacToeStatus;
