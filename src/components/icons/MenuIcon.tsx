import { IconProps } from "@/app/types/icons";

const MenuIcon = ({color = "#000", width = 33, height = 28, className = "", viewBox = "0 0 33 28", onClick = () => {}}: IconProps) => {
  return (
  <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width={width} height={height}>
    <path fill={color} d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/>
  </svg>
  )
}

export default MenuIcon;