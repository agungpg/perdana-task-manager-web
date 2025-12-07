import TaskCard, { ITaskItem } from "./TaskCard";

const TaskList = ({
  list
}: {list: ITaskItem[]}) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {list.map((item) => (
        <TaskCard data={item} key={item.title} />
      ))}
    </div>
  )
}

export default TaskList;