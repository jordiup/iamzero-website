import * as React from "react";

const TerraformLogo: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 80.8"
      width="3em"
      height="3em"
      {...props}
    >
      <g id="XMLID_8_">
        <path
          id="XMLID_21_"
          fill="#000"
          d="M25.4 14.3l21.4 12.4v24.7L25.4 39z"
        />
        <path id="XMLID_20_" fill="#000" d="M50.6 26.7L72 14.3V39L50.6 51.4z" />
        <path id="XMLID_19_" fill="#000" d="M0 0l21.4 12.4v24.7L0 24.7z" />
        <path
          id="XMLID_18_"
          fill="#000"
          d="M25.4 43.7L46.8 56v24.8L25.4 68.4z"
        />
      </g>
    </svg>
  );
};

export default TerraformLogo;
