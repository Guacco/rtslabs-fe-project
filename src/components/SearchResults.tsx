import React from "react";
import SearchResult from "./SearchResult";
import { Hit } from "../interfaces/SearchInterfaces";

interface SearchResultsProps {
  results: Hit[];
}

function SearchResults(props: SearchResultsProps) {
  return (
    <div className="w-3/4 pt-10">
      <ul className="flex flex-col gap-y-8 items-left justify-center">
        {props.results.map((result) => {
          return <SearchResult key={result.id} result={result} />;
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
