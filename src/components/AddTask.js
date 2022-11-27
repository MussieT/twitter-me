import PropTypes from 'prop-types'

const AddTaskButton = ({ text, className, onClick }) => {
    return (
        <button data-testid="addtask-button"
            className={className} onClick={onClick}>{text}</button>
    )
}

AddTaskButton.defaultProps = {
    text: "Add",
    className: "text-xl rounded-xl bg-black px-4 py-2 text-white"
}

AddTaskButton.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default AddTaskButton
