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

  return (
    <div className="flex justify-center">
      <ul
        className={`flex flex-wrap px-6 justify-start gap-6 rounded-xl w-270 mt-4 ${
          isDark ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`w-60 h-40 my-6 rounded-md p-2 ${
                isDark ? "bg-gray-100" : "bg-white"
              }`}
            >
              <li
                className="list-none"
                style={{
                  textDecoration: todo.isChecked ? "line-through" : "none",
                }}
              >
                <div className="flex justify-between items-center">
                  <span>
                    <input
                      type="checkbox"
                      checked={todo.isChecked || false}
                      onChange={() => dispatch(handleChange(todo.id))}
                      className="mr-2"
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
          <div className="w-270 py-4 rounded-2xl">
            <img
              className="ml-100 w-55"
              src="https://cdn-icons-png.flaticon.com/128/18735/18735401.png"
              alt="empty"
            />
            <p className="text-center text-lg">Your todo is empty</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Tasklist;
