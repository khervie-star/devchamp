import React from "react";

export const ContainedButton = ({ onClick, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-[40px] py-[15px] text-white text-[14px] font-bold text-center tracking-[0.2px] leading-[22px] flex items-center justify-center  rounded-[5px] bg-[#96BB7C] border border-solid border-[transparent]">
      {children}
    </button>
  );
};

export const RoundedButton = ({ onClick, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-[40px] py-[6px] md:py-[15px] text-white text-[12px] md:text-[14px] font-bold text-center tracking-[0.2px] leading-[22px] flex items-center justify-center  rounded-[30px] bg-red border border-solid border-[transparent]">
      {children}
    </button>
  );
};

export const TextButton = ({ onClick, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-[20px] py-[15px] text-red text-[14px] font-bold text-center tracking-[0.2px] leading-[22px] flex items-center justify-center  rounded-[5px] bg-transparent border border-solid border-[transparent]">
      {children}
    </button>
  );
};

export const OutlinedButton = ({ onClick, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-[40px] py-[15px] text-primary text-[14px] font-bold text-center tracking-[0.2px] leading-[22px] flex items-center justify-center  rounded-[5px] bg-transparent border border-solid border-primary">
      {children}
    </button>
  );
};
