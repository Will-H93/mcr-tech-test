import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    results: ["image"],
  };

  test("renders correctly", () => {
    const { asFragment } = render(<SearchResults {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders an image", () => {
    render(<SearchResults {...validProps} />);
    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src");
    expect(image.src !== "").toBeTruthy();
  });
});
