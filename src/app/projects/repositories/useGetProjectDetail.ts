import { fetchProjectById } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

const useGetProjectDetail = (id: string) => {
    return useQuery({
            queryKey: ['userSettings'], // Gunakan queryKey yang SAMA
            queryFn: () => fetchProjectById(id), // Fungsi API Anda
            meta: {
                persist: true
            }
      });
}

export default useGetProjectDetail