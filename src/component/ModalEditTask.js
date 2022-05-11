import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, UpdateInput, updateDynaicState } from "../Redox/Reducer";
import send from "../Assets/image/send.png";

export default function ModalEditTask({ ModalEdit, setModalEdit, taskInfo }) {
  const dispatch = useDispatch();
  const valueInput = useSelector((state) => state.data.valueInput);
  const dynamicData = useSelector((state) => state.data.dynamicState);
  const [text, settext] = useState('');

  const changTaskValue = () => {
    const id = taskInfo.id;
    const title = text;
    dispatch(updateTask({ id, title: title }));
    dispatch(UpdateInput(""));
  };

  useEffect(() => {
    settext(taskInfo?.title)
  }, [taskInfo]);


  return (
    <section className="relative w-full h-full flex justify-center ">
      <div
        onClick={() => setModalEdit(false)}
        className={`${ModalEdit
          ? "w-screen h-100vh  bg-[#000000cb] fixed top-0 right-0 left-0 bottom-0  "
          : null
          }`}
      ></div>
      <div
        className={`${ModalEdit
          ? "bg-[#ffffffdd] rounded-lg w-[80%] h-80 absolute top-5  bottom-0  "
          : ""
          }`}
      >
        <div
          dir="ltr"
          className={`${ModalEdit
            ? "w-[100%] flex items-center justify-center pt-16"
            : "opacity-0"
            }`}
        >
          <input
            value={text}
            onChange={(e) => settext(e.target.value)}
            className={`${ModalEdit
              ? "bg-[#0000007c] rounded-[4px]  placeholder:text-[10px] text-[10px] w-[500px]  pl-[20px]  h-[30px]"
              : "opacity-0"
              }`}
          />
          <img
            className={`${ModalEdit ? "w-5 h-5 ml-5 cursor-pointer" : "opacity-0"
              }`}
            src={send}
            onClick={() => {
              changTaskValue();
              setModalEdit(false);
            }}
          />
        </div>
      </div>
    </section>
  );
}
