import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setResults: jest.fn(),
  };

  const { asFragment } = render(<Search {...validProps} />);

  test("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
