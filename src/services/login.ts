import { LoginProps } from "@/screens/login/inteface";
import api from "./api";
import { setAccessToken } from "@/utils/token";
interface LoginResponse {
  token: string;
}

const login = async (data: LoginProps) => {
  const response = await api.post<LoginResponse, LoginProps>("/auth/login", {
    body: data,
  });
  setAccessToken(response.token);

  return response;
};

export { login };