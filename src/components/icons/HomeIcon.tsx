import { IconProps } from "@/app/types/icons";

const HomeIcon = ({color = "white", width = 36, height = 32, className = "", viewBox = "0 0 36 32", onClick = () => {}}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
      <path d="M18 0.25L0 13.75H4.5V31.75H13.5V22.75H22.5V31.75H31.5V13.615L36 13.75L18 0.25Z" fill={color}/>
    </svg>
  )
}

export default HomeIcon;