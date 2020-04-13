import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../store/context";
import { HIDE_LABEL } from "../../constants";
import { updateUpvotedList, updateHideList } from "../../store/action";
import { timeSince } from "../../utils";

export default function NewsItem({ newsItem, order, isUpvoted }) {
  const { state, dispatch } = useContext(GlobalContext);
  const { hideList, upvotedList } = state;
  const getShade = () => {
    switch (true) {
      case newsItem.points > 150:
        return "lightest";
      case newsItem.points > 100:
        return "lighter";
      case newsItem.points > 75:
        return "light";
      case newsItem.points > 50:
        return "normal";
      default:
        return "dark";
    }
  };
  const getDomain = (url) => {
    const arr = url.split("/");
    return arr[2];
  };

  const upvoteNewsItem = (newsItem) => {
    const newList = [...upvotedList];
    const index = newList.findIndex(
      (item) => item.objectID === newsItem.objectID
    );
    if (index >= 0) {
      newList.splice(index, 1);
    } else {
      newList.push(newsItem);
    }

    updateUpvotedList(newList, dispatch);
  };

  const hideNewsItem = (newsItem) => {
    const newList = [...hideList];
    const itemIndex = newList.findIndex(
      (item) => item.objectID === newsItem.objectID
    );
    if (itemIndex >= 0) {
      newList.splice(itemIndex, 1);
    } else {
      newList.push(newsItem);
    }

    updateHideList(newList, dispatch);
  };

  return (
    <article
      className={`news-item  ${order % 2 === 0 ? "even" : "odd"}`}
      data-testid="news-item"
    >
      <span className="news-item__comment-count">{newsItem.num_comments}</span>
      <span className={`news-item__points news-item--${getShade()}`}>
        {newsItem.points}
      </span>
      <button
        type="button"
        className="btn-empty news-item__upvote"
        onClick={() => upvoteNewsItem(newsItem)}
      >
        {isUpvoted}
      </button>
      <p className="news-item__title">
        {newsItem.title}
        <span>
          (
          {newsItem.url && (
            <a target="_blank" rel="noopener noreferrer" href={newsItem.url}>
              {getDomain(newsItem.url)}
            </a>
          )}
          ) by&nbsp;
          <b>{newsItem.author}</b>
          &nbsp;
          <date>{`${timeSince(Date.parse(newsItem.created_at))} ago`}</date>
        </span>
        &nbsp;[
        <button
          type="button"
          className="btn-empty news-item__hide"
          onClick={() => hideNewsItem(newsItem)}
        >
          {HIDE_LABEL}
        </button>
        ]
      </p>
    </article>
  );
}

NewsItem.propTypes = {
  newsItem: PropTypes.shape({
    num_comments: PropTypes.number,
    title: PropTypes.string,
    points: PropTypes.number,
    url: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
  order: PropTypes.number.isRequired,
  isUpvoted: PropTypes.string,
};

NewsItem.defaultProps = {
  newsItem: {
    num_comments: 0,
    title: "",
    points: 0,
    url: "",
    author: "",
    created_at: "",
  },
  order: 0,
  isUpvoted: "",
};
