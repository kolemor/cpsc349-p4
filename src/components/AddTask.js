import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [dateOrTime, setDateOrTime] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a Task')
      return
    }

    onAdd({ name, dateOrTime })

    setName('')
    setDateOrTime('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='font-medium form-control'>
        <label>Task</label>
        <input
          required
          className='text-slate-900'
          type='text'
          placeholder='Add Task'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='font-medium form-control'>
        <label>Day & Time</label>
        <input
          className='text-slate-900'
          type='text'
          placeholder='Add Day & Time'
          value={dateOrTime}
          onChange={(e) => setDateOrTime(e.target.value)}
        />
      </div>

      <input
        className='font-semibold btn btn-block bg-mint-50 text-gray-900'
        type='submit'
        value='Save Task'
      />
    </form>
  )
}

export default AddTask
