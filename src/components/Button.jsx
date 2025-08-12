import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../features/darkmode";



function Button() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkmode.dark);

  return (
   
    
      <label className="relative inline-flex items-center mr-4 mb-1.5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
            onClick={() => dispatch(toggleDarkmode())}
        />
        <div className="w-14 h-8 pt-1 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-200 dark:bg-gray-700 rounded-full peer  peer-checked:border-2 peer-checked:border-white   peer-checked:bg-gray-600 transition-all duration-300">
         <i class='bx bxs-sun ml-1'></i>
         <i class='bx bx-moon ml-3 fixed text-xl text-white mt-0.5' ></i>
        </div>
        <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 transform peer-checked:translate-x-6"></div>
      </label>

  );
}

export default Button;
