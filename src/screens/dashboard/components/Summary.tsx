import Typography from "@/components/ui/Typography";
import { SummaryProps } from "../types/summary";

const Summary = ({data}: SummaryProps) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <Typography variant="h3" weight="semibold">Summary</Typography>
      <div className="grid grid-cols-2 gap-[4px]">
        <SummaryItem label="Total Tasks" value={data.totalTasks} />
        <SummaryItem label="Todo" value={data.todo} />
        <SummaryItem label="InProgress" value={data.inProgress} />
        <SummaryItem label="Done" value={data.done} />
        <SummaryItem label="Total Time" value={data.totalTime} />
      </div>
    </div>
  )
}


const SummaryItem = ({label, value}: {label: string, value: number}) => {
  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" weight="medium">{label}:</Typography>
      <Typography variant="caption" weight="semibold">{value}</Typography>
    </div>
  )
}

export default Summary; 