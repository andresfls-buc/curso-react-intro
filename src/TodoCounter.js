import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      You have completed <span>{completed} </span> of <span>{total}</span>{" "}
      TODO'S
    </h1>
  );
}

export { TodoCounter };
