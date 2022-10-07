import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { id: "q1", author: "Muntashir", text: "Learning React is Fun!" },
  { id: "q2", author: "Wahid", text: "Learning React is Great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
