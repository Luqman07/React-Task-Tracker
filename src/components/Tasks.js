// import { useState } from 'react'
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div className="task">
            <>
                {tasks.map((task) => (<Task onDelete={onDelete} task={task} key={task.id} onToggle={onToggle}/>)) }
            </>

        </div>
    );
}

export default Tasks;