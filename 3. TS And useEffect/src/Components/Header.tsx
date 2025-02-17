import { useTimersContext } from "../Store/timers-context.tsx";
import Button from "./UI/Button.tsx";

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>React Timer</h1>
      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "Stop Timers" : "Start Timers"}
      </Button>
    </header>
  );
}
