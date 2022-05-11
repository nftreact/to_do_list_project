import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, todoDone } from "../Redox/Reducer";
import trash from "../Assets/image/trash.png";

export default function Completed({ tab }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.Array);
  const justCompletedData = data.filter((item) => item.completed === true);

  const removeTask = (item) => {
    const id = item.id;
    dispatch(deleteTask({ id }));
  };
  console.log(data, "data");

  console.log(justCompletedData);

  return (
    <>
      <section className="w-[100%] h-[100%] ">
        <section
          dir="ltr"
          className={`w-[90%]  mt-10 h-[300px] rounded-[8px] m-auto  overflow-auto transition-opacity duration-700 opacity-100 
          ${tab ? "opacity-100" : null}`}
        >
          {justCompletedData.map((item) => {
            return (
              <section
                key={item.id}
                className="w-[95%] mr-4 px-3 text-[14px] my-2 cursor-pointer  h-[50px] bg-[#00800042] z-50 flex justify-between items-center rounded-[8px] m-auto "
              >
                <div className="w-[60%]">
                  <p>{item.title}</p>
                </div>
                <div className="w-[5%] flex">
                  <img
                    src={trash}
                    onClick={() => removeTask(item)}
                    className="mr-2 w-6 h-6 hover:w-7  hover:h-7"
                  />
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
}
