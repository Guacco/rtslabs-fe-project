import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { Hit } from "../interfaces/SearchInterfaces";

function Search() {
  type Response = {
    hits: [];
  };

  const QUERY_URL = "https://hn.algolia.com/api/v1/search?tags=story&query=";

  const [queryVal, setQueryVal] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Hit[]>([]);

  useEffect(() => {}, []);

  function request<TResponse>(
    url: string,
    config: RequestInit = {}
  ): Promise<TResponse> {
    return fetch(url, config)
      .then((response) => response.json())
      .then((data) => data as TResponse);
  }

  const onInputSubmitted = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key !== "Enter") return;
    setResults([]);
    setError(false);
    setIsLoading(true);
    setQueryVal("");
    request<Response>(`${QUERY_URL}${queryVal}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        setIsLoading(false);
        response.hits.forEach((item: any) => {
          const date = new Date(item.created_at);
          let ci: Hit = {
            id: item.objectID,
            author: item.author,
            points: item.points,
            story_text: item.story_text,
            title: item.title,
            url: item.url,
            date: date.toDateString(),
          };
          setResults((prev) => [...prev, ci]);
        });
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center gap-y-4 py-20">
      <span className="text-3xl font-medium">Search for News</span>
      <input
        type="text"
        maxLength={100}
        value={queryVal}
        className="h-12 w-1/4 rounded-md text-black text-2xl"
        onKeyDown={onInputSubmitted}
        onChange={(e) => setQueryVal(e.target.value)}
      />
      {results.length === 0 && !isLoading ? (
        <span className="italic font-medium">
          &quot;Pst try searching something...&quot;
        </span>
      ) : null}
      {isLoading ? <h1>Fetching results...</h1> : null}
      {error ? (
        <span className="font-bold text-md text-red">
          &quot;Something went wrong with your search. Try another search or
          come back later&quot;
        </span>
      ) : null}
      {results.length > 0 ? <SearchResults results={results} /> : null}
    </div>
  );
}

export default Search;
