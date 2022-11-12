import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { CreateTodo } from "./CreateTodo";

export const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
