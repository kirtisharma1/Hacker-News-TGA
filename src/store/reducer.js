import {
  UPDATE_FEED,
  UPDATE_PAGE,
  UPDATE_UPVOTED_LIST,
  UPDATE_HIDE_LIST,
  UPDATE_SORT_TYPE,
} from "./constants";
import { HEADER_TOP_LABEL } from "../constants";

export const initialState = {
  feed: [],
  sortType: HEADER_TOP_LABEL,
  upvotedList: [],
  hideList: [],
  page: 0,
};

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FEED:
      return {
        ...state,
        feed: [...action.payload],
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_UPVOTED_LIST:
      return {
        ...state,
        upvotedList: [...action.payload],
      };
    case UPDATE_HIDE_LIST:
      return {
        ...state,
        hideList: [...action.payload],
      };
    case UPDATE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state || initialState;
  }
};
