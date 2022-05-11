import React from "react";
import { useState } from "react";
import CreateTaskDesktop from "../component/CreateTaskDesktop";
import DesktopEditTask from "../component/DesktopEditTask";
import Completed from "../component/Completed";

export default function DesktopDashbordSetting() {
  const [tab, setTab] = useState(1);
  const [Delay, setDeley] = useState(false);
  return (
    <>
      <section className="w-[100%] h-[100%] flex justify-center items-center">
        <section
          dir="rtl"
          className=" md:bg-[#c4c4c4b9] md:w-[80%] md:h-[60%] top-[15%] min-w-[500px] min-h-[420px] absolute rounded-lg "
        >
          <div className=" md:flex  h-[40px] mt-5 mr-3 text-[12px]  sd:hidden ">
            <p
              onClick={() => {
                setTab(1);
              }}
              className={`${
                tab === 1
                  ? "bg-[#00000091] rounded-[6px] px-3 flex items-center ml-1 hover:bg-[#00000091] cursor-pointer"
                  : "bg-[#00000039] rounded-[6px] px-3 flex items-center ml-1 hover:bg-[#00000091] cursor-pointer"
              }`}
            >
              createTask
            </p>
            <p
              onClick={() => setTab(2)}
              className={`${
                tab === 2
                  ? "bg-[#00000091] rounded-[6px] px-3 flex items-center ml-1 hover:bg-[#00000091] cursor-pointer"
                  : "bg-[#00000039] rounded-[6px] px-3 flex items-center ml-1 hover:bg-[#00000091] cursor-pointer"
              }`}
            >
              editTask
            </p>
            <p
              onClick={() => setTab(3)}
              className={`${
                tab === 3
                  ? "bg-[#00000091] rounded-[6px] px-3 flex items-center ml-1 hover:bg-[#00000091] cursor-pointer"
                  : "bg-[#00000039] rounded-[6px] px-3 flex items-center ml-1 hover:bg-[#00000091] cursor-pointer"
              }`}
            >
              completed
            </p>
          </div>
          <section>
            <div className={`${tab === 1 ? "md:block sd:hidden" : "hidden"}`}>
              <CreateTaskDesktop tab={tab} />
            </div>
            <div className={`${tab === 2 ? "md:block sd:hidden" : "hidden"}`}>
              <DesktopEditTask tab={tab} />
            </div>
            <div className={`${tab === 3 ? "md:block sd:hidden" : "hidden"}`}>
              <Completed tab={tab} />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
