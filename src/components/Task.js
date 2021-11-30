
const Task = ({ task, onDelete, onToggle }) => {
    return (
            <div className={`task-list ${task.reminder ? 'task-reminder': ''}`} onDoubleClick={()=>{onToggle(task.id)}}>
                <div>
                    <h3>{task.text}</h3>
                    <p>{task.day}</p>
                </div>
                <div className="btn">
                    <button className="close" onClick={()=>onDelete(task.id)}>x</button>
                </div>
            </div>
    );
}

export default Task;