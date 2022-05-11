import React from "react";
import { Outlet, Link } from "react-router-dom";

import backgraound from "../Assets/image/backgraound.jpg";
import MobileDashboardSetting from "../component/MobileDashboardSetting";
import DesktopDashbordSetting from "../component/DesktopDashbordSetting";



export default () => {
  return (
    <section className="relative">
      <header className="w-full h-10 bg-[#0000002b] rounded-[4px] flex  justify-between items-center px-5 absolute top-0 z-10">
        <div className="text-[.7rem] text-[#C4C4C4]">
          <p>دکمه خروج و تاریخ</p>
        </div>
        <div className="text-[.7rem] text-[#C4C4C4]">
          <p>مشخصات کاربر</p>
        </div>
      </header>
      <img
        className="w-full h-[100vh] m-auto object-cover blur-lg "
        src={backgraound}
      />
      <MobileDashboardSetting />
      <DesktopDashbordSetting/>
      <Outlet />
    </section>
  );
};
