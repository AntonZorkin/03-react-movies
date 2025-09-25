import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = (props: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => props.onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => props.onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => props.onVote("bad")}>
        Bad
      </button>
      {props.canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={props.onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default VoteOptions;
