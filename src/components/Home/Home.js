import React, { useEffect, useState, useContext } from "react";
import { GET_NEWS_FEED, HEADER_TOP_LABEL } from "../../constants";
import Header from "../Header";
import Feed from "../Feed";
import { GlobalContext } from "../../store/context";
import { updateFeed, updatePage } from "../../store/action";

function Home() {
  const { state, dispatch } = useContext(GlobalContext);
  const { feed, page, sortType } = state;
  const [isMore, setIsMore] = useState(true);

  const sortFeed = (type, list) => {
    const sortedFeed = [...list];
    if (type === HEADER_TOP_LABEL) {
      sortedFeed.sort(
        (a, b) => parseInt(b.points, 10) - parseInt(a.points, 10)
      );
    } else {
      sortedFeed.sort(
        (a, b) => parseInt(b.created_at_i, 10) - parseInt(a.created_at_i, 10)
      );
    }
    updateFeed(sortedFeed, dispatch);
  };

  const getNews = () => {
    const url = `${GET_NEWS_FEED}&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let result = res.hits;
        result = result.filter((item) => item.title);
        sortFeed(sortType, [...result, ...feed]);
        if (page + 1 === res.nbPages) {
          setIsMore(false);
        }
      });
  };

  useEffect(() => {
    sortFeed(sortType, feed);
  }, [sortType]);

  useEffect(() => {
    getNews();
  }, [page]);

  return (
    <div className="hacker-news">
      <Header />
      <Feed isMore={isMore} />
    </div>
  );
}

export default Home;
