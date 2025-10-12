"use client";
import LogoWithTextIcon from "@/components/icons/LogoWithTextIcon";
import { TextInput } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import useLogin from "./useLogin";

const LoginScreen = () => {
  const { handleLogin, handleChange, form, isPending, error } = useLogin();
  return (
    <div className="flex flex-col items-center justify-center w-full">
    <div className="flex flex-col items-center justify-center pt-[40px] gap-[12px] w-[80%] max-w-[380px]">
        <LogoWithTextIcon width={180} height={180} />
        <div className="flex flex-col items-center justify-center gap-[4px]">
          <Typography
            variant="h1"
            className="text-[32px] font-bold !text-[#17A2B8]"
          >
            Welcome Back!
          </Typography>

          <Typography
            variant="caption"
            className="text-[16px] text-center !text-[#6c757d] max-w-[400px] leading-relaxed"
          >
            Organize your day, boost productivity, and achieve your goals with our intuitive task management system
          </Typography>

        </div>
        <div className="flex flex-col items-center justify-center gap-[16px] mt-6 w-full">
          <TextInput 
            className="!rounded-md w-full" 
            placeholder="Enter your username" 
            size="lg" 
            labelClassName="text-[16px] font-medium text-[#6c757d]" 
            onChange={handleChange} 
            name="username" 
            value={form.username}
          />
          <TextInput 
            type="password" 
            className="!rounded-md w-full" 
            placeholder="Enter your password" 
            size="lg" 
            labelClassName="text-[16px] font-medium text-[#6c757d]" 
            onChange={handleChange} 
            name="password" 
            value={form.password}
          />
          {error && (
            <Typography
              variant="caption"
              weight="semibold"
              className="text-[14px] !text-[#dc3545] text-left w-full cursor-pointer"
            >
              {error.message}
            </Typography>
          )}
          <Typography
            variant="caption"
            weight="semibold"
            className="text-[14px] !text-[#138496] text-right w-full cursor-pointer"
          >
            Forgot password?
          </Typography>
          <Button className="w-full h-[48px] text-[16px] font-semibold text-[#fff]" onClick={handleLogin} loading={isPending}>Login</Button>

          <Typography
            variant="body"
            weight="medium"
            className="text-[14px] text-center w-full !text-[#6c757d] mt-6 cursor-pointer"
          >
            Don't have an account?
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;