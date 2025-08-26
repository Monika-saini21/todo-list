import { useDispatch, useSelector } from "react-redux";
import Tasklist from "./Tasklist.jsx";
import {
  setShow,
  handleInput,
  clickhandle,
  handleChange,
  handleDelete
} from "../features/taskSlice";

function TodoFome() {
  const isDark = useSelector((state) => state.darkmode.dark);
  const dispatch = useDispatch();
  const { Todo, input, show } = useSelector((state) => state.tasks);

  return (
    <>
      {/* Add todo button */}
      <button
        className="border-none bg-gray-100 px-8 font-semibold text-gray-800 py-2 text-lg rounded ml-5 mt-3"
        onClick={() => dispatch(setShow(true))}
      >
        + add todo
      </button>

      {/* Form Modal */}
      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-[999]">
          <form
            className={`absolute flex flex-col md:left-[40%] gap-5 ${
              isDark ? "bg-gray-800" : "bg-gray-300"
            } p-5 rounded-lg`}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(clickhandle());
            }}
          >
            {/* Close button */}
            <img
              className="w-[13px] h-[13px] absolute right-2 top-2 cursor-pointer"
              onClick={() => dispatch(setShow(false))}
              src={`${
                isDark
                  ? "https://cdn-icons-png.flaticon.com/128/458/458595.png"
                  : "https://cdn-icons-png.flaticon.com/128/657/657059.png"
              }`}
              alt="close"
            />

            <h1 className="underline text-center text-3xl font-semibold">todo</h1>

            {/* Purpose Select */}
            <select
              name="purpose"
              value={input.purpose}
              onChange={(e) =>
                dispatch(handleInput({ name: e.target.name, value: e.target.value }))
              }
              className="px-5 py-2 rounded border-none bg-white text-gray-600"
            >
              <option className="text-gray-400" value="">
                enter the purpose
              </option>
              <option value="working">working</option>
              <option value="learning">learning</option>
            </select>

            {/* Task Input */}
            <input
              type="text"
              name="task"
              value={input.task}
              onChange={(e) =>
                dispatch(handleInput({ name: e.target.name, value: e.target.value }))
              }
              placeholder="enter the task"
              className="px-5 py-2 rounded border-none text-gray-600 bg-white"
            />

            {/* Time Input */}
            <input
              type="time"
              name="time"
              value={input.time}
              onChange={(e) =>
                dispatch(handleInput({ name: e.target.name, value: e.target.value }))
              }
              className="px-5 w-full py-2 rounded border-none text-gray-600 bg-white"
            />

            {/* Date Input */}
            <input
              type="date"
              name="date"
              value={input.date}
              onChange={(e) =>
                dispatch(handleInput({ name: e.target.name, value: e.target.value }))
              }
              className="px-5 py-2 w-full rounded border-none text-gray-600 bg-white"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gray-700 text-white text-lg px-4 py-2 rounded"
            >
              submit
            </button>
          </form>
        </div>
      )}

      {/* Task List */}
      <Tasklist
        Todo={Todo}
        handleChange={(id) => dispatch(handleChange(id))}
        handleDelete={(id) => dispatch(handleDelete(id))}
      />
    </>
  );
}

export default TodoFome;
