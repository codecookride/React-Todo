import React from 'react';
import TodoList from "./components/TodoList"
 import TodoForm from "./components/TodoForm"
 import "./components/styles.css";
 

 const todo = [
  {
    name: "learn",
    id: 123,
    complete: false
    
  }
 ]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo : todo
    };
  }

  toggleDone = itemId => {
    console.log(" itemId: ", itemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    });
  };


  addItem = itemName => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          name: itemName,
          complete: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };

  clearDone = () => {
   
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.complete;
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
     
        <TodoForm addItem={this.addItem}/>
        <TodoList todo={this.state.todo}
        toggleDone={this.toggleDone}
        clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
