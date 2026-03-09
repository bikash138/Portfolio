import React from "react";

const Python: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.3" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">
      Py
    </text>
  </svg>
);

export default Python;
