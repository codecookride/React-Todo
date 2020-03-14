import React from "react";

import Todo from "./Todo";

const TodoList = props => {
console.log("in Todo list",props) 

return (
    <div>
     
        {/* <Todo
          item={props.todo}
        /> */}
     {props.todo.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleDone={props.toggleDone}
        />
        
      ))}
    
    


<div>
<button  onClick={props.clearDone}>
Clear Done
     </button>
    
     </div>
     </div>
    
  );
};

export default TodoList;
