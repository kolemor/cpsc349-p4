import { useEffect, useState } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import pb from '../pocketBase'

/* the main page when a user logs in, this will house the tasks */
const Home = () => {
  let greeting
  const hour = new Date().getHours()
  if (hour < 12) {
    greeting = 'Good morning'
  } else if (hour < 18) {
    greeting = 'Good afternoon'
  } else {
    greeting = 'Good evening'
  }

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [sorted, setSorted] = useState(false)

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

  const sortTasks = () => {
    if (!sorted) {
      setTasks((prev) => [...prev.sort((a, b) => a.name.localeCompare(b.name))])
      setSorted(true)
    } else {
      setTasks((prev) => [...prev.sort((a, b) => a.created.localeCompare(b.created))])
      setSorted(false)
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
        <>
          <hr className='mb-4' />
          <p className='text-xl font-medium mb-2'>{greeting}, {pb.authStore.model.username}</p>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-xl font-medium'>
              You have {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
            </p>
            <button
              onClick={sortTasks}
              className='bg-mint-50 font-medium px-4 py-2 rounded-md text-lg
      hover:bg-white transition-colors duration-200 ease-in-out text-mint-900'
            >
              {!sorted ? 'Sort A-Z' : 'Undo sort'}
            </button>
          </div>
          <Tasks tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
        </>
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
