import React from "react";
import { useMediaQuery } from "react-responsive";

const ClippathTitle = ({ title, color, bg, className, borderColor }) => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 425px)" });


  return (
    <div className={`general-title ${isSmallMobile && "text-2xl!"}`}>
      <div
        style={{
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClippathTitle;
