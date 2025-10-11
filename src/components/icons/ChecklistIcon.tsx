import { IconProps } from "@/app/types/icons";

const ChecklistIcon = ({color = "white", width = 33, height = 28, className = "", viewBox = "0 0 33 28", onClick = () => {}}: IconProps) => {
  return (
<svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
<path d="M0.138885 0V28H28.1389V13.64L24.1389 17.64V24H4.13889V4H18.4989L22.4989 0H0.138885ZM28.1389 0L16.1389 12L12.1389 8L8.13889 12L16.1389 20L32.1389 4L28.1389 0Z" fill={color}/>
</svg>
  )
}

export default ChecklistIcon;