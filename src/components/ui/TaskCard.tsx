import { PRIORITY_COLORS, PRIORITY_LABELS } from "@/constants/task";
import Typography from "./Typography";
import Image from "next/image";

const TaskCard = ({data}: {data: {
  title: string;
  status: string;
  timeRemaining: string;
  priority: string;
  image: string;
}}) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] flex gap-2 items-center">
      <Image src={data.image} alt="Task" className="w-[56px] h-[56px] rounded-lg" />
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col">
          <Typography variant="body" weight="bold">{data.title}</Typography>
          <Typography variant="caption">Status: {data.status}</Typography>
          <Typography variant="caption">Time Remaining: {data.timeRemaining}</Typography>
        </div>
        <Typography variant="caption" weight="bold" colorClass={PRIORITY_COLORS[data.priority as keyof typeof PRIORITY_COLORS]}>{PRIORITY_LABELS[data.priority as keyof typeof PRIORITY_LABELS]}</Typography>
      </div>
    </div>
  )
}

export default TaskCard;