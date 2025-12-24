import ProjectCard from "./ProjectCard";
import { ProjectSummaries } from "../types";

const PorjectList = ({data}: {data: ProjectSummaries[]}) => {
    return (
    <div className="flex flex-col gap-4 px-5">
        {data.map((project) => (
        <ProjectCard
            key={project.project_id}
            id={project.project_id}
            name={project.project_name}
            statuses={project.statuses}
        />
        ))}
    </div>
    )
}

export default PorjectList;
