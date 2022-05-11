import exit from "../Assets/image/exit.png";
import { useSelector, useDispatch } from "react-redux";
import { UpdateTask } from "../Redox/Reducer";

export default ({ isEditOpen, setisEditOpen }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.task);

  return (
    <>
      <section className="w-[100%] h-[100%] flex justify-center items-center">
        <section
          className={`md:hidden bg-[#c4c4c492] w-[50%] h-[50%] top-[25%] min-w-[300px] min-h-[300px] absolute rounded-lg transition-opacity duration-700 opacity-0
            ${isEditOpen ? "opacity-100" : null}`}
        >
          <div
            onClick={() => setisEditOpen(false)}
            className={`absolute top-4 left-4 cursor-pointer transition-opacity z-10 duration-700 opacity-0
            ${isEditOpen ? "opacity-100" : null}`}
          >
            <img
              className={`w-[25px] h-[25px] transition-opacity duration-700 opacity-0
            ${isEditOpen ? "opacity-[50%] w-[25px] h-[25px]" : null}`}
              src={exit}
            />
          </div>
        </section>
      </section>
    </>
  );
};
