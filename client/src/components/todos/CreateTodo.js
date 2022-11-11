import React, { useState } from "react";
import { connect } from "react-redux";

export const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState();
  const [description, setDescription] = useState("");

  console.log("title", title);
  console.log("description", description);

  const formParams = {
    title: title,
    dueDate: dueDate,
    dateCreated: Date.now(),
    description: description,
    complete: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo(formParams);
    setDescription(null);
    setTitle(null);
    setDueDate(null);
  };

  return (
    <div>
      <p>CREATE TASK</p>
      <form>
        <label>TITLE</label>
        <input
          type="text"
          id="new-todo-input"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>DESCRIPTION</label>
        <input
          type="text"
          id="new-todo-input"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
