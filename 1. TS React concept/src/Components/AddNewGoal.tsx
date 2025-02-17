import { useRef, type FormEvent } from "react";

type newGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

function AddNewGoal({ onAddGoal }: newGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value.trim();
    const enteredSummary = summary.current!.value.trim();

    if (enteredGoal && enteredSummary) {
      onAddGoal(enteredGoal, enteredSummary);
      e.currentTarget.reset();
      goal.current!.focus();
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} required />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} required />
      </p>

      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default AddNewGoal;
