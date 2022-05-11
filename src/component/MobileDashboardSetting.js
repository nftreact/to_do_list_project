import { useState } from "react";

import Menu from "../Assets/Svgs/NavbarSVG/Menu";
import XIcon from "../Assets/Svgs/NavbarSVG/XIcon";
import Exit from "../Assets/Svgs/Exit";
import Pen from "../Assets/Svgs/Pen";
import editTask from "../Assets/image/editTask.png";

import CreateTask from "../component/CreateTask";
import EditTask from "../component/EditTask";

export default () => {
  const [isSettingMenuOpen, setisSettingMenuOpen] = useState(false);
  const [penModal, setPenModal] = useState(false);
  const [isEditOpen, setisEditOpen] = useState(false);

  return (
    <>
      <CreateTask penModal={penModal} setPenModal={setPenModal} />
      <EditTask
        isEditOpen={isEditOpen}
        setisEditOpen={setisEditOpen}
      />
      <div
        className={`
        ${
          isSettingMenuOpen
            ? "absolute inset-0 w-screen h-screen backdrop-blur-sm bg-[#ffffff38]"
            : "hidden"
        }
        `}
      ></div>
      <div
        onClick={() => {}}
        className={`md:hidden fixed right-3 flex justify-center items-center w-14 h-14 rounded-full  bg-[#c2c2c2] transition-transform duration-500
        ${
          isSettingMenuOpen
            ? " bottom-3 -translate-y-16 shadow-xl"
            : " bottom-3 "
        }
        `}
      >
        <Exit width="18" height="18" color={"#2e3a3f"} />
      </div>

      <div
        onClick={() => {
          setisEditOpen(true);
          setPenModal(false);
          setisSettingMenuOpen(false);
        }}
        className={`md:hidden fixed right-3 flex justify-center items-center w-14 h-14 rounded-full  bg-[#c2c2c2] transition-transform duration-500
        ${
          isSettingMenuOpen
            ? " bottom-3 -translate-y-32 shadow-xl"
            : " bottom-3 "
        }
        `}
      >
        <img className="w-[25px] h-[25px] color-[#2e3a3f]" src={editTask} />
      </div>

      <div
        onClick={() => {
          setPenModal(true);
          setisEditOpen(false);
          setisSettingMenuOpen(false);
        }}
        className={`md:hidden fixed right-3 flex justify-center items-center w-14 h-14 rounded-full  bg-[#c2c2c2] transition-transform duration-500
        ${
          isSettingMenuOpen
            ? " bottom-3 -translate-y-48 shadow-xl"
            : " bottom-3 "
        }
        `}
      >
        <Pen />
      </div>

      <div
        onClick={() => setisSettingMenuOpen(!isSettingMenuOpen)}
        className="md:hidden fixed flex justify-center items-center w-14 h-14 bottom-3 right-3 rounded-full shadow-xl bg-[#c2c2c2]"
      >
        <div>{isSettingMenuOpen ? <XIcon color="#2e3a3f" /> : <Menu />}</div>
      </div>
    </>
  );
};
