import React, { useState } from "react";
import Search from "./Search";
import History from "./History";
import Nav from "./Nav";
import BackendExercises from "./BackendPage";
import { Routes, Route } from "react-router-dom";
import { Hit } from "../interfaces/SearchInterfaces";
import { HistoryItem } from "../interfaces/HistoryInterfaces";

function Home() {
  const [results, setResults] = useState<Hit[]>([]);
  const [history, setHistory] = useState<Array<HistoryItem>>([]);

  return (
    <div className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 h-screen text-orange-100 overflow-y-auto">
      <Nav />
      <Routes>
        <Route
          index
          element={
            <Search
              results={results}
              setResults={setResults}
              setHistory={setHistory}
            />
          }
        />
        <Route path="/history" element={<History history={history} />} />
        <Route path="/backend-exercises" element={<BackendExercises />} />
      </Routes>
    </div>
  );
}

export default Home;
