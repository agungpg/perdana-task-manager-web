import { Project } from "@/app/types/project";
import api from "./api";
import { ProjectSummaries } from "@/screens/projects/types";

export const fetchProjectById = async (id: string) => {
    const response = await api.get<Project>(`/api/project/${id}`);
    return response
}

export const fetchProjectSummaries = async () => {
    const response = await api.get<ProjectSummaries[]>(`/api/project/summaries`);
    return response
}