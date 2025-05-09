import * as React from "react";
const Featuredblur = (props) => (
  <svg
    width={179}
    height={88}
    viewBox="0 0 179 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_1_876)">
      <rect width={169} height={88} rx={8} fill="url(#paint0_linear_1_876)" />
    </g>
    <defs>
      <filter
        id="filter0_f_1_876"
        x={-10}
        y={-10}
        width={189}
        height={108}
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
          stdDeviation={5}
          result="effect1_foregroundBlur_1_876"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1_876"
        x1={0}
        y1={44}
        x2={169}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#73BFFA" stopOpacity={0.2} />
        <stop offset={1} stopColor="#0A0A0A" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default Featuredblur;
