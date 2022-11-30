import Button from './Button'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [btnText, setBtnText] = useState('Save Task')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const justConsoleLog = () => {
        console.log('just console log')
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('please add text')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
        setBtnText("Saved")
        
    }

    return (
        <form className="form w-full grid grid-cols-6 gap-0" onSubmit={onSubmit}>
            <div className="task-inputs-grid">
                <label className="task-label">Task</label>
                <input className="task-input" aria-label='task-input' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Task" />
            </div>
            <div className="task-inputs-grid">
                <label className="task-label mt-3">Day & Time</label>
                <input className="task-input" aria-label='day-input' type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Add Day & time" />
            </div>
            <div className="task-inputs-grid">
                <div className="w-1/2 flex justify-between">
                    <label className="task-label mt-3">Set Reminder</label>
                    <input type="checkbox" className="mt-1 w-5" value={reminder} 
                        onChange={(e) => setReminder(e.currentTarget.checked)} placeholder="Add Day & time" />
                </div>
            </div>
            <div className="col-span-5 col-start-2 my-2">
                <Button text={btnText} type="submit" className="w-1/2 bg-black text-white rounded-lg px-10 py-2" onClick={onSubmit} />
            </div>
        </form>
    )
}

export default AddTask