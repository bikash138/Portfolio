import React from "react";

const Vercel: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -17 256 256"
    className={`text-black dark:text-white ${className ?? ""}`}
    {...props}
  >
    <polygon fill="currentColor" points="128 0 256 221.705007 0 221.705007" />
  </svg>
);

export default Vercel;
