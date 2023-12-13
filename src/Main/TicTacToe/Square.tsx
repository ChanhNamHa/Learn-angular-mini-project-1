import React from 'react';

interface SquareProps {
  value: any;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    const squareColor = (): string => {
     switch (value) {
        case 'O': return 'green-color';
        case 'X': return 'red-color';
     
        default:
            return '';
     }   
    }
  return (
    <button className={ `square ${squareColor()}`} onClick={onSquareClick} >
      {value}
    </button>
  );
};

export default Square;