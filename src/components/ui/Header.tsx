import { Logo } from "../icons/Logo";
import { cn } from "@/utils/cn";
const Header = ({
  Icon,
  title,
  withLogo = true,
  className,
  titleClassName,
  leftButton,
  rightButton,
  isFixed = false,
}: {
  Icon?: React.ReactNode;
  title?: string;
  withLogo?: boolean;
  className?: string;
  titleClassName?: string;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  isFixed?: boolean;
}) => {

  return (
    <div className={cn(
      'w-full max-w-[560px] mx-auto bg-white flex items-center py-[12px] px-[20px] gap-[12px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]',
      isFixed ? "fixed z-9999 top-0 left-0 right-0 z-50" : "",
      className
    )}>
      {leftButton ? leftButton : null}
      {withLogo ? <Logo width={69} height={45} /> : Icon ? Icon : null}
      <p className={cn(
        'text-[32px] font-bold text-[#17A2B8]',
        titleClassName
      )}>{title}</p>
      {rightButton ? rightButton : null}
    </div>
  )
}

export default Header;