import React from "react";

const items = [
  {
    id: 1,
    name: "Instructors",
    amount: "150+",
  },
  {
    id: 2,
    name: "Success stories",
    amount: "8500+",
  },
  {
    id: 3,
    name: "Courses",
    amount: "350+",
  },
  {
    id: 4,
    name: "Hours Tutors",
    amount: "600k+",
  },
];

const Counters = () => {
  return (
    // <div className="w-screen h-full py-[40px] px-[100px] bg-red">
    //   <div className="container mx-auto w-full">
    //     <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center text-center gap-y-[50px] divide-y md:divide-x">
    //       {items.map((item, i) => (
    //         <div key={i} className="flex flex-col gap-2 text-white">
    //           <h4 className="font-semibold text-[36px]">{item.amount}</h4>
    //           <p className="font-normal text-[20px]">{item.name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="w-screen h-full px-[16px]">
      <div className="container mx-auto">
        <div className="w-full md:w-[75%] mx-auto py-[50px] md:py-[100px] bg-red rounded-[30px] ">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center text-center gap-y-[50px] divide-y md:divide-y-0 md:divide-x">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 md:gap-2 text-white pt-8">
                <h4 className="font-semibold text-[28px] md:text-[36px]">{item.amount}</h4>
                <p className="font-normal text-base md:text-[20px]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
