import Typography from "@/components/ui/Typography";
import { SummaryProps } from "../types/summary";
import Card from "@/components/ui/Card";

const Summary = ({data}: SummaryProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h3" weight="semibold">Summary</Typography>
      <div className="grid grid-cols-2 gap-4">
        <SummaryItem label="Open Tasks" value={data.totalTasks} />
        <SummaryItem label="My Tasks" value={data.todo} />
        <SummaryItem label="Overdue" value={data.inProgress} />
        <SummaryItem label="Due" value={data.done} />
      </div>
    </div>
  )
}


const SummaryItem = ({label, value}: {label: string, value: number}) => {
  return (
    <Card className="gap-2 items-center">
      <Typography variant="body" weight="medium">{label}:</Typography>
      <Typography variant="caption" weight="normal">{value}</Typography>
    </Card>
  )
}

export default Summary; 