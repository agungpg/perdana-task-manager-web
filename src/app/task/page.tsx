import { Suspense } from "react";
import Task from "@/screens/task";

const TaskPage = () => {
  return (
    <Suspense fallback={<div className="p-5 text-sm text-gray-600">Loading tasks...</div>}>
      <Task />
    </Suspense>
  );
};

export default TaskPage;
