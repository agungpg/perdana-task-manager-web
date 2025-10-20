"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";

type ProjectCardProps = {
    id: string;
    name: string;
    totalTasks: number;
    tasksDone: number;
    tasksInProgress: number;
    tasksToDo: number;
}

const ProjectCard = ({
    id,
    name,
    totalTasks,
    tasksDone,
    tasksInProgress,
    tasksToDo,
}: ProjectCardProps) => {
    const router = useRouter();

    const handleNavigateToTasks = useCallback(() => {
        router.push(`/task?projectId=${id}`);
    }, [router, id]);

    return (
    <Card className="flex-col items-start gap-3 cursor-pointer" onClick={handleNavigateToTasks}>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="grid w-full grid-cols-2 gap-2 text-sm text-gray-700">
        <div>
            <p className="font-medium">Total Tasks</p>
            <p className="text-base">{totalTasks}</p>
        </div>
        <div>
            <p className="font-medium">Done</p>
            <p className="text-base">{tasksDone}</p>
        </div>
        <div>
            <p className="font-medium">In Progress</p>
            <p className="text-base">{tasksInProgress}</p>
        </div>
        <div>
            <p className="font-medium">To Do</p>
            <p className="text-base">{tasksToDo}</p>
        </div>
        </div>
    </Card>
    )
}

export default ProjectCard;
