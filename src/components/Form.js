import { useState } from "react";

const Form = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
   
    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd({
            "text": text,
            "day": day,
            "reminder": reminder
        })
        if(!text){alert('Text field empty')}
        
        
        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <div className={`add-task`}>
            <form className="" onSubmit={handleSubmit   }>
                <label><strong>Task</strong></label>
                <input
                    className="task-field"
                    placeholder="Add Task"
                    value={text}
                    onChange={ e => setText(e.target.value)} 
                    type="text"
                />
                <label><strong>Day &Time</strong></label>
                <input
                    className="date-field"
                    placeholder="Add Day &Time"
                    value={day}
                    onChange={ e => setDay(e.target.value)}
                    type="text"
                />
                <label><strong>Reminder</strong></label>
                <input
                    className="Reminder-field"
                    checked={reminder}
                    value={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
                    type="checkbox"
                />
                <input
                    className="btn2"
                    type="submit"
                    value='Save Task'
                />
            </form>
        </div>
    );
}

export default Form;