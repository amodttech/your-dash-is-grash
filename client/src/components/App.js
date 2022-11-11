import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./TodoList";

function App() {
  return (
    <Router>
      <TodoList />
    </Router>
  );
}

export default App;
