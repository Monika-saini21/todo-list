
import './Nav.css'

function Nav( {searchTerm,setSearchTerm} ) {

  return (
    <div className="list" >
    <div className="nav">
    <p className=" heading">Todo app</p>
    
   <form  className="search" >
    <input className="input" type="text" value={searchTerm} placeholder="Search the task" onChange={(e) => setSearchTerm(e.target.value)} />
   <img className="searchicon" src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt=""  /> 
  </form>
  
    </div>
    <div >
        <ul className="catagery" >
            <li>Board</li>
            <li>List</li>
            <li>Timeline</li>
            <li>Calender</li>
            <li>Forms</li>
        </ul>
    </div>
   
    </div>
  )
}

export default Nav
