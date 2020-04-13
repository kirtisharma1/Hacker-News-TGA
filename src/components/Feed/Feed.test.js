import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Feed from "./Feed";
import { GlobalContextProvider } from "../../store/context";
import { initialState } from "../../store/reducer";
import { LOADING_TEXT, MORE_LABEL } from "../../constants";

const mockFeed = [
  {
    created_at: "2020-04-11T18:46:08.000Z",
    title: "John Conway has died",
    url: "https://twitter.com/CardColm/status/1249038195880341505",
    author: "ColinWright",
    points: 2037,
    story_text: null,
    comment_text: null,
    num_comments: 156,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1586630768,
    _tags: ["story", "author_ColinWright", "story_22843306", "front_page"],
    objectID: "22843306",
    _highlightResult: {
      title: {
        value: "John Conway has died",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://twitter.com/CardColm/status/1249038195880341505",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "ColinWright",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-04-12T02:22:08.000Z",
    title: "Nasty macOS flaw is bricking MacBooks: Don't install this update",
    url:
      "https://www.tomsguide.com/news/nasty-macos-flaw-is-bricking-macbooks-dont-install-this-update",
    author: "Corrado",
    points: 531,
    story_text: null,
    comment_text: null,
    num_comments: 355,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1586658128,
    _tags: ["story", "author_Corrado", "story_22845629", "front_page"],
    objectID: "22845629",
    _highlightResult: {
      title: {
        value:
          "Nasty macOS flaw is bricking MacBooks: Don't install this update",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://www.tomsguide.com/news/nasty-macos-flaw-is-bricking-macbooks-dont-install-this-update",
        matchLevel: "none",
        matchedWords: [],
      },
      author: { value: "Corrado", matchLevel: "none", matchedWords: [] },
    },
  },
];

const mockItem = {
  created_at: "2020-04-11T18:46:08.000Z",
  title: "John Conway has died",
  url: "https://twitter.com/CardColm/status/1249038195880341505",
  author: "ColinWright",
  points: 2037,
  story_text: null,
  comment_text: null,
  num_comments: 156,
  story_id: null,
  story_title: null,
  story_url: null,
  parent_id: null,
  created_at_i: 1586630768,
  _tags: ["story", "author_ColinWright", "story_22843306", "front_page"],
  objectID: "22843306",
  _highlightResult: {
    title: {
      value: "John Conway has died",
      matchLevel: "none",
      matchedWords: [],
    },
    url: {
      value: "https://twitter.com/CardColm/status/1249038195880341505",
      matchLevel: "none",
      matchedWords: [],
    },
    author: {
      value: "ColinWright",
      matchLevel: "none",
      matchedWords: [],
    },
  },
};

const dispatch = jest.fn();
describe("Feed component", () => {
  let result;
  beforeEach(() => {
    result = render(
      <GlobalContextProvider
        data={{ state: { ...initialState, feed: mockFeed }, dispatch }}
      >
        <Feed isMore={true} />
      </GlobalContextProvider>
    );
  });
  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("loading ", () => {
    result.rerender(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <Feed isMore={true} />
      </GlobalContextProvider>
    );
    expect(result.getByText(LOADING_TEXT)).toBeInTheDocument();
  });

  test("upvoted list ", () => {
    result.rerender(
      <GlobalContextProvider
        data={{
          state: { ...initialState, feed: mockFeed, upvotedList: [mockItem] },
          dispatch,
        }}
      >
        <Feed isMore={true} />
      </GlobalContextProvider>
    );
    expect(result.getAllByText("\u25BC").length).toBe(1);
    expect(result.getAllByText("\u25B2").length).toBe(1);
  });

  test("hidden list ", () => {
    result.rerender(
      <GlobalContextProvider
        data={{
          state: { ...initialState, feed: mockFeed, hideList: [mockItem] },
          dispatch,
        }}
      >
        <Feed isMore={true} />
      </GlobalContextProvider>
    );
    const button = result.getByText(MORE_LABEL);
    fireEvent.click(button);
    expect(result.queryAllByText("John Conway has died").length).toBe(0);
  });
});
