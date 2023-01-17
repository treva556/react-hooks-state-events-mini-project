import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const handleDeleteTask = (e) => {
    setTasks(tasks.filter((task) => task.text !== e))
  }
  // using the spread operator to add the new task and the old task
  const handleAdd = (e) => {
    setTasks([...tasks, e])
  }


//filtring the tasks via categories
  const visibleTasks = tasks.filter(task => category === "All" || task.category === category)



  return (
    <div className="App">

      <h2>My tasks</h2>
      {/* category component and passing the categories, selectedCategory and onSelect as a prop */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelect={setCategory} />

      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "ALL")}
        onTaskFormSubmit={handleAdd} />

      <TaskList
        tasks={visibleTasks}
        onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
