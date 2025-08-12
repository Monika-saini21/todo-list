
import Nav from './components/Nav';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {
  const isDark = useSelector((state) => state.darkmode.dark);
 return (
    <>
    <div
      className={`min-h-screen  transition-all duration-500
        ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-black'}
      `}
    >
  <Nav />
  <Outlet/>
 </div>
</>
  )
}

export default App
