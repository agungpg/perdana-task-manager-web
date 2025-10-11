import { IconProps } from "@/app/types/icons";

const ChartIcon = ({color = "white", width = 33, height = 28, className = "", viewBox = "0 0 33 28", onClick = () => {}}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
      <path d="M0.416656 0V28H32.4167V24H4.41666V0H0.416656ZM20.4167 0V20H28.4167V0H20.4167ZM8.41666 8V20H16.4167V8H8.41666Z" fill={color}/>
    </svg>
  )
}

export default ChartIcon;