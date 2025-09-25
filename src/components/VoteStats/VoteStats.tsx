import type { Votes } from "../../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = (props: VoteStatsProps) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{props.votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{props.votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{props.votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total:{" "}
        <strong>
          {props.totalVotes}
        </strong>
      </p>
      <p className={css.stat}>
        Positive:{" "}
        <strong>
          {props.positiveRate}
          %
        </strong>
      </p>
    </div>
  );
};

export default VoteStats;
