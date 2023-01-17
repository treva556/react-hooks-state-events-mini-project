import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  //making a new task with the text and category
  const [formData, setFormData] = useState({
    text: '',
    category: "Code"
  })

  
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    
    onTaskFormSubmit(newTask)
    setFormData({
      text: '',
      category: "Code"
    })
  }

  return (
   
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        {/* everytime user type something in it, it  will catch it and call the handleChange and it will be saved as text in formData */}
        <input
          type="text"
          name="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        {/* everytime the user type something in it, it will catch it call handleChange and it will be saved as the category in formData */}
        <select value={formData.category} onChange={handleChange}>
          {/* mapping thru the categories props that was send from App.js */}
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;