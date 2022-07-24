import React from "react";
import Search from "./Search";
import History from "./History";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Search />
      <History />
    </div>
  );
}

export default Home;
