import { useEffect, useState } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import pb from '../pocketBase'

/* the main page when a user logs in, this will house the tasks */
const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const addTask = async ({ name, dateOrTime }) => {
    const newTask = await pb
      .collection('todos')
      .create({ name, dateOrTime, user: pb.authStore.model.id })
    setTasks((prev) => [...prev, newTask])
  }

  const updateTask = async (id, data) => {
    const updatedTask = await pb.collection('todos').update(id, data)
    if (updatedTask) {
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      )
    } else {
      alert('Something went wrong!')
    }
  }

  const deleteTask = async (id) => {
    const success = await pb.collection('todos').delete(id)

    if (success) {
      setTasks((prev) => prev.filter((task) => task.id !== id))
    } else {
      alert('Something went wrong!')
    }
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await pb.collection('todos').getFullList(200, {
        $autoCancel: false,
        filter: `user ~ '${pb.authStore.model.id}'`,
      })
      setTasks(tasks)
    }
    getTasks()
  }, [])

  return (
    <div className='container bg-gray-900 text-slate-100'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Home
