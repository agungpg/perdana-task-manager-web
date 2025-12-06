import { getProjectSummaryById } from "@/constants/projects";

export type TaskItem = {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  status: string;
  timeRemaining: string;
  priority: "High" | "Medium" | "Low";
  image: string;
};

export type ProjectTasksResponse = {
  projectId: string;
  projectName: string;
  tasks: TaskItem[];
};

const TASKS: TaskItem[] = [
  {
    id: "task-1",
    projectId: "project-1",
    projectName: "Mobile App Redesign",
    title: "Review user interviews",
    status: "In Progress",
    timeRemaining: "6 hours",
    priority: "High",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-2",
    projectId: "project-1",
    projectName: "Mobile App Redesign",
    title: "Finalize moodboard",
    status: "Pending",
    timeRemaining: "12 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-3",
    projectId: "project-1",
    projectName: "Mobile App Redesign",
    title: "Deliver prototype",
    status: "Completed",
    timeRemaining: "0 hours",
    priority: "Low",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-4",
    projectId: "project-2",
    projectName: "Internal Tooling Upgrade",
    title: "Audit current tooling",
    status: "Completed",
    timeRemaining: "0 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-5",
    projectId: "project-2",
    projectName: "Internal Tooling Upgrade",
    title: "Implement CI pipeline",
    status: "In Progress",
    timeRemaining: "3 hours",
    priority: "High",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-6",
    projectId: "project-2",
    projectName: "Internal Tooling Upgrade",
    title: "Document developer workflow",
    status: "Pending",
    timeRemaining: "9 hours",
    priority: "Low",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-7",
    projectId: "project-3",
    projectName: "Website Localization",
    title: "Collect translation glossary",
    status: "In Progress",
    timeRemaining: "5 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-8",
    projectId: "project-3",
    projectName: "Website Localization",
    title: "Tag UI strings",
    status: "Pending",
    timeRemaining: "8 hours",
    priority: "High",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-9",
    projectId: "project-3",
    projectName: "Website Localization",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-10",
    projectId: "project-3",
    projectName: "Website Localization 2",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-11",
    projectId: "project-3",
    projectName: "Website Localization 3",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-12",
    projectId: "project-3",
    projectName: "Website Localization 4",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-13",
    projectId: "project-3",
    projectName: "Website Localization 5",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-14",
    projectId: "project-3",
    projectName: "Website Localization 6",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
  {
    id: "task-15",
    projectId: "project-3",
    projectName: "Website Localization 7",
    title: "QA localized pages",
    status: "Pending",
    timeRemaining: "16 hours",
    priority: "Medium",
    image: "https://placehold.co/400x400",
  },
];

export const getTasksByProjectId = async (
  projectId: string,
): Promise<ProjectTasksResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const tasks = TASKS.filter((task) => task.projectId === projectId);
  const project = getProjectSummaryById(projectId);

  return {
    projectId,
    projectName: project?.name ?? "Unknown Project",
    tasks,
  };
};
