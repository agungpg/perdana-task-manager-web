import { useState } from "react";
import { LoginProps } from "./inteface";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/login";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const [form, setForm] = useState<LoginProps>({
    username: "",
    password: "",
  });

  const { data, error, mutate, isPending } = useMutation({
    mutationFn: (data: LoginProps) => login(data),
    onSuccess: () => {
      console.log("success");
      router.push("/dashboard");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log(form);
    if (form.username && form.password) {
      mutate({
        username: form.username,
        password: form.password,
      });
    }
  };

  return {
    handleLogin,
    handleChange,
    form,
    data,
    error,
    isPending,
  };
};

export default useLogin;