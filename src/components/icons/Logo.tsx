
export const Logo = ({
  width = 93,
  height = 59,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg width={width ? width : "93"} height={height ? height : "59"} viewBox="0 0 93 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_42_438)">
    <path d="M36.6255 0.0427856H20.4377H4L9.51755 6.82343H32.8949L42.6229 22.5949H46.8854H50.5393L57.0429 6.82343H63.0138L70.2106 0.0427856H53.4181L47.6606 16.6H46.701H45.7415L36.6255 0.0427856Z" fill="#17A2B8"/>
    <path d="M70.9303 0.613725L63.7335 7.465V50H70.9303V0.613725Z" fill="#17A2B8"/>
    <path d="M36.6255 0.0427856H20.4377H4L9.51755 6.82343H32.8949L42.6229 22.5949H46.8854H50.5393L57.0429 6.82343H63.0138L70.2106 0.0427856H53.4181L47.6606 16.6H46.701H45.7415L36.6255 0.0427856Z" stroke="#17A2B8"/>
    <path d="M70.9303 0.613725L63.7335 7.465V50H70.9303V0.613725Z" stroke="#17A2B8"/>
    <path d="M26.2228 8.03577H20.5526V49.7143H27.7494V28.8751V8.03577H26.2228Z" stroke="#17A2B8"/>
    <path d="M80.1607 10.0144L87.5444 19.0949L84.2186 22.0037L72.8017 8.12834L72.8123 1.36758L80.1607 10.0144Z" fill="white" stroke="#17A2B8"/>
    <path d="M72.2418 26.9094L83.916 16.6357L86.5688 19.794L72.2424 33.1266L72.2418 26.9094Z" fill="white" stroke="#17A2B8"/>
    </g>
    <defs>
    <filter id="filter0_d_42_438" x="0" y="0.0427856" width="92.2357" height="58.1716" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_438"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_438" result="shape"/>
    </filter>
    </defs>
  </svg>)
}