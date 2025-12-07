import { PRIORITY_COLORS, PRIORITY_LABELS } from "@/constants/task";
import Typography from "./Typography";
import ProgressBar from "./ProgressBar";

export interface ITaskItem {
  id?: string;
  title: string;
  status: string;
  timeRemaining: string;
  priority: string;
  image: string;
}

const TaskCard = ({data}: {data: ITaskItem}) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] flex flex-col gap-2 items-center cursor-pointer">
      {/* <Image src={data.image} alt="Task" className="w-[56px] h-[56px] rounded-lg" /> */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col">
          <Typography variant="body" weight="bold">{data.title}</Typography>
          <div className="flex items-center gap-6">
            <Typography variant="caption">Status: {data.status}</Typography>
            <div className="flex items-end gap-1">
              <Typography variant="caption">Priority: </Typography>
              <Typography variant="caption" weight="bold" colorClass={PRIORITY_COLORS[data.priority as keyof typeof PRIORITY_COLORS]}>{PRIORITY_LABELS[data.priority as keyof typeof PRIORITY_LABELS]}</Typography>  
            </div>
          </div>
          <Typography variant="caption">Due: {data.timeRemaining}</Typography>
        </div>
        <div className="flex gap-2 items-start">
          <div className="flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700">
              {"SY"}
            </div>
          </div>
        </div>
      </div>
        <ProgressBar progress={50} />
    </div>
  )
}

export default TaskCard;