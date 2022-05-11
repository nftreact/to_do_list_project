import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, todoDone } from "../Redox/Reducer";
import ModalEditTask from "../component/ModalEditTask";
import trash from "../Assets/image/trash.png";
import done from "../Assets/image/done.png";
import edit from "../Assets/image/edit.png";

export default function DesktopEditTask({ tab }) {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const [ModalEdit, setModalEdit] = useState(false);
  const [taskInfo, setTaskInfo] = useState(null);
  const data = useSelector((state) => state.data.Array);

  const filterDataNotCompleted = data.filter(
    (item) => item.completed === false
  );

  const handleModalEditTask = (item) => {
    setTaskInfo(item);
  };

  const removeTask = (item) => {
    const id = item.id;
    dispatch(deleteTask({ id }));
  };

  const handleCompleted = (item) => {
    const id = item.id;
    const completed = item.completed;
    dispatch(todoDone({ id, completed: !completed }));
  };

  const handleEdit = () => {
    setModalEdit(true);
  };

  return (
    <>
      <ModalEditTask
        ModalEdit={ModalEdit}
        setModalEdit={setModalEdit}
        taskInfo={taskInfo}
        setTaskInfo={setTaskInfo}
      />
      <section className="w-[100%] h-[100%] ">
        <section
          dir="ltr"
          className={`w-[90%]  mt-10 h-[170px] rounded-[8px] m-auto overflow-auto transition-opacity duration-700 opacity-100 
            ${tab ? "opacity-100" : null}`}
        >
          {filterDataNotCompleted?.map((item) => {
            return (
              <>
                <section
                  onClick={() => handleModalEditTask(item)}
                  key={item.id}
                  className="w-[95%] mr-4 px-3 text-[14px] my-2 cursor-pointer  h-[50px] bg-[#ffffffac] z-50 flex justify-between items-center rounded-[8px] m-auto "
                >
                  <div className="w-[60%]">
                    <p>{item.title}</p>
                  </div>
                  <div className="w-[13%] flex">
                    <img
                      src={trash}
                      onClick={() => removeTask(item)}
                      className="mr-2 w-6 h-6 hover:w-7  hover:h-7"
                    />
                    <img
                      src={done}
                      onClick={() => handleCompleted(item)}
                      className="w-6 h-6 mr-2 hover:w-7  hover:h-7"
                    />
                    <img
                      src={edit}
                      onClick={() => handleEdit(item)}
                      className="w-6 h-6 hover:w-7  hover:h-7 "
                    />
                  </div>
                </section>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
