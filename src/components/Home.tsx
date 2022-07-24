import React from "react";
import Search from "./Search";
import History from "./History";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 h-screen text-orange-100 overflow-y-auto">
      <Nav />
      <Routes>
        <Route index element={<Search />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default Home;
