import React from "react";
import { HistoryItem } from "../interfaces/HistoryInterfaces";

interface HistoryResultProps {
  historyItem: HistoryItem;
  key: number;
}

function HistoryResult(props: HistoryResultProps) {
  const { query, date } = props.historyItem;

  return (
    <li key={props.key}>
      <h1 className="text-3xl font-bold pb-2">{query}</h1>
      <article>
        <p>{date}</p>
      </article>
    </li>
  );
}

export default HistoryResult;
