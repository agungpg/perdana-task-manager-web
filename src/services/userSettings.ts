import { UserSettings } from "@/app/types/userSettings";
import api from "./api";

export const fetchUserSettings = async () => {
  const response = await api.get<UserSettings, void>("/api/user-settings");

  return response;
}