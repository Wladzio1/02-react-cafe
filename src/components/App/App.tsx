// MAIN IMPORTS
import { useState } from "react";
import css from "./App.module.css";

// COMPONENTS
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

// TYPES
import type { VoteType } from "../../types/votes";
import type Votes from "../../types/votes";

export default function App() {
  // STATE
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // HANDLERS
  function handleVote(type: VoteType) {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  // Reset votes to initial state
  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={votes.good + votes.neutral + votes.bad > 0}
      />
      <VoteStats
        votes={votes}
        totalVotes={votes.good + votes.neutral + votes.bad}
        positiveRate={
          votes.good + votes.neutral + votes.bad > 0
            ? Math.round(
                (votes.good / (votes.good + votes.neutral + votes.bad)) * 100,
              )
            : 0
        }
      />
    </div>
  );
}
