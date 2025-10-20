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
    title?: string;
    titleClassName?: string;
    list: ITabList[];
    activeTab?: string;
    onChangeTab?: (tabId: string) => void;
}

const Tab = ({
    title,
    titleClassName,
    list,
    activeTab,
    onChangeTab
}: ITabProps) => {
    return <div>
       {title && <p className={cn("text-[16px] font-semibold", titleClassName)}>{title}</p>}
       <div className="flex items-center gap-4 overflow-x-auto py-3">
            {list.map((tab) => (
                <Card  
                    onClick={() => {
                        if(onChangeTab) onChangeTab(tab.id.toString());
                        if(tab.onClick) tab.onClick();
                    }}
                    className={
                        cn(
                            "px-4 py-2 flex items-center justify-center cursor-pointer", 
                            tab.className,
                            tab.id.toString() === activeTab ? "bg-[#17A2B8]" : "bg-[#FFF]"
                        )} 
                    key={tab.id}
                >
                    <p className={cn("w-full !whitespace-nowrap", tab.id.toString() === activeTab ? "text-[#fff]" : "")}>{tab.title}</p>
                </Card>
            ))}
       </div>
    </div>;
}

export default Tab;