import { Link, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/searchSlice";
import { useState } from "react";

function Nav() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const location = useLocation();
  const isDark = useSelector((state) => state.darkmode.dark);

  // local state for showing search bar on phone
  const [showSearch, setShowSearch] = useState(false);

  const menuItems = [
    { name: "Board", path: "/" },
    { name: "Calendar", path: "/calendar" },
  ];

  return (
    <div className={`${isDark ? "shadow-md shadow-gray-600" : "shadow-md"}`}>
      <div className="flex justify-between items-center h-[54px] px-4">
        <p className="text-xl font-bold">Todo app</p>

        {/* Desktop search bar */}
        <form
          className="relative hidden md:block"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setSearchQuery(searchQuery));
          }}
        >
          <input
            type="text"
            placeholder="Search the task"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="pl-6 pr-3 py-2 w-[220px] text-black rounded-lg bg-gray-100 border-none focus:outline-none"
          />
          <img
            className="w-[14px] h-[14px] absolute left-2 top-1/2 transform -translate-y-1/2"
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt="search"
          />
        </form>

        {/* Phone search icon */}
        <button
          className="md:hidden"
          onClick={() => setShowSearch(!showSearch)}
        >
          <img
            className="w-[20px] h-[20px]"
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt="search-icon"
          />
        </button>
      </div>

      {/* Phone search bar (only visible when icon clicked) */}
      {showSearch && (
        <form
          className="relative bottom-11.5 w-60 left-30 h-0 px-4  md:hidden"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setSearchQuery(searchQuery));
            setShowSearch(false); // hide after search
          }}
        >
          <input
            type="text"
            placeholder="Search the task"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="pl-6 pr-3 py-2 w-full text-black rounded-lg bg-gray-100 border-none focus:outline-none"
            autoFocus
          />
          
        </form>
      )}

      <div className="flex justify-between">
        <ul className="flex list-none gap-5 ml-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`pb-2 cursor-pointer border-b-2 ${
                    isActive
                      ? isDark
                        ? "border-white text-white"
                        : "border-black text-black"
                      : "border-transparent "
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </div>
    </div>
  );
}
export default Nav;
