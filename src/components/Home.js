import { useState } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

/* the main page when a user logs in, this will house the tasks */
const Home = () => {
    const [showAddTask, setShowAddTask] = useState (false)
    /* Static tasks used for testing purposes, delete this after pocketbase integration */
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctor',
                day: 'Feb 5th',
                reminder: true,
            },
            {
                id: 2,
                text: 'School',
                day: 'Feb 6th',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food',
                day: 'Feb 5th',
                reminder: false,
            }
        ]
    )

    /* Add Task */
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        /*This doesnt work and I dont know why,
        but this will probably change with Pocketbase integration
        so I wont worry about it*/
        setTasks([...task, newTask])
    }

    /* Delete Task */
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    /* Toggle Reminder */
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
    }

    return (
        <div className='container bg-gray-900 text-slate-100'>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show' }
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Home
