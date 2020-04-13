import React, { useReducer } from "react";
import "../src/styles/theme.scss";
import "../src/styles/media.scss";
import "../src/components/Header/Header.scss";
import "../src/components/Feed/Feed.scss";
import "../src/components/NewsItem/NewsItem.scss";
import { GlobalContextProvider } from "../src/store/context";
import { GlobalReducer, initialState } from "../src/store/reducer";

const MyApp = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  return (
    <GlobalContextProvider data={{ state, dispatch }}>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
};

export default MyApp;
