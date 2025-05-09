import * as React from "react";
const Layer = (props) => (
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_675)">
      <path
        d="M14 0V23.3331H32.6669V42H56V0H14ZM51.3331 37.3331H37.3331V18.6669H18.6669V4.66689H51.3331V37.3331Z"
        fill="#E879F9"
      />
      <path
        d="M0 28V56H28V28H0ZM23.3331 51.3331H4.66689V32.6669H23.3331V51.3331Z"
        fill="#E879F9"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_675">
        <rect width={56} height={56} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Layer;
