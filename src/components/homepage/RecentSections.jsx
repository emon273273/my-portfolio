import React from "react";

export default function RecentSections() {
  return (
    <section>
      <div className="w-full h-[calc(100vh - 2.5rem - 1.5rem)] full-background min-w-max border bg-[#EDF7FA] all">
        <div className="max-w-screen-lg mx-auto h-full p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-normal text-[#21243D] ">
              Recent posts
            </h2>
            <a href="#" className="text-[#00A8CC] all font-normal text-[16px]">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="w-[354px] h-[264px] p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-[1.62rem] font-bold mb-2 all">
                Making a design system from scratch
              </h3>
              <p className="all text-[#21243D]">
                <span className="text-[18px] font-normal all mr-4">
                  12 Feb 2020
                </span>{" "}
                |{" "}
                <span className=" text-[18px] font-normal all ml-4">
                  Design, Pattern
                </span>
              </p>
              <p className=" text-[#21243D] all font-normal text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="w-[354px] h-[264px] p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-[1.62rem] font-bold mb-2 all">
                Making a design system from scratch
              </h3>
              <p className="all text-[#21243D]">
                <span className="text-[18px] font-normal all mr-4">
                  12 Feb 2020
                </span>{" "}
                |{" "}
                <span className=" text-[18px] font-normal all ml-4">
                  Design, Pattern
                </span>
              </p>
              <p className=" text-[#21243D] all font-normal text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
