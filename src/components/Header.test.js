import { screen, render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Header from "./Header";

afterEach(cleanup)

describe("Header Component", () => {
    it("renders title without props", () => {
        act(() => {
            render(<Header />)
        });

        expect(screen.getByTestId("header-h1")).toHaveTextContent('Task Tracker')
    })

    it("renders title with props", () => {
        act(() => {
            render(<Header title="Title has changed" />)
        })

        expect(screen.getByTestId("header-h1")).toHaveTextContent('Title has changed')
    })
})
