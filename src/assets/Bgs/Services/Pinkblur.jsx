import * as React from "react";
const Pinkblur = (props) => (
  <svg
    width={286}
    height={314}
    viewBox="0 0 286 314"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_1_664)">
      <path
        d="M308.766 101.929C315.913 117.256 312.258 127.63 297.802 133.051C283.345 138.471 272.462 145.2 265.153 153.238C257.843 161.275 249.397 168.938 239.813 176.228C230.229 183.518 218.697 190.34 205.215 196.695C191.733 203.05 178.9 202.303 166.718 194.452C154.535 186.602 144.871 176.041 137.724 162.77C130.577 149.499 129.115 135.013 133.338 119.313C137.561 103.612 136.505 89.4996 130.17 76.9763C123.836 64.453 122.049 51.2755 124.81 37.4438C127.572 23.6121 133.663 11.9299 143.084 2.39728C152.505 -7.13538 162.17 -16.9484 172.078 -27.0418C181.987 -37.1352 193.032 -36.1072 205.215 -23.9577C217.397 -11.8083 227.874 -4.42511 236.646 -1.8083C245.417 0.808506 258.899 -0.406441 277.092 -5.45314C295.284 -10.4998 304.786 -4.42511 305.599 12.7711C306.411 29.9672 305.355 45.2942 302.431 58.7521C299.507 72.21 301.619 86.6024 308.766 101.929Z"
        fill="#E879F9"
        fillOpacity={0.15}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1_664"
        x={-0.447266}
        y={-157.912}
        width={436.76}
        height={482.872}
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
          stdDeviation={62}
          result="effect1_foregroundBlur_1_664"
        />
      </filter>
    </defs>
  </svg>
);
export default Pinkblur;
