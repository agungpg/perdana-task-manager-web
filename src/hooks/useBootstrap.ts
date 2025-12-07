import { fetchUserSettings } from "@/services/userSettings";
import { useQuery } from "@tanstack/react-query";
import useUserSettings from "./useUserSettings";

const useBootstrap = () => {
    useUserSettings()
}

export default useBootstrap