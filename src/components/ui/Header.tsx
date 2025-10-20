"use client";
import { Logo } from "../icons/Logo";
import { cn } from "@/utils/cn";
import ProjectIcon from "../icons/ProjectIcon";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
const Header = ({
  Icon,
  title,
  withLogo = true,
  className,
  titleClassName,
  leftButton,
  rightButton,
  isFixed = false,
  withProjectIcon = true,
}: {
  Icon?: React.ReactNode;
  title?: string;
  withLogo?: boolean;
  className?: string;
  titleClassName?: string;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  isFixed?: boolean;
  withProjectIcon?: boolean;
}) => {
  const router = useRouter()
  const handleProjectIconClick = useCallback(() => {
    router.push('/projects');
  }, [router]);

  return (
    <div className={cn(
      'w-full max-w-[560px] mx-auto bg-white flex items-center py-[12px] px-[20px] gap-[12px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]',
      isFixed ? "fixed z-9999 top-0 left-0 right-0 z-50" : "",
      className
    )}>
      {leftButton ? leftButton : null}
      {withLogo ? <Logo width={80} height={50} /> : Icon ? Icon : null}
      <p className={cn(
        'text-[32px] font-bold text-[#17A2B8] !w-[70vw]',
        titleClassName
      )}>{title}</p>
      {rightButton ? rightButton : null}
      {withProjectIcon ? <div className="flex justify-end">
        <ProjectIcon onClick={handleProjectIconClick} className="cursor-pointer" color="#17A2BB"/> 
        </div>: null}
    </div>
  )
}

export default Header;