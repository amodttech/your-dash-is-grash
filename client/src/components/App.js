import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { CreateTodo } from "./todos/CreateTodo";
import TodoList from "./todos/TodoList";

function App() {
  const [items, setItems] = useState([]);

  const [locallyStored, setLocallyStored] = useState([])

  const addTodo = (params) => {
    setItems([...items, params]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const itemList = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setLocallyStored(itemList);
    }
  }, []);

  return (
    <div>
      <CreateTodo addTodo={addTodo} />
      <TodoList listData={locallyStored} />
    </div>
  );
}

export default App;
