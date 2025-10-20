import { IconProps } from "@/app/types/icons";

const ArrowLeftIcon = ({
  width = 24,
  height = 24,
color = "#000000",
className = "",
}: IconProps) => (
<svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

export default ArrowLeftIcon;