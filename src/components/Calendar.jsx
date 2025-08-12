import { useState } from "react";
import CalendarList from "./CalendarList";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../features/taskSlice";


function Calendar() {
  const dispatch = useDispatch();
  const { Todo} = useSelector((state) => state.tasks);
 const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
 const monthsOfYears = ["January","February","March","April","May","June","July","August","September","October","November","December"]
 const currentDate = new Date ()
 const [currentMonth,setCurrentMonth]=useState(currentDate.getMonth())
 const [currentYear,setCurrentYear]=useState(currentDate.getFullYear())

 const daysInMonth = new Date(currentYear, currentMonth + 1,0).getDate()
 const FirstDayOfMonth = new Date(currentYear , currentMonth, 1).getDay()
 
 function prevMonth (){
    setCurrentMonth((prevMonth)=>(prevMonth === 0 ? 11 : prevMonth -1))
    setCurrentYear((prevYear)=>(currentMonth === 0 ? prevYear -1 : prevYear)) 
  }

  function nextMonth (){
    setCurrentMonth((prevMonth)=>(prevMonth === 11 ? 0 : prevMonth +1))
    setCurrentYear((prevYear)=>(currentMonth === 11 ? prevYear +1 : prevYear)) 
  }

 console.log(daysInMonth,FirstDayOfMonth)
  return (
    <div className="  flex justify-center  items-center ">
    <div className="  px-3  h-130 mt-5 rounded-2xl flex-wrap border-8 flex justify-center  round[20rem]  border-gray-200" >
      <div className=" m-4 w-90 " >
        <h1  className="text-4xl font-bold ">CALENDAR</h1>
        <div className="flex justify-between my-5">
          <h2 className="text-2xl cursor-pointer">{monthsOfYears[currentMonth]} {currentYear}</h2>
          <div className="flex gap-2 mr-2" >
            <i className="bx bx-chevron-left text-black bg-gray-200 text-2xl p-1 cursor-pointer rounded-4xl" onClick={prevMonth}></i>
             <i className="bx bx-chevron-right text-black bg-gray-200 text-2xl p-1 rounded-3xl cursor-pointer"onClick={nextMonth}></i>
          </div>
        </div>
        <div className="flex justify-center gap-1">
        {daysOfWeek.map((day)=>(
          <span className="w-12 text-center cursor-pointer border-b-2 " key={day}>{day}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mt-5 ">
        {[...Array(FirstDayOfMonth).keys()].map((_,index)=>(
          <span className="w-12 text-center py-1" key={`empty-${index}`}/>
          ))}
         {[...Array(daysInMonth).keys()].map((day) => {
  const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
  const dayTasks = Todo.filter((todo) => todo.date === dateString);
  const isToday =
    day + 1 === currentDate.getDate() &&
    currentMonth === currentDate.getMonth() &&
    currentYear === currentDate.getFullYear();

  let className =
    " gap-1 flex flex-wrap bg-gray-100 truncate text-black  rounded-xl cursor-pointer ";
  
  if (isToday && dayTasks.length > 0) {
   
  } else if (isToday) {
    className += "bg-gray-600 w-12 h-12 text-center py-1 text-white shadow-md";
  } else if (dayTasks.length > 0) {
    className += "bg-gray-400 w-12 h-12 text-center py-1 text-black";
  } else {
    className +=  "w-12 h-12 text-center py-1 hover:bg-gray-300";
  }

  return (
    <div key={day + 1} className={className}>
      <span className=" pl-1.5">{day + 1}</span>
      {dayTasks.map((task) => (
        <span key={task.id} className="pl-1.5 truncate text-[10px]  text-center text-gray-800">
          {task.task}
        </span>
      ))}
    </div>
  );
})}

        </div>
      </div>
     
     <CalendarList Todo={Todo}  
             handleDelete={(id) => dispatch(handleDelete(id))}/>
    </div>
    </div>
  );
}

export default Calendar;



