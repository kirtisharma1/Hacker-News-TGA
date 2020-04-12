import Head from "next/head";
import React from "react";
import Home from "../src/components/Home";

const App = () => (
  <div className="container">
    <Head>
      <title>Hacker News</title>
      <meta
        name="description"
        content="Hacker News is a community started by Paul Graham for sharing 'Anything that good hackers would find interesting. That includes more than hacking and startups. If you had to reduce it to a sentence, the answer might be: anything that gratifies one's intellectual curiosity.'"
      />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <Home />
  </div>
);

export default App;
