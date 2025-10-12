import { LoginProps } from "@/screens/login/inteface";
import api from "./api";
import { setAccessToken } from "@/utils/token";

const login = async (data: LoginProps) => {
  const response = await api.post<any, LoginProps>("/auth/login", {
    body: data,
  });
  setAccessToken(response.token);

  return response;
};

export { login };