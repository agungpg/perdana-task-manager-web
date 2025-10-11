import TaskCard from "./TaskCard";

const TaskListData = [
  {
    title: "Task 1",
    status: "Pending",
    timeRemaining: "10 hours",
    priority: "High",
    image: "https://placehold.co/400x400",
  },
  {
    title: "Task 2",
    status: "In Progress",
    timeRemaining: "5 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    title: "Task 3",
    status: "Completed",
    timeRemaining: "0 hours",
    priority: "Low",
    image: "https://placehold.co/400x400",
  },
  // generate 7 others with random data
  ...Array.from({ length: 7 }, () => ({
    title: `Task ${Math.floor(Math.random() * 1000)}`,
    status: "Pending",
    timeRemaining: "10 hours",
    priority: "High",
    image: "https://placehold.co/400x400",
  })),
]
const TaskList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {TaskListData.map((item) => (
        <TaskCard data={item} key={item.title} />
      ))}
    </div>
  )
}

export default TaskList;