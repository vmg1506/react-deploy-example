import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <form
          className="bg-slate-800 p-10 mb-4"
          onSubmit={handleSubmit}
        >
        <h1 className="text-2xl text-white font-bold text-center mb-3">Crea tu tarea</h1>
          <input
            className="bg-slate-200 p-3 w-full mb-2 border-solid border-2 border-sky-500 rounded-md"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe tu tarea"
            value={title}
            autoFocus
          />

          <textarea
            className="bg-slate-200 p-3 w-full mb-2 border-solid border-2 border-sky-500 rounded-md"
            placeholder="Escriba descripcion de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <button className=" w-full bg-indigo-500 px-3 py-1 text-white rounded-md">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
