import Button from "@/components/ui/Button"
import TaskList from "@/components/ui/TaskList"
import Typography from "@/components/ui/Typography"
import { memo } from "react"

const TadayTasks = () => {
    return <div className="flex-col">
        <Typography className="mb-3" variant="h3" weight="semibold">Today Task</Typography>
        <TaskList list={[
            {
                id: "task-13",
                title: "QA localized pages",
                status: "Pending",
                timeRemaining: "16 hours",
                priority: "Medium",
                image: "https://placehold.co/400x400",
            },
            {
                id: "task-14",
                title: "QA localized pages",
                status: "Pending",
                timeRemaining: "16 hours",
                priority: "Medium",
                image: "https://placehold.co/400x400",
            },
            {
                id: "task-15",
                title: "QA localized pages",
                status: "Pending",
                timeRemaining: "16 hours",
                priority: "Medium",
                image: "https://placehold.co/400x400",
            }
        ]} />
        <div className="flex justify-end mt-3">
            <div className="cursor-pointer font-medium font-primary">{`View All >`}</div>
        </div>
    </div>
}

export default memo(TadayTasks)