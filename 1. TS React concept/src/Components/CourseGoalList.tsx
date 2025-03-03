import { type ReactNode } from "react";
import { type CourseGoalType } from "../App";

import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals found. Start adding some!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        A lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
