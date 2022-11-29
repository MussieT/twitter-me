import Task from './Task.js'

const Tasks = ({ ThingsToDo , onDelete, onToggle }) => {
    
    return (
        <div className="flex justify-center w-full">
            <div className="w-2/3">
                {ThingsToDo.map((thing) => 
                    (<Task key={thing.id} task={thing} onDelete={onDelete} onToggle={onToggle} />))}
            </div>   
        </div>
    )
}

export default Tasks
