"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";

type ProjectCardProps = {
    id: string;
    name: string;
    statuses: Record<string, number>
}

const DetailItem = ({label, value}: {label: string; value: string}) => (
  <div>
    <p className="font-semibold">{label}</p>
    <p className="text-base">{value}</p>
  </div>
)

const ProjectCard = ({
    id,
    name,
    statuses
}: ProjectCardProps) => {
    const router = useRouter();

    const handleNavigateToTasks = useCallback(() => {
        router.push(`/task?projectId=${id}`);
    }, [router, id]);

    return (
    <Card className="flex-col items-start gap-3 cursor-pointer" onClick={handleNavigateToTasks}>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="grid w-full grid-cols-2 gap-2 text-sm text-gray-700">
          {Object.keys(statuses).map(s => (
            <DetailItem
              label={s}
              value={String(statuses[s])}
            />
          ))}
        </div>
    </Card>
    )
}

export default ProjectCard;
