import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [name, setName] = useState(task.name)
  const [dateOrTime, setDateOrTime] = useState(task.dateOrTime)

  return (
    <div
      className={`task bg-slate-100 text-black ${
        task.reminder ? 'reminder' : ''
      }`}
    >
      <h3>
        <p>
          <span className='font-medium inline'>Task:</span> {task.name}{' '}
        </p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={async () => await onDelete(task.id)}
        />
      </h3>
      {task.dateOrTime !== '' && (
        <p>
          <span className='font-medium'>Date/time:</span> {task.dateOrTime}
        </p>
      )}
      {!showUpdateForm && (
        <button
          onClick={() => setShowUpdateForm(true)}
          className='bg-mint-50 font-medium px-4 py-2 rounded-md mt-2 text-sm 
      hover:bg-white transition-colors duration-200 ease-in-out'
        >
          Update
        </button>
      )}
      {showUpdateForm && (
        <>
          <form
            className='p-2 bg-white rounded-md flex flex-col gap-2 my-4'
            onSubmit={async (e) => {
              e.preventDefault()
              let data = { name, dateOrTime }
              await onUpdate(task.id, data)
              setShowUpdateForm(false)
            }}
          >
            <h3 className='font-medium text-lg'>Edit Task</h3>
            <label htmlFor='name'>Name: </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='outline-none border-2 p-1'
              id='name'
            />
            <label htmlFor='dateOrTime'>Date/time: </label>
            <input
              value={dateOrTime}
              onChange={(e) => setDateOrTime(e.target.value)}
              className='outline-none border-2 p-1'
              id='dateOrTime'
            />
            <button
              className='bg-mint-50 font-medium px-4 py-2 rounded-md mt-2 
              text-sm hover:bg-slate-100 transition-colors duration-200 
              ease-in-out w-32 mx-auto'
              type='submit'
            >
              Save
            </button>
          </form>
          <button
            onClick={() => setShowUpdateForm(false)}
            className='bg-red-100 font-medium px-4 py-2 rounded-md mt-2 text-sm 
            hover:bg-white transition-colors duration-200 ease-in-out'
          >
            Close
          </button>
        </>
      )}
    </div>
  )
}

export default Task
