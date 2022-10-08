import React, { useState } from "react";
import { useNavigate } from "react-router";
import { APIURL } from "../constants";

function CreateTodo() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    task: "",
    project: "",
    priority: "",
    due_date: "",
  });

  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  async function onSubmit(e) {
    e.preventDefault();

    const newTodo = { ...form };

    await fetch(APIURL + "/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({
      task: "",
      project: "",
      priority: "",
      due_date: "",
    });
    navigate("/");
  }

  return <div>Create</div>;
}

export default CreateTodo;
