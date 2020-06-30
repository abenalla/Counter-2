import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };

  addItem = (event) => {
    event.preventDefault();
    console.log("addItem Method fired");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input
            onChange={this.handleChange}
            name="taskName"
            type="text"
            placeholder="Add todo here!"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}
export default TodoList;
