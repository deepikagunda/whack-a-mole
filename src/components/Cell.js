import "./Cell.css";

const Cell = (props) => {
  return (
    <div
      className={`cell ${props.molePosition === props.idx ? "showMole" : ""}`}
      id={props.idx}
      onClick={(e) => props.onClick(e)}
    />
  );
};
export default Cell;
