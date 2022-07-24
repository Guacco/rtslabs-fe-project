import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Hit } from "../interfaces/SearchInterfaces";

interface SearchResultProps {
  result: Hit;
}

function SearchResult(props: SearchResultProps) {
  const { title, storyText, author, url, points, date } = props.result;

  const [modifiedStory, setModifiedStory] = useState<string | null>(null);

  useEffect(() => {
    if (storyText == null) return;
    if (storyText.length > 1000) {
      collapseStory();
    } else {
      expandStory();
    }
  }, []);

  const expandStory = () => {
    setModifiedStory(storyText);
  };
  const collapseStory = () => {
    setModifiedStory(storyText.substring(0, 999));
  };

  const renderStory = () => {
    if (storyText && storyText.length <= 1000) return;

    if (modifiedStory && modifiedStory.length > 1000) {
      return (
        <p onClick={collapseStory} className="cursor-pointer">
          less
        </p>
      );
    } else {
      return (
        <p onClick={expandStory} className="cursor-pointer">
          more
        </p>
      );
    }
  };

  return (
    <li>
      <h1 className="text-3xl underline font-bold pb-2">{title}</h1>
      <article>
        <p className="text-xl font-md pb-2 break-words">
          {storyText
            ? modifiedStory
            : "No story text available. Please check out the link."}
        </p>
        {renderStory()}
        <footer className="flex flex-row gap-4">
          <p>
            Posted on {date} by {author}
          </p>
          <p className="">Votes: {points}</p>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </footer>
      </article>
    </li>
  );
}

export default SearchResult;
