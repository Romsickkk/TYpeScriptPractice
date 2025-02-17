import { useTimersContext } from "../Store/timers-context";

import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <>{console.log(timer)}</>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
