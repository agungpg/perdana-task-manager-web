"use client";
import HomeIcon from "../icons/HomeIcon";
import ChecklistIcon from "../icons/ChecklistIcon";
import ProfileIcon from "../icons/ProfileIcon";
import AddIcon from "../icons/AddIcon";
import { useRouter } from "next/navigation";
import NotificationIcon from "../icons/NotificationIcon";


const NavigationBar = () => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[560px] mx-auto bg-[#17A2B8] py-[8px] px-[12px] w-full flex items-center justify-around">
        <HomeIcon className="cursor-pointer" onClick={() => handleNavigate("/dashboard")} />
        <ChecklistIcon className="cursor-pointer" onClick={() => handleNavigate("/task")} />
        <AddIcon className="cursor-pointer" onClick={() => handleNavigate("/add")} />
        <NotificationIcon height={34} width={34} color="#fff" className="cursor-pointer" onClick={() => handleNavigate("/notifications")} />
        <ProfileIcon className="cursor-pointer" onClick={() => handleNavigate("/profile")} />
    </div>
  )
}

export default NavigationBar;