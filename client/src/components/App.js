import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { CreateTodo } from "./todos/CreateTodo";
import TodoList from "./todos/TodoList";

function App() {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
