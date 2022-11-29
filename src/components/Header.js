import PropTypes from 'prop-types'
import AddTaskButton from './Button'

// Bookmarks reminder, chrome extension

const Header = ({ title }) => {
    const onClick = () => {
        console.log('button is clicked!');
    }

    return (
        <header className="flex justify-between">
            <h1 data-testid="header-h1" className='text-3xl font-bold'>{title}</h1>
            <AddTaskButton text="Add Task" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
