import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";

export const CreateTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [description, setDescription] = useState("");
  const [dateNow, setDateNow] = useState(null);

  const [todo, setTodo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: title,
          dueDate: dueDate,
          dateCreated: Date.now(),
          description: description,
          complete: false,
        },
      ]);
    }
  };

  return (
    <div>
      <p>CREATE TASK</p>
      <form onSubmit={handleSubmit}>
        <label>TITLE</label>
        <input
          type="text"
          id="new-todo-input"
          name="title"
          placeholder="what is the task?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>DESCRIPTION</label>
        <input
          type="text"
          id="new-todo-input"
          name="description"
          placeholder="description"
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
