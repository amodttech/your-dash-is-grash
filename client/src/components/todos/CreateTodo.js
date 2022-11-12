import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [description, setDescription] = useState("");
  const [dateNow, setDateNow] = useState(null);

  useEffect(() => {
    setDateNow(Date.now());
  }, [dateNow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDateNow(Date.now());
    addTodo(formParams);
  };

  const formParams = {
    title: title,
    dueDate: dueDate,
    dateCreated: dateNow,
    description: description,
    complete: false,
  };

  console.log("formParams", formParams);

  return (
    <div>
      <p>CREATE TASK</p>
      <form onSubmit={handleSubmit}>
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
        <label>DUE DATE</label>
        <input
          type="date"
          id="due-date"
          name="due-date"
          onChange={(e) => setDueDate(e.target.value)}
        ></input>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
