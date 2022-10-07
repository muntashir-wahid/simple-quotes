import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Muntashir", text: "Learning React is Fun!" },
  { id: "q2", author: "Wahid", text: "Learning React is Great!" },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);
  if (!quote) {
    return <h1>No Qoute Found</h1>;
  }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
