
import React from 'react';


class TodoForm extends React.Component {
    // Constructor with state
    constructor(props) {
      super(props);
      this.state = {
        listItem: ""
      };
    }
  
  
    handleChanges = e => {
     
      this.setState({ listItem: e.target.value });
    };
  
    // class property to submit form
    handleAddItem = e => {
      e.preventDefault();
      this.props.addItem(this.state.listItem);
     
      // update state of local component here
    };
  
    render() {
    
      return (
        <form onSubmit={this.handleAddItem}>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input
            type="text"
            name="item"
            value={this.state.listItem}
            onChange={this.handleChanges}
            placeholder="todo"
          />
          <button>Add</button>
 
        </form>
      );
    }
  }
  
  export default TodoForm;
  