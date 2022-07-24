import React from "react";
import SearchResult from "./SearchResult";
import { Hit } from "../interfaces/SearchInterfaces";

interface SearchResultsProps {
  results: Hit[];
}

function SearchResults(props: SearchResultsProps) {
  return (
    <div className="px-24 py-14">
      <ul className="flex flex-col gap-y-8 items-left justify-center">
        {props.results.map((result) => {
          return <SearchResult key={result.id} result={result} />;
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
