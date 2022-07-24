import React from "react";
import { HistoryItem } from "../interfaces/HistoryInterfaces";
import HistoryResults from "./HistoryResults";

interface HistoryProps {
  history: HistoryItem[];
}

function History(props: HistoryProps) {
  const { history } = props;
  return <HistoryResults results={history} />;
}

export default History;
