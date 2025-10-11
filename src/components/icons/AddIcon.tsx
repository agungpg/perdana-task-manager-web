import { IconProps } from "@/app/types/icons";

const AddIcon = ({width = 65, height = 64, className = "", onClick = () => {}}: IconProps) => {

  return (
    <svg width={width} height={height} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
      <g filter="url(#filter0_d_6_166)">
      <rect x="4.27777" width="56" height="56" rx="28" fill="white"/>
      <path d="M28.7778 14V24.5H18.2778V31.5H28.7778V42H35.7778V31.5H46.2778V24.5H35.7778V14H28.7778Z" fill="#17A2B8"/>
      </g>
      <defs>
        <filter id="filter0_d_6_166" x="0.277771" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_166"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_166" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}

export default AddIcon;
