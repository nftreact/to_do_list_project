import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, todoDone } from "../Redox/Reducer";
import trash from "../Assets/image/trash.png";
import done from "../Assets/image/done.png";

export default function CreateTaskDesktop({ tab }) {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const data = useSelector((state) => state.data).Array;

  const filterDataNotCompleted = data.filter(
    (item) => item.completed === false
  );

  const addTasks = () => {
    if (!text) {
      alert("please enter someting");
      return;
    }
    dispatch(
      addTask({
        title: text,
      })
    );
    settext("");
  };

  const removeTask = (item) => {
    const id = item.id;
    dispatch(deleteTask({ id }));
  };

  const handleCompleted = (item) => {
    const id = item.id;
    const completed = item.completed;
    dispatch(todoDone({ id, completed: !completed }));
    setTimeout(() => {
      alert("تسک شما به completed انتقال یافت");
    }, 200);
  };

  console.log(data, "data");

  return (
    <>
      <section className="w-[100%] h-[100%]">
        <div dir="ltr" className="w-[100%] flex justify-center pt-16">
          <input
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="please enter something"
            className={`bg-[#fffffff8] rounded-[4px] z-10 placeholder:text-[10px]  text-[10px] pl-[20px] w-[500px] h-[30px] transition-opacity	duration-1000 opacity-100
            ${tab ? "opacity-100 " : null}`}
          />
        </div>
        {filterDataNotCompleted.length == 0 ? (
          <p
            className={`w-[90%]  flex justify-center items-center  mt-5 h-[170px] rounded-[8px] m-auto overflow-auto transition-opacity duration-700 opacity-100 
          ${tab ? "opacity-100" : null}`}
          >
            you don't have task
          </p>
        ) : (
          <section
            dir="ltr"
            className={`w-[90%]  mt-5 h-[170px] rounded-[8px] m-auto overflow-auto transition-opacity duration-700 opacity-100 
          ${tab ? "opacity-100" : null}`}
          >
            {filterDataNotCompleted?.map((item) => {
              return (
                <section
                  key={item.id}
                  className="cursor-pointer w-[95%] mr-4 px-3 text-[14px] my-2  h-[50px] bg-[#ffffffac] z-50 flex justify-between items-center rounded-[8px] m-auto "
                >
                  <div className="w-[60%]">
                    <p>{item.title}</p>
                  </div>
                  <div className="w-[10%] flex">
                    <img
                      src={trash}
                      onClick={() => removeTask(item)}
                      className="mr-2 w-6 h-6 hover:w-7  hover:h-7"
                    />
                    <img
                      src={done}
                      onClick={() => handleCompleted(item)}
                      className="w-6 h-6 hover:w-7  hover:h-7"
                    />
                  </div>
                </section>
              );
            })}
          </section>
        )}

        <p className="px-8 pt-3 cursor-pointer " onClick={() => addTasks()}>
          submit
        </p>
      </section>
    </>
  );
}
