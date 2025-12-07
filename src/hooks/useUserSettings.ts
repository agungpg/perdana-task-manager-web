import { fetchUserSettings } from "@/services/userSettings";
import { useQuery } from "@tanstack/react-query";

const useUserSettings = () => {
    return useQuery({
            queryKey: ['userSettings'], // Gunakan queryKey yang SAMA
            queryFn: fetchUserSettings, // Fungsi API Anda
            meta: {
                persist: true
            }
      });
}

export default useUserSettings