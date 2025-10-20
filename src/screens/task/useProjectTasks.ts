import { useQuery } from "@tanstack/react-query";
import { getTasksByProjectId } from "@/services/tasks";

const useProjectTasks = (projectId: string | null) => {
  return useQuery({
    queryKey: ["projectTasks", projectId],
    queryFn: () => getTasksByProjectId(projectId as string),
    enabled: Boolean(projectId),
  });
};

export default useProjectTasks;
