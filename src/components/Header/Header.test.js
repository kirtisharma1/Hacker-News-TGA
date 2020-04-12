import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  let result;
  beforeEach(() => {
    result = render(<Header />);
  });
  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });
});
