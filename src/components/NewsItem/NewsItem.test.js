import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import NewsItem from "./NewsItem";
import { GlobalContextProvider } from "../../store/context";
import { initialState } from "../../store/reducer";
import { HIDE_LABEL } from "../../constants";
const mockFeed = [
  {
    created_at: "2020-04-11T18:46:08.000Z",
    title: "John Conway has died",
    url: "https://twitter.com/CardColm/status/1249038195880341505",
    author: "ColinWright",
    points: 27,
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
    created_at: "2020-04-11T18:46:08.000Z",
    title: "John Conway has died",
    url: "https://twitter.com/CardColm/status/1249038195880341505",
    author: "ColinWright",
    points: 110,
    story_text: null,
    comment_text: null,
    num_comments: 16,
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
    created_at: "2020-04-11T18:46:08.000Z",
    title: "John Conway has died",
    url: "https://twitter.com/CardColm/status/1249038195880341505",
    author: "ColinWright",
    points: 90,
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
    created_at: "2020-04-11T18:46:08.000Z",
    title: "John Conway has died",
    url: "https://twitter.com/CardColm/status/1249038195880341505",
    author: "ColinWright",
    points: 70,
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
describe("NewsItem component", () => {
  let result;
  beforeEach(() => {
    result = render(
      <GlobalContextProvider
        data={{
          state: { ...initialState, feed: mockFeed, upvotedList: mockFeed },
          dispatch,
        }}
      >
        <NewsItem newsItem={mockItem} order={2} isUpvoted={"\u25BC"} />
      </GlobalContextProvider>
    );
  });
  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("upvote", () => {
    fireEvent.click(result.getByText("\u25BC"));
    wait(() => {
      expect(result.queryByText("\u25B2")).toBeInTheDocument();
      fireEvent.click(result.getByText("\u25B2"));
    });

    wait(() => {
      expect(result.getByText("\u25BC")).toBeInTheDocument();
    });
  });

  test("hide", () => {
    fireEvent.click(result.getByText(HIDE_LABEL));
  });

  test("shades", () => {
    fireEvent.click(result.getByText(HIDE_LABEL));
  });
});
