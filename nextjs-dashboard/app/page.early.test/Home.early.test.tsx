// Unit tests for: Home

import React from "react";

import { render } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

describe("Home() Home method", () => {
    // Happy path tests
    describe("Happy Path", () => {
        it("should render the Home component with the correct text", () => {
            // This test checks if the Home component renders correctly with the expected text.
            const { getByText } = render(<Home />);
            expect(getByText("Home Page")).toBeInTheDocument();
        });
    });

    // Edge case tests
    describe("Edge Cases", () => {
        it("should render the Home component without crashing", () => {
            // This test ensures that the Home component renders without any errors.
            const { container } = render(<Home />);
            expect(container).toBeInTheDocument();
        });

        it("should not render any unexpected text", () => {
            // This test checks that no unexpected text is rendered in the Home component.
            const { queryByText } = render(<Home />);
            expect(queryByText("Unexpected Text")).not.toBeInTheDocument();
        });
    });
});

// End of unit tests for: Home
