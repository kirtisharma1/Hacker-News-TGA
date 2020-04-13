import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import NewsItem from "../NewsItem";
import { GlobalContext } from "../../store/context";
import { MORE_LABEL, LOADING_TEXT } from "../../constants";
import {
  updatePage,
  updateUpvotedList,
  updateHideList,
} from "../../store/action";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Feed({ isMore }) {
  const { state, dispatch } = useContext(GlobalContext);
  const { feed, page, upvotedList, hideList } = state;
  const [upvoteList] = useLocalStorage("upvotedNewsItems", []);
  const [hiddenList] = useLocalStorage("hiddenNewsItems", []);

  useEffect(() => {
    updateUpvotedList(upvoteList, dispatch);
    updateHideList(hiddenList, dispatch);
  }, []);

  const getType = (post) => {
    const index = upvotedList.length
      ? upvotedList.findIndex((item) => item.objectID === post.objectID)
      : -1;
    if (index >= 0) {
      return "\u25BC";
    }
    return "\u25B2";
  };

  const isHidden = (post) => {
    const index = hideList.length
      ? hideList.findIndex((item) => item.objectID === post.objectID)
      : -1;
    if (index >= 0) {
      return false;
    }
    return true;
  };

  return (
    <main className="container-wrapper feed">
      {feed.length ? (
        <>
          {feed
            .filter((post) => isHidden(post))
            .map((item, index) => (
              <NewsItem
                key={item.objectID}
                newsItem={item}
                order={index}
                isUpvoted={getType(item)}
              />
            ))}
          {isMore && (
            <button
              type="button"
              className="btn-empty feed__more"
              onClick={() => updatePage(page + 1, dispatch)}
            >
              {MORE_LABEL}
            </button>
          )}
        </>
      ) : (
        <p>{LOADING_TEXT}</p>
      )}
    </main>
  );
}

Feed.propTypes = {
  isMore: PropTypes.bool,
};

Feed.defaultProps = {
  isMore: true,
};
