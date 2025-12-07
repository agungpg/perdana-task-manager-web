import { cn } from "@/utils/cn";

type DetailItemProps = {
    className: string;
    label: string; 
    labelClassName?: string;
    value: string;
    valueClassName?: string;
}

const DetailItem = ({className, label, labelClassName, value, valueClassName}: DetailItemProps) => (
  <div className={className}>
    <p className={cn("font-semibold", labelClassName)}>{label}</p>
    <p className={cn("text-base", valueClassName)}>{value}</p>
  </div>
)

export default DetailItem;