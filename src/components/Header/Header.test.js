import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Header from "./Header";
import {
  HEADER_TITLE,
  HEADER_NEW_LABEL,
  HEADER_TOP_LABEL,
} from "../../constants";
import { GlobalContextProvider } from "../../store/context";
import { initialState } from "../../store/reducer";

const dispatch = jest.fn();
describe("Header component", () => {
  let result;
  beforeEach(() => {
    result = render(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <Header />
      </GlobalContextProvider>
    );
  });
  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("render without crash", () => {
    expect(result.getByText(HEADER_TITLE)).toBeInTheDocument();
  });

  test("menu item selection for 'new'", () => {
    const newMenuItem = result.getByText(HEADER_NEW_LABEL);
    fireEvent.click(newMenuItem);
  });

  test("menu item selection for 'new'", () => {
    result.rerender(
      <GlobalContextProvider
        data={{
          state: { ...initialState, sortType: HEADER_NEW_LABEL },
          dispatch: jest.fn(),
        }}
      >
        <Header />
      </GlobalContextProvider>
    );
    const newMenuItem = result.getByText(HEADER_TOP_LABEL);
    fireEvent.click(newMenuItem);
  });
});
