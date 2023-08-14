import React from "react";

const Pill = ({ children }) => {
  return (
    <div className="pill px-[20px] py-[10px] rounded-[24px] bg-gray/20 w-fit mb-[14px] font-bold text-green/70 font-montserrat text-[13px] md:text-base">
      {children}
    </div>
  );
};

export default Pill;
