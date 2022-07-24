import React from "react";
import { Hit } from "../interfaces/SearchInterfaces";

interface SearchResultProps {
  result: Hit;
}

function SearchResult(props: SearchResultProps) {
  const { id, title, story_text, author, url, points, date } = props.result;

  return (
    <li key={id}>
      <h1 className="text-3xl underline font-bold pb-2">{title}</h1>
      <article>
        <h3 className="text-xl font-md pb-2">
          {story_text
            ? story_text
            : "No story text available. Please check out the link."}
        </h3>
        <footer className="flex flex-row gap-4">
          <p>
            Posted on {date}
            <time dateTime={date} /> by {author}
          </p>
          <p className="">Votes: {points}</p>
          <a href={url} target="_blank" rel="noreferrer" className="">
            {url}
          </a>
        </footer>
      </article>
    </li>
  );
}

export default SearchResult;
