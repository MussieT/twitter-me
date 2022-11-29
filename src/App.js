import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"

function App() {
  const [ ThingsToDo, setThingsToDo ] = useState(
    [
        {
            id: '1',
            text: 'Doctors Appointment',
            day: 'Feb 5th 2023',
            reminder: true
        },
        {
            id: '2',
            text: 'Meeting at School',
            day: 'Jan 11 2023',
            reminder: false
        },
        {
          id: '3',
          text: 'Shopping',
          day: 'Jan 14 2023',
          reminder: false
        }
    ]
  )

  // Delete Task
  const deleteTask = (id) => {
    setThingsToDo(ThingsToDo.filter((task) => task.id != id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setThingsToDo(
      ThingsToDo.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)
    )
  }

  // Add Task
  const onAdd = (task) => {
    // console.log('obj: ', object)
    const id = Math.ceil(Math.random() * 1000) + 1
    const newThing = { id, ...task }
    setThingsToDo([...ThingsToDo, newThing]) 
  }

  return (
    <div  className='mt-10 mx-auto border border-black w-1/2 p-5 rounded-xl'>
          <Header title="Task Tracker" />
          <AddTask onAdd={onAdd} />
          {ThingsToDo.length ? <Tasks ThingsToDo={ThingsToDo}  
              onDelete={deleteTask} onToggle={toggleReminder}  /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
