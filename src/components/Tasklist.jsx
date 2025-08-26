import { useSelector, useDispatch } from "react-redux";
import { handleChange, handleDelete } from "../features/taskSlice";

function Tasklist() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkmode.dark);
  const Todo = useSelector((state) => state.tasks.Todo);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  
  const filteredTodos = Todo.filter((todo) =>
    (todo.task || "")
      .toLowerCase()
      .includes((searchQuery || "").toLowerCase()) ||
    (todo.purpose || "")
      .toLowerCase()
      .includes((searchQuery || "").toLowerCase())
  );
    const pendingTodos = filteredTodos.filter((todo) => !todo.isChecked);
  const completedTodos = filteredTodos.filter((todo) => todo.isChecked);
  return (
     <div className="flex md:flex-col flex-row ml-5  md:ml-0 overflow-x-auto items-start md:items-center  md:w-full ">
      {/* Pending Tasks */}
      
      <ul
        className={`flex  flex-col mt-5 flex-wrap px-6 justify-start gap-6 rounded-xl  md:w-270 ${
          isDark ? "bg-gray-800" : "bg-gray-100"
          
        }`}
      >
        <h2 className="text-xl text-center  font-bold mt-4  ">
        Pending Tasks
      </h2>
      <div className="flex md:flex-row flex-col gap-6 mb-6 ">
        {pendingTodos.length > 0 ? (
          pendingTodos.map((todo) => (
            
            <div
              key={todo.id}
              className={`w-60 h-40  rounded-md p-2 ${
                isDark ? "bg-gray-200" : "bg-white"
              }`}
            >
              <li className="list-none">
                <div className="flex justify-between items-center">
                  <span>
                    <input
    type="checkbox"
    checked={todo.isChecked || false}
    onChange={() => dispatch(handleChange(todo.id))}
    className={`mr-2 w-3.5 h-3.5 appearance-none border-2 rounded-full cursor-pointer
      ${isDark ? "border-gray-400" : "border-gray-600"}
      checked:bg-blue-500 checked:border-blue-500`}
    style={{ outline: "none" }}
  />
                    <strong className="text-gray-500">{todo.purpose}</strong>
                  </span>
                  <img
                    className="w-[13px] h-[13px] cursor-pointer"
                    onClick={() => dispatch(handleDelete(todo.id))}
                    src="https://cdn-icons-png.flaticon.com/128/657/657059.png"
                    alt="delete"
                  />
                </div>
                <p className="h-23 text-[17px] text-gray-800">{todo.task}</p>
                <div className="border-t-2 py-2 flex justify-between border-gray-500">
                  <p className="text-gray-800 text-sm">{todo.date}</p>
                  <p className="text-gray-800 text-sm">
                    {todo.time || "No due time"}
                  </p>
                </div>
              </li>
            </div>
           
          ))
          
        ) : (
           <div className="md:w-270 w-60 flex flex-col h-45 rounded-2xl">
            <img
              className="md:ml-117 ml-14 w-40"
              src="https://cdn-icons-png.flaticon.com/128/18735/18735401.png"
              alt="empty"
            />
            <p className="text-center  text-lg">Np pending tasks</p>
          </div>
          
        )}
         </div>
      </ul>

      {/* Completed Tasks */}
      {completedTodos.length > 0 && (
        <>
         
          <ul
            className={`flex flex-col mb-4 mx-6 md:mx-0 flex-wrap px-6 mt-5 justify-start  rounded-xl md:w-270 ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
             <h2 className="text-xl text-center font-bold  mt-4 mb-6">
            Completed Tasks
          </h2>
           <div className="flex md:flex-row flex-col gap-6  mb-6">
            {completedTodos.map((todo) => (
              <div
                key={todo.id}
                className={`w-60 h-40  rounded-md p-2 ${
                  isDark ? "bg-gray-200" : "bg-white"
                }`}
              >
                <li
                  className={`${
    todo.isChecked ? "line-through decoration-black text-black" : "text-black"
  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>
                     <input
  type="checkbox"
  checked={true}
  onChange={() => dispatch(handleChange(todo.id))}
  className={`mr-2 w-4 h-4  appearance-none border-4 rounded-full cursor-pointer
    ${isDark ? "border-gray-900" : "border-gray-900"}
    checked:bg-black checked:border-gray-500`}
  style={{ outline: "color:black" }}
/>

                      <strong className="text-gray-500">{todo.purpose}</strong>
                    </span>
                    <img
                      className="w-[13px] h-[13px] cursor-pointer"
                      onClick={() => dispatch(handleDelete(todo.id))}
                      src="https://cdn-icons-png.flaticon.com/128/657/657059.png"
                      alt="delete"
                    />
                  </div>
                  <p className="h-23 text-[17px] text-gray-800">{todo.task}</p>
                  <div className="border-t-2 py-2 flex justify-between border-gray-500">
                    <p className="text-gray-800 text-sm">{todo.date}</p>
                    <p className="text-gray-800 text-sm">
                      {todo.time || "No due time"}
                    </p>
                  </div>
                </li>
              </div>
            ))}
            </div>
          </ul>
        </>
        
      )}
      
    </div>
  );
}

export default Tasklist;
