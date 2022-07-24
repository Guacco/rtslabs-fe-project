import React from "react";
import HistoryResult from "./HistoryResult";
import { HistoryItem } from "../interfaces/HistoryInterfaces";

interface HistoryResultsProps {
  results: HistoryItem[];
}

function HistoryResults(props: HistoryResultsProps) {
  return (
    <div className="px-24 py-14">
      <h1 className="text-5xl font-bold text-center pb-10">Search History</h1>
      <ul className="flex flex-col gap-y-8 items-left justify-center">
        {props.results.map((result, index) => {
          return <HistoryResult key={index} historyItem={result} />;
        })}
      </ul>
    </div>
  );
}

export default HistoryResults;
