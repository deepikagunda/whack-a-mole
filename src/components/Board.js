import { useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";
const Board = (props) => {
  const { rows, cols, handleClick, molePosition } = props;
  let idx = 1;
  useEffect(() => {
    console.log({ rows, cols });
  }, [rows, cols]);

  return (
    <div className="Board">
      {Array(rows)
        .fill(null)
        .map(() => {
          return (
            <div className="row">
              {Array(cols)
                .fill(null)
                .map(() => (
                  <Cell
                    key={idx++}
                    idx={idx}
                    onClick={handleClick}
                    molePosition={molePosition}
                  />
                ))}
            </div>
          );
        })}
    </div>
  );
};
export default Board;
