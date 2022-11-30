import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import AddTask from './AddTask'

afterEach(cleanup)

describe("Add Task Component", () => {
    it("tests by adding value to form", () => {
        const onAdd = jest.fn()
    
        const utils = render(<AddTask onAdd={onAdd} />)

        const input = utils.getByLabelText('task-input')
        fireEvent.change(input, { target: { value: 'first'}})

        const dayInput = utils.getByLabelText('day-input')
        fireEvent.change(dayInput, { target: { value: 'Feb 14, 2024'}})
            
        userEvent.click(screen.getByRole('button', {name: "Save Task"}))
            
        expect(screen.getByText('Saved')).toBeInTheDocument()
    })

    it("testing window alert if condition is not met", () => {
        const jsDomAlert = window.alert;

        window.alert = () => {};

        const onAdd = jest.fn()

        const utils = render(<AddTask onAdd={onAdd} />)

        userEvent.click(screen.getByRole('button', {name: "Save Task"}))

        window.alert = jsDomAlert
    })
})
