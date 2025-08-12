function CalendarList ({Todo ,handleDelete}){
    return(
        <div className="flex-col">
                  {Todo.length > 0 ? (
                    Todo.map((todo) => (
                      <div
                        key={todo.id}
                        className="bg-gray-200 m-9 mb-3 mt-5 h-20 shadow-md shadow-gray-400 rounded-2xl flex p-1"
                      >
                        <div className="border-r-2 border-gray-700 pt-1 pb-3">
                          <div className="px-3 text-center text-sm text-gray-800">
                            {todo.date}
                          </div>
                          <div className="text-center text-gray-800">
                            {todo.time}
                          </div>
                        </div>
                        <div className="pt-3 w-80 text-wrap text-gray-800 pl-2">
                          {todo.task}
                        </div>
                        <i
                          className="bx bxs-message-alt-x p-2 text-gray-800 cursor-pointer"
                            onClick={() => handleDelete(todo.id)}
                        ></i>
                      </div>
                    ))
                  ) : (
                    <div className="w-130 bg-gray-200 flex items-center justify-center h-110 m-8 rounded-2xl">
                      <span>
                        <img
                          className="w-40"
                          src="https://cdn-icons-png.flaticon.com/128/5757/5757232.png"
                          alt="empty"
                        />
                        <p className="text-2xl text-gray-800 font-semibold">
                          No Task Here
                        </p>
                      </span>
                    </div>
                  )}
                </div>
    )
}
export default CalendarList;