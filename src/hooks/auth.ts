import { getAccessToken } from "@/utils/token";

const isLoggedIn = (): boolean => {
  return getAccessToken() !== null;
}

export { isLoggedIn };