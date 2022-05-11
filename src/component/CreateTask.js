import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, todoDone } from "../Redox/Reducer";
import exit from "../Assets/image/exit.png";

export default ({ penModal, setPenModal }) => {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const data = useSelector((state) => state.data);

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
  };

  return (
    <>
      <section className="w-[100%] h-[100%] flex justify-center items-center">
        <section
          className={`md:hidden bg-[#c4c4c4b9] transition-opacity	duration-700	opacity-0  w-[50%] h-[50%] top-[25%] min-w-[300px] min-h-[340px] absolute rounded-lg 
          ${penModal ? "opacity-100" : null}`}
        >
          <div
            onClick={() => setPenModal(false)}
            className={`absolute top-4 left-4 cursor-pointer transition-opacity	duration-700	opacity-0
            ${penModal ? "opacity-100 z-10" : null}`}
          >
            <img
              className={`w-[25px] h-[25px] transition-opacity	duration-700 z-10	opacity-0
            ${penModal ? "opacity-[80%] w-[25px] h-[25px] " : null}`}
              src={exit}
            />
          </div>
          <div className="w-[100%] flex justify-center pt-16 ">
            <input
              value={text}
              onChange={(e) => settext(e.target.value)}
              placeholder="please enter someting"
              className={`bg-[#fffffff8] rounded-[4px] z-10 placeholder:text-[10px] text-[10px] pl-[20px] w-[200px] h-[30px] transition-opacity	duration-700	opacity-0
              ${penModal ? "opacity-100" : null}`}
            />
          </div>
          <p
            onClick={() => addTasks()}
            className="absolute bottom-3 right-4 cursor-pointer z-10"
          >
            {" "}
            clickme ...
          </p>
          <section className="w-[90%] mx-5 mt-5  h-[170px]  rounded-[8px] m-auto z-50 overflow-auto absolute  ">
            {data?.Array?.map((item) => {
              return (
                <section
                  key={item.id}
                  className="w-[95%] mr-4 px-3 text-[14px] my-2  h-[50px] bg-[#ffffffac] z-50 flex justify-between items-center rounded-[8px] m-auto "
                >
                  <div className="w-[60%]">
                    <p>{item.title}</p>
                  </div>
                  <div className="w-[40%] flex justify-around">
                    <p onClick={() => removeTask(item)}>crash</p>
                    <p onClick={() => handleCompleted(item)}>done</p>
                  </div>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};
