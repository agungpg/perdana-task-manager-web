"use client";
import HomeIcon from "../icons/HomeIcon";
import ChartIcon from "../icons/ChartIcon";
import ChecklistIcon from "../icons/ChecklistIcon";
import ProfileIcon from "../icons/ProfileIcon";
import AddIcon from "../icons/AddIcon";

const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[560px] mx-auto bg-[#17A2B8] py-[8px] px-[12px] w-full flex items-center justify-around">
        <HomeIcon className="cursor-pointer" />
        <ChecklistIcon className="cursor-pointer" />
        <AddIcon className="cursor-pointer" />
        <ChartIcon className="cursor-pointer" />
        <ProfileIcon className="cursor-pointer" />
    </div>
  )
}

export default NavigationBar;