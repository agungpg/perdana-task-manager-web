import { cn } from "@/utils/cn";

const Card = ({
    children,
    className = "",
    onClick = () => {},
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
    <div 
        className={cn(
        "bg-white rounded-lg p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] flex gap-2 items-center",
        className
        )}
        onClick={onClick}
    >
        {children}
    </div>)
}

export default Card;