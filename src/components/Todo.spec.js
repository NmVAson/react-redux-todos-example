import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Todo from "./Todo";

/*
 * For a tutorial on React Testing Library,
 * https://www.robinwieruch.de/react-testing-library
 */
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<Todo />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
        render(<Todo text="Do homework" />, container);
    });
    expect(container.textContent).toBe("Do homework");
});
