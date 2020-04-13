import {
  UPDATE_FEED,
  UPDATE_PAGE,
  UPDATE_UPVOTED_LIST,
  UPDATE_HIDE_LIST,
  UPDATE_SORT_TYPE,
} from "./constants";

export const updateFeed = (data, dispatch) => {
  return dispatch({
    type: UPDATE_FEED,
    payload: data,
  });
};

export const updatePage = (data, dispatch) => {
  return dispatch({
    type: UPDATE_PAGE,
    payload: data,
  });
};

export const updateUpvotedList = (data, dispatch) => {
  return dispatch({
    type: UPDATE_UPVOTED_LIST,
    payload: data,
  });
};

export const updateHideList = (data, dispatch) => {
  return dispatch({
    type: UPDATE_HIDE_LIST,
    payload: data,
  });
};

export const updateSortType = (data, dispatch) => {
  return dispatch({
    type: UPDATE_SORT_TYPE,
    payload: data,
  });
};
