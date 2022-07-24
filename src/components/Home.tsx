import React from "react";
import Search from "./Search";
import History from "./History";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="bg-orange-500 h-screen text-white">
      <Nav />
      <Routes>
        <Route index element={<Search />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default Home;
