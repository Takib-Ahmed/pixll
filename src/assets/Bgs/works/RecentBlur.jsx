import * as React from "react";
const Recentblur = (props) => (
  <svg
    width={480}
    height={857}
    viewBox="0 0 480 857"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_1_753)">
      <path
        d="M-293.106 182.468C-297.321 178.525 -293.885 170.355 -288.826 172.293C-288.497 172.418 -288.181 172.588 -287.882 172.798L283.901 575.117C308.044 592.103 315.363 630.687 299.82 659.028C284.425 687.098 252.964 693.469 231.045 672.956L-293.106 182.468Z"
        fill="url(#paint0_linear_1_753)"
        fillOpacity={0.6}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1_753"
        x={-467}
        y={0}
        width={947}
        height={857}
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
          stdDeviation={86}
          result="effect1_foregroundBlur_1_753"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1_753"
        x1={-316.907}
        y1={148.432}
        x2={372.485}
        y2={526.54}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#00020F" stopOpacity={0} />
        <stop offset={0.73} stopColor="#73BFFA" stopOpacity={0.5} />
        <stop offset={0.892} stopColor="#73BFFA" stopOpacity={0.5} />
        <stop offset={0.943} stopColor="#73BFFA" />
      </linearGradient>
    </defs>
  </svg>
);
export default Recentblur;
