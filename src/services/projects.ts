import { Project } from "@/app/types/project";
import api from "./api";
import { ProjectSummaries } from "@/screens/projects/types";

export const fetchProjectById = async (id: string) => {
    const response = await api.get<Project, void>(`/api/project/${id}`);
    return response
}

export const fetchProjectSummaries = async () => {
    const response = await api.get<ProjectSummaries[], void>(`/api/project/summaries`);
    return response
}