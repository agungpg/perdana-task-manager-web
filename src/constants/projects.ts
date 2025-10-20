export type ProjectSummary = {
  id: string;
  name: string;
  totalTasks: number;
  tasksDone: number;
  tasksInProgress: number;
  tasksToDo: number;
};

export const projectSummaries: ProjectSummary[] = [
  {
    id: "project-1",
    name: "Mobile App Redesign",
    totalTasks: 24,
    tasksDone: 10,
    tasksInProgress: 8,
    tasksToDo: 6,
  },
  {
    id: "project-2",
    name: "Internal Tooling Upgrade",
    totalTasks: 18,
    tasksDone: 5,
    tasksInProgress: 7,
    tasksToDo: 6,
  },
  {
    id: "project-3",
    name: "Website Localization",
    totalTasks: 32,
    tasksDone: 14,
    tasksInProgress: 10,
    tasksToDo: 8,
  },
];

export const getProjectSummaryById = (id: string) =>
  projectSummaries.find((project) => project.id === id);
