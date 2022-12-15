import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a Task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='font-medium form-control'>
                <label>Task</label>
                <input className='text-slate-900' type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='font-medium form-control'>
                <label>Day & Time</label>
                <input className='text-slate-900' type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='font-medium form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}
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
