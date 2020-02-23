import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <p> {this.props.todo.title} </p>
      </div>
    );
  }
}

// prop types
TodoItem.propTypes = {
  todo: propTypes.object.isRequired
};

export default TodoItem;
