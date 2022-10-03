import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    results: ["test-url-1", "test-url-2", "test-url-3"],
  };

  test("renders correctly", () => {
    const { asFragment } = render(<SearchResults {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders an image", () => {
    render(<SearchResults {...validProps} />);
    const image = screen.getAllByRole("img");

    image.forEach((image) => {
      expect(image).toHaveAttribute("src");
      expect(image.src !== "").toBeTruthy();
    });
  });
});
