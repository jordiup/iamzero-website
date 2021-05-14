import * as React from "react";

const AzureLogo: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 161.67 129"
      width="3em"
      height="3em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Azure</title>
      <path
        d="m88.33 0-47.66 41.33-40.67 73h36.67zm6.34 9.67-20.34 57.33 39 49-75.66 13h124z"
        fill="#0072c6"
      />
    </svg>
  );
};

export default AzureLogo;
