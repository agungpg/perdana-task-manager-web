import { fetchProjectSummaries } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

const useProjectSummaries = () => {
  return useQuery({
    queryKey: ["project-summaries"],
    queryFn: () => fetchProjectSummaries(),
  });
}

export default useProjectSummaries;