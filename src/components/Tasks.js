const ThingsToDo = [
    {
        id: '1',
        text: 'Doctors Appointment',
        day: 'Feb 5th 2023',
        reminder: true
    },
    {
        id: '2',
        text: 'Meeting at School',
        day: 'Jan 11 2023',
        reminder: false
    },
    {
        id: '3',
        text: 'Shopping',
        day: 'Jan 14 2023',
        reminder: false
    }
]

const Tasks = () => {
    return (
        <div className="flex justify-center">
            <div>
                {ThingsToDo.map((thing) => 
                    (<h3 key={thing.id} className="py-2 text-lg font-light">{thing.text}</h3>
                ))}
            </div>   
        </div>
    )
}

export default Tasks
