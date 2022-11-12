import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { CreateTodo } from "./CreateTodo";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
        <CreateTodo />
        <TodoList todos={todos} />
    </div>
  )

};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
