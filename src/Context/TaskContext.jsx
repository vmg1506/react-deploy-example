import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { task as data } from "../Data/tasks.js";

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, settasks] = useState([]);

  const createTask = (task) => {
    settasks([...tasks, {
        title: task.title,
        id: tasks.length+1,
        description: task.description 
    }])
  }

  const deleteTask = (taskId) => {
    settasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    settasks(data);
  }, []);



  return (
        <TaskContext.Provider value={{
          tasks,
          createTask,
          deleteTask
        }}>
          {props.children}
        </TaskContext.Provider>
  )
}

