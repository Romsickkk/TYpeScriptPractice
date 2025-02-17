import Container from "./UI/Container.tsx";
import { useEffect, useRef, useState } from "react";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../Store/timers-context.tsx";
import Button from "./UI/Button.tsx";

function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning, stopTimers } = useTimersContext();
  const interval = useRef<null | number>(null);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 50);
        console.log(duration);
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  const restartTimer = () => {
    setRemainingTime(duration * 1000);
    if (interval.current) {
      clearInterval(interval.current);
      stopTimers();
    }
  };
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formatedRemainingTime}</p>
      <Button onClick={restartTimer}>Restart</Button>
    </Container>
  );
}
export default Timer;
