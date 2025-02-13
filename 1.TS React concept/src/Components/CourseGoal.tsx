import { type PropsWithChildren } from "react";

// type ReactNode
// FC

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDeleteGoal: (id: number) => void;
}>;

function CourseGoal({ title, id, children, onDeleteGoal }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>

      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
}

// Alternativ wayconst CourseGoalProps: FC<CourseGoalProps> = ({ title, children }) =>

export default CourseGoal;
