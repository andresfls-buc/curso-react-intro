import React from "react";
import { CompleteIcon } from "../CompleteIcon";
import { DeleteIcon } from "../DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        className={`Icon Icon-check ${
          props.completed ? "Icon-check--active" : ""
        }`}
        onClick={props.onComplete}
      />
      <p
        className={`TodoItem-p ${
          props.completed ? "TodoItem-p--complete" : ""
        }`}
      >
        {props.text}
      </p>
      <DeleteIcon className="Icon Icon-delete" onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
