import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { VoteType } from "../types/votes";

export default function App() {
  function handleVote(type: VoteType) {
    console.log("Voted:", type);
  }

  function resetVotes() {
    console.log("Votes reset");
  }

  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
