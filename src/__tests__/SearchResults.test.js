import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders an image", () => {
    render(<SearchResults />)
    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('src')
    expect(image.src !== '').toBeTruthy()
  })
});