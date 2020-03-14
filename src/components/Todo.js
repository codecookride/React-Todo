import React from "react";

const Todo = props => {
    console.log("in Todo",props)
  return (
    <div
    className={`item${props.item.complete ? " complete" : ""}`}
    onClick={e => props.toggleDone(props.item.id)}
    
    >
    
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
