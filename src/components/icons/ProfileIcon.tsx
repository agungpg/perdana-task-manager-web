import { IconProps } from "@/app/types/icons";

const ProfileIcon = ({color = "white", width = 29, height = 32, className = "", viewBox = "0 0 29 32", onClick = () => {}}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
      <path d="M14.7778 0C10.8667 0 7.66665 4.48 7.66665 10C7.66665 15.52 10.8667 20 14.7778 20C18.6889 20 21.8889 15.52 21.8889 10C21.8889 4.48 18.6889 0 14.7778 0ZM7.34665 20C3.57776 20.2 0.555542 23.68 0.555542 28V32H29V28C29 23.68 26.0133 20.2 22.2089 20C20.2889 22.44 17.6578 24 14.7778 24C11.8978 24 9.26665 22.44 7.34665 20Z" fill={color}/>
    </svg>
  )
}

export default ProfileIcon;