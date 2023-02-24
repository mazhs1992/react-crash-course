import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewPost from './components/NewPost'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import './index.css'

//here you pass all the routes you want to have
const router =createBrowserRouter([
  {path:'/',element:  <App />},
  {path:'/test',element: <h1>test</h1>},
  {path:'/create-post',element:  <NewPost />}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)

/*

RouterProvider
    tells React to watch the url and send different component for different path

*/