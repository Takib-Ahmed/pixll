import * as React from "react";
const WhiteShade = (props) => (
  <svg
    width={691}
    height={691}
    viewBox="0 0 691 691"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_1_570)">
      <circle cx={345.5} cy={345.5} r={145.5} fill="#73BFFA" />
    </g>
    <defs>
      <filter
        id="filter0_f_1_570"
        x={0}
        y={0}
        width={691}
        height={691}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={100}
          result="effect1_foregroundBlur_1_570"
        />
      </filter>
    </defs>
  </svg>
);
export default WhiteShade;
