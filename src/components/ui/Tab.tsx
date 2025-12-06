import { cn } from "@/utils/cn";
import Card from "./Card";

interface ITabList {
    id: number;
    title: string;
    className?: string;
    onClick?: () => void;
    renderContent?: () => React.ReactNode;
}
interface ITabProps {
    className?: string;
    title?: string;
    titleClassName?: string;
    list: ITabList[];
    activeTab?: number;
    onChangeTab?: (tabId: number) => void;
}

const Tab = ({
    className,
    title,
    titleClassName,
    list,
    activeTab,
    onChangeTab
}: ITabProps) => {
    return <div className={className}>
       {title && <p className={cn("text-[16px] font-semibold", titleClassName)}>{title}</p>}
       <div className="flex items-center gap-4 overflow-x-auto py-3">
            {list.map((tab, idx) => (
                <Card  
                    onClick={() => {
                        if(onChangeTab) onChangeTab(idx);
                        if(tab.onClick) tab.onClick();
                    }}
                    className={
                        cn(
                            "px-4 py-2 flex items-center justify-center cursor-pointer", 
                            tab.className,
                            idx === activeTab ? "bg-[#17A2B8]" : "bg-[#FFF]"
                        )} 
                    key={tab.id}
                >
                    <p className={cn("w-full !whitespace-nowrap", idx === activeTab ? "text-[#fff]" : "")}>{tab.title}</p>
                </Card>
            ))}
       </div>
    </div>;
}

export default Tab;