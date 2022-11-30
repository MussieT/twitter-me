import { screen, render, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Button from './Button'

afterEach(cleanup)

describe("Button Component", () => {
    it("renders add without props", () => {
        act(() => {
            render(<Button />)
        });

        expect(screen.getByTestId("addtask-button")).toHaveTextContent("Add")
    })

    it("renders add with props", () => {
        act(() => {
            render(<Button text="Add Task" className="text-xl rounded-xl bg-black px-4 py-2 text-white" />)
        })

        expect(screen.getByTestId("addtask-button")).toHaveTextContent("Add Task")
        expect(screen.getByTestId("addtask-button")).toHaveClass("text-xl rounded-xl bg-black px-4 py-2 text-white")
    })
})
