import { projectSummaries } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

const PorjectList = () => {
    return (
    <div className="flex flex-col gap-4 px-5">
        {projectSummaries.map((project) => (
        <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            totalTasks={project.totalTasks}
            tasksDone={project.tasksDone}
            tasksInProgress={project.tasksInProgress}
            tasksToDo={project.tasksToDo}
        />
        ))}
    </div>
    )
}

export default PorjectList;
