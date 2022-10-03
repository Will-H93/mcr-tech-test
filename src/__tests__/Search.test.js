import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setResults: jest.fn(),
  };

  test("renders correctly", () => {
    const { asFragment } = render(<Search {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("all parts of component render", () => {
    render(<Search {...validProps} />);
    const inputPart = screen.getByPlaceholderText("Enter Search Here");
    const buttonPart = screen.getByText("Search");

    expect(inputPart).toBeInTheDocument();
    expect(inputPart).toHaveClass("search-input");
    expect(buttonPart).toBeInTheDocument();
    expect(buttonPart).toHaveClass("search-button");
  });

  test("check function fires", async () => {
    render(<Search {...validProps} />);
    const button = screen.getByText("Search");
    await fireEvent.click(button);

    expect(validProps.setResults).toHaveBeenCalled();
  });
});
