import React, { StrictMode } from 'react'
import {createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Calendar from './components/Calendar.jsx'

import List from './components/List.jsx'
import Forms from './components/Forms.jsx'
import Timeline from './components/Timeline.jsx'
import TodoFome from './components/TodoFome.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
      children:[
      {
        path:"/",
        element:<TodoFome/>
   
  },
    {
    path:"calendar",
    element:<Calendar/>,
    },
     {
    path:"list",
    element:<List/>,
    },
     {
    path:"Forms",
    element:<Forms/>,
    },
     {
    path:"timeline",
    element:<Timeline/>,
    },
  ]}
  ])
createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
    </StrictMode>

)
